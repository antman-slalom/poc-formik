import ServiceHelper from '../../ServiceMockHelper';

const createObject = (agentTitleQuotaId, tenureMonth, quota) => ({
    agentTitleQuotaId,
    tenureMonth,
    quota,
});

const successData = [
    createObject(0, 1, 0.15),
    createObject(1, 11, 0.25),
    createObject(2, 12, 0.35),
    createObject(3, 5, 0.45),
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
