import ServiceHelper from '../../ServiceMockHelper';

const success = ServiceHelper.createOkResponse();

const unauthorized = ServiceHelper.createUnauthorizedResponse();

const serverError = ServiceHelper.createUnauthorizedResponse();

const throwError = ServiceHelper.createReject();

export default {
    success,
    unauthorized,
    serverError,
    throwError,
};
