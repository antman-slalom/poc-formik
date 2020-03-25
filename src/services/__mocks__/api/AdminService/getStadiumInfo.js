import ServiceHelper from '../../ServiceMockHelper';

const createObject = (id, mlsYear, openedYear, surface, dimensions, capacity) => ({
    id,
    mlsYear,
    openedYear,
    surface,
    dimensions,
    capacity,
});


const success = (id) => {
    if (id === 1) {
        return ServiceHelper.createOkResponse(
            createObject(1, 2019, 2019, 'Grass', '115 yd × 75 yd (105 m × 69 m)', 19400)
        );
    }
    if (id === 2) {
        return ServiceHelper.createOkResponse(
            createObject(2, 2018, 2018, 'Grass', '115 yd × 75 yd (105 m × 69 m)', 20000)
        );
    }
    if (id === 3) {
        return ServiceHelper.createOkResponse(
            createObject(3, 2015, 2015, 'Grass', '115 yd × 75 yd (105 m × 69 m)', 18000)
        );
    }
    if (id === 4) {
        return ServiceHelper.createOkResponse(
            createObject(4, 2018, 2018, 'Grass', '115 yd × 75 yd (105 m × 69 m)', 22000)
        );
    }
    if (id === 5) {
        return ServiceHelper.createOkResponse(
            createObject(5, 2012, 2012, 'Grass', '115 yd × 73 yd (105 m × 67 m)', 22039)
        );
    }
    if (id === 6) {
        return ServiceHelper.createOkResponse(
            createObject(6, 2011, 1983, 'Polytan', '117 yd × 75 yd (107 m × 69 m)', 54500)
        );
    }
    if (id === 7) {
        return ServiceHelper.createOkResponse(
            createObject(7, 2007, 2007, 'Hybrid grass', '115 yd × 74 yd (105 m × 68 m)', 30991)
        );
    }
    if (id === 8) {
        return ServiceHelper.createOkResponse(
            createObject(8, 2009, 2002, 'FieldTurf', '114 yd × 74 yd (104 m × 68 m)', 69000)
        );
    }
    if (id === 9) {
        return ServiceHelper.createOkResponse(
            createObject(9, 2011, 2011, 'Grass', '120 yd × 75 yd (110 m × 69 m)', 18467)
        );
    }
    if (id === 10) {
        return ServiceHelper.createOkResponse(
            createObject(10, 2007, 2007, 'Grass', '120 yd × 75 yd (110 m × 69 m)', 18061)
        );
    }
    if (id === 11) {
        return ServiceHelper.createOkResponse(
            createObject(11, 2003, 2003, 'Grass', '120 yd × 75 yd (110 m × 69 m)', 27000)
        );
    }
    if (id === 12) {
        return ServiceHelper.createOkResponse(
            createObject(12, 2017, 2017, 'Grass', '120 yd × 75 yd (110 m × 69 m)', 25500)
        );
    }
    if (id === 13) {
        return ServiceHelper.createOkResponse(
            createObject(13, 2002, 2002, 'FieldTurf', '115 yd × 75 yd (105 m × 69 m)', 65878)
        );
    }
    if (id === 14) {
        return ServiceHelper.createOkResponse(
            createObject(14, 1999, 1999, 'Grass', '115 yd × 75 yd (105 m × 69 m)', 19968)
        );
    }
    if (id === 15) {
        return ServiceHelper.createOkResponse(
            createObject(15, 2017, 2017, 'FieldTurf', '115 yd × 75 yd (105 m × 69 m)', 72035)
        );
    }
    if (id === 16) {
        return ServiceHelper.createOkResponse(
            createObject(16, 2019, 1915, 'Act Global UBU Sports Speed M6-M', '115 yd × 75 yd (105 m × 69 m)', 40000)
        );
    }
    if (id === 17) {
        return ServiceHelper.createOkResponse(
            createObject(17, 2011, 1926, 'FieldTurf', '110 yd × 75 yd (101 m × 69 m)', 25218)
        );
    }
    if (id === 18) {
        return ServiceHelper.createOkResponse(
            createObject(18, 2010, 2010, 'Grass', '120 yd × 75 yd (110 m × 69 m)', 25000)
        );
    }
    if (id === 19) {
        return ServiceHelper.createOkResponse(
            createObject(19, 2008, 2008, 'Grass', '120 yd × 75 yd (110 m × 69 m)', 20213)
        );
    }
    if (id === 20) {
        return ServiceHelper.createOkResponse(
            createObject(20, 2012, 2008, 'Grass', '120 yd × 77 yd (110 m × 70 m)', 19619)
        );
    }
    if (id === 21) {
        return ServiceHelper.createOkResponse(
            createObject(21, 2006, 2006, 'Grass', '120 yd × 75 yd (110 m × 69 m)', 20000)
        );
    }
    if (id === 22) {
        return ServiceHelper.createOkResponse(
            createObject(22, 2010, 2010, 'Grass', '120 yd × 75 yd (110 m × 69 m)', 18500)
        );
    }
    if (id === 23) {
        return ServiceHelper.createOkResponse(
            createObject(23, 2005, 2005, 'Grass', '117 yd × 74 yd (107 m × 68 m)', 20500)
        );
    }
    if (id === 24) {
        return ServiceHelper.createOkResponse(
            createObject(24, 2015, 2009, 'Grass', '110 yd × 70 yd (101 m × 64 m)', 47309)
        );
    }

    return ServiceHelper.createOkResponse(-1, 0, 0, '', '', 0);
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
