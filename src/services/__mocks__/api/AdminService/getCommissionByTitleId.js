import ServiceHelper from '../../ServiceMockHelper';

const createObject = (agentTitleCommissionId, commission, dollarThreshold, percentThreshold) => ({
    agentTitleCommissionId,
    commission,
    dollarThreshold,
    percentThreshold,
});

const successData = [
    createObject(0, 100, 1000, 0.15),
    createObject(1, 200, 2000, 0.25),
    createObject(2, 300, 3000, 0.35),
    createObject(3, 400, 4000, 0.45),
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
