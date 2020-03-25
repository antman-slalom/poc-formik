import HttpStatus from 'http-status-codes';

class ServiceMockHelper {
    UNAUTHORIZED_MESSAGE = 'User is not authorized to perform the desired action.';

    INTERNAL_SERVER_ERROR_MESSAGE = 'There was an error on the server. Please try again. If this continues, please contact support.';

    createResponse = (status, data = undefined, message = undefined) => Promise.resolve(
        {
            status,
            data,
            message,
        }
    );

    // TODO - needs work
    // createReject = (reason = 'Unknown Error') => Promise.reject(new Error(reason));
    createReject = () => {};

    createOkResponse = data => this.createResponse(HttpStatus.OK, data);

    createUnauthorizedResponse = (message = this.UNAUTHORIZED_MESSAGE) => this.createResponse(HttpStatus.UNAUTHORIZED, undefined, message);

    createServerErrorResponse = (message = this.INTERNAL_SERVER_ERROR_MESSAGE) => this.createResponse(HttpStatus.INTERNAL_SERVER_ERROR, undefined, message);
}

export default new ServiceMockHelper();
