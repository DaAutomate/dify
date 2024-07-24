#!/bin/bash

set -e

if [[ "${MIGRATION_ENABLED}" == "true" ]]; then
  echo "Running migrations"
  flask upgrade-db
fi

if [[ "${MODE}" == "worker" ]]; then

  # Get the number of available CPU cores
  AVAILABLE_CORES=$(nproc)
  if [ "${CELERY_AUTO_SCALE,,}" = "true" ]; then
    # Set MAX_WORKERS to the number of available cores if not specified
    MAX_WORKERS=${CELERY_MAX_WORKERS:-$AVAILABLE_CORES}
    MIN_WORKERS=${CELERY_MIN_WORKERS:-1}
    CONCURRENCY_OPTION="--autoscale=${MAX_WORKERS},${MIN_WORKERS}"
  elif [ -n "$CELERY_WORKER_AMOUNT" ]; then
    # If CELERY_WORKER_AMOUNT is set, use it
    CONCURRENCY_OPTION="-c ${CELERY_WORKER_AMOUNT}"
  else
    # Otherwise, the default is the number of CPUs available on the system
    CONCURRENCY_OPTION=""
  fi


  exec celery -A app.celery worker -P ${CELERY_WORKER_CLASS:-gevent} $CONCURRENCY_OPTION --loglevel INFO \
    -Q ${CELERY_QUEUES:-dataset,generation,mail,ops_trace,app_deletion}

elif [[ "${MODE}" == "beat" ]]; then
  exec celery -A app.celery beat --loglevel INFO
else
  if [[ "${DEBUG}" == "true" ]]; then
    exec flask run --host=${DIFY_BIND_ADDRESS:-0.0.0.0} --port=${DIFY_PORT:-5001} --debug
  else
    exec gunicorn \
      --bind "${DIFY_BIND_ADDRESS:-0.0.0.0}:${DIFY_PORT:-5001}" \
      --workers ${SERVER_WORKER_AMOUNT:-1} \
      --worker-class ${SERVER_WORKER_CLASS:-gevent} \
      --timeout ${GUNICORN_TIMEOUT:-200} \
      --preload \
      app:app
  fi
fi
