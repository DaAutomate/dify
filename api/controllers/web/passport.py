# -*- coding:utf-8 -*-
import uuid
from controllers.web import api
from flask_restful import Resource
from flask import request
from werkzeug.exceptions import Unauthorized, NotFound
from models.model import Site, EndUser, App
from extensions.ext_database import db
from libs.passport import PassportService

class PassportResource(Resource):
    """Base resource for passport."""
    def get(self):
        app_code = request.headers.get('X-App-Code')
        if app_code is None:
            raise Unauthorized('X-App-Code header is missing.')
        external_user_id = request.args.get('external_user_id')
        name = request.args.get('name')

        # get site from db and check if it is normal
        site = db.session.query(Site).filter(
            Site.code == app_code,
            Site.status == 'normal'
        ).first()
        if not site:
            raise NotFound()
        # get app from db and check if it is normal and enable_site
        app_model = db.session.query(App).filter(App.id == site.app_id).first()
        if not app_model or app_model.status != 'normal' or not app_model.enable_site:
            raise NotFound()
        
        end_user = EndUser(
            tenant_id=app_model.tenant_id,
            app_id=app_model.id,
            type='browser',
            is_anonymous=True if not external_user_id else False,
            session_id=generate_session_id(),
            external_user_id=external_user_id,
            name=name if external_user_id else None,
        )
        db.session.add(end_user)
        db.session.commit()

        payload = {
            "iss": site.app_id,
            'sub': 'Web API Passport',
            'app_id': site.app_id,
            'app_code': app_code,
            'end_user_id': end_user.id,
        }

        tk = PassportService().issue(payload)

        return {
            'access_token': tk,
        }

api.add_resource(PassportResource, '/passport')

def generate_session_id():
    """
    Generate a unique session ID.
    """
    while True:
        session_id = str(uuid.uuid4())
        existing_count = db.session.query(EndUser) \
            .filter(EndUser.session_id == session_id).count()
        if existing_count == 0:
            return session_id
