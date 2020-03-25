import * as yup from 'yup';
import fieldNames from './fieldNames';

const MAX_NAME_LENGTH = 20;

const REQUIRED_MESSAGE = 'Required';
const NAME_MESSAGE = `The middle initial can be no more than ${ MAX_NAME_LENGTH } characters long`;

export default yup.object({
    [fieldNames.NAME]: yup
        .string()
        .required(REQUIRED_MESSAGE)
        .max(MAX_NAME_LENGTH, NAME_MESSAGE),
    [fieldNames.NUMBER]: yup
        .string()
        .required(REQUIRED_MESSAGE)
        .max(MAX_NAME_LENGTH, NAME_MESSAGE),
});
