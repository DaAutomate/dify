from libs.exception import BaseHTTPException


class RepeatPasswordNotMatchError(BaseHTTPException):
    error_code = 'repeat_password_not_match'
    description = "New password and repeat password does not match."
    code = 400


class CurrentPasswordIncorrectError(BaseHTTPException):
    error_code = 'current_password_incorrect'
    description = "Current password is incorrect."
    code = 400


class ProviderRequestFailedError(BaseHTTPException):
    error_code = 'provider_request_failed'
    description = None
    code = 400


class InvalidInvitationCodeError(BaseHTTPException):
    error_code = 'invalid_invitation_code'
    description = "Invalid invitation code."
    code = 400


class AccountAlreadyInitedError(BaseHTTPException):
    error_code = 'account_already_inited'
    description = "The account has been initialized. Please refresh the page."
    code = 400


class AccountNotInitializedError(BaseHTTPException):
    error_code = 'account_not_initialized'
    description = "The account has not been initialized yet. Please proceed with the initialization process first."
    code = 400

class InvalidEmailError(BaseHTTPException):
    error_code = 'invalid_email'
    description = "The email address is not valid."
    code = 400

class EmailNotRegisteredError(BaseHTTPException):
    error_code = 'email_not_registered'
    description = "Sorry, the email address is not registered."
    code = 400