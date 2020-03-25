import ServiceHelper from '../../ServiceMockHelper';

const createObject = (id, name, number, locationId, status, position, international, onLoan, injured, starter) => ({
    id,
    name,
    number,
    locationId,
    status,
    position,
    international,
    onLoan,
    injured,
    starter,
});

const success = (id) => {
    if (id === 13 || id === '13') {
        return ServiceHelper.createOkResponse(
            createObject(1, 'Anthony Luaders', 13, 15, 'inactive', 'striker', false, false, false, false)
        );
    }

    if (id === 42 || id === '42') {
        return ServiceHelper.createOkResponse(
            createObject(1, 'Josef Martinez', 7, 15, 'live', 'striker', true, false, false, true)
        );
    }

    return ServiceHelper.createOkResponse(0, ' ', '', '', 'live', '', false, false, false, false);
};

const unauthorized = ServiceHelper.createUnauthorizedResponse();

const serverError = ServiceHelper.createUnauthorizedResponse();

const throwError = ServiceHelper.createReject();

export default {
    success,
    unauthorized,
    serverError,
    throwError,
};
