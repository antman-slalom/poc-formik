import * as yup from 'yup';
import fieldNames from './fieldNames';


const REQUIRED_MESSAGE = 'Required';

export default yup.object({
    [fieldNames.TEAM]: yup
        .string()
        .required(REQUIRED_MESSAGE),
});
