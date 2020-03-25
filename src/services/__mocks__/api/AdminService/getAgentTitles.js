import ServiceHelper from '../../ServiceMockHelper';

const createObject = (titleId, titleName, isDTM, marginSourceId, quotaSourceId) => ({
    titleId,
    titleName,
    isDTM,
    marginSourceId,
    quotaSourceId,
});

const successData = [
    createObject(0, 'Atlanta United', true, 1, 1),
    createObject(1, 'Atlanta Falcons', false, 1, 2),
    createObject(2, 'Atlanta Braves', true, 2, 2),
    createObject(3, 'Atlanta Hawks', true, 3, 2),
    createObject(4, 'Atlanta Knights', true, 2, 1),
    createObject(5, 'GA Tech', true, 1, 3),
    createObject(6, 'Georgia State', false, 1, 1),
    createObject(7, 'University of Georgia', false, 3, 3),
];

const success = ServiceHelper.createOkResponse(successData);

const unauthorized = ServiceHelper.createUnauthorizedResponse();

const serverError = ServiceHelper.createUnauthorizedResponse();

const throwError = ServiceHelper.createReject();

export default {
    success,
    unauthorized,
    serverError,
    throwError,
};
