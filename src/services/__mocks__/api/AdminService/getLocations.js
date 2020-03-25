import ServiceHelper from '../../ServiceMockHelper';

const createObject = (id, name, address = undefined, city, state, zip = undefined) => ({
    id,
    name,
    address,
    city,
    state,
    zip,
});

const successData = [
    createObject(1, 'Allianz Field', null, 'Saint Paul', 'Minnesota'),
    createObject(2, 'Audi Field', null, 'Washington', 'D.C.'),
    createObject(3, 'Avaya Stadium', null, 'San Jose', 'California'),
    createObject(4, 'Banc of California Stadium', null, 'Los Angeles'),
    createObject(5, 'BBVA Stadium', null, 'Houston'),
    createObject(6, 'BC Place', null, 'Vancouver'),
    createObject(7, 'BMO Field', null, 'Toronto'),
    createObject(8, 'CenturyLink Field', null, 'Seattle'),
    createObject(9, 'Children\'s Mercy Park', null, 'Kansas City', 'Kansas'),
    createObject(10, 'Dick\'s Sporting Goods Park', null, 'Commerce City', 'Colorado'),
    createObject(11, 'Dignity Health Sports Park', null, 'Carson', 'California'),
    createObject(12, 'Exploria Stadium', null, 'Orlando', 'Florida'),
    createObject(13, 'Gillette Stadium', null, 'Foxborough', 'Massachusetts'),
    createObject(14, 'Mapfre Stadium', null, 'Columbus', 'Ohio'),
    createObject(15, 'Mercedes-Benz Stadium', null, 'Atlanta'),
    createObject(16, 'Nippert Stadium', null, 'Cincinnati'),
    createObject(17, 'Providence Park', null, 'Portland', 'Oregon'),
    createObject(18, 'Red Bull Arena', null, 'Harrison', 'New Jersey'),
    createObject(19, 'Rio Tinto Stadium', null, 'Sandy', 'Utah'),
    createObject(20, 'Saputo Stadium', null, 'Montreal'),
    createObject(21, 'SeatGeek Stadium', null, 'Bridgeview', 'Illinois'),
    createObject(22, 'Talen Energy Stadium', null, 'Chester', 'Pennsylvania'),
    createObject(23, 'Toyota Stadium', null, 'Frisco', 'Texas'),
    createObject(24, 'Yankee Stadium', null, 'Bronx', 'New York'),
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
