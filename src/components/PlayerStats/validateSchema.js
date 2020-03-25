import * as yup from 'yup';
import fieldNames from './fieldNames';


const REQUIRED_MESSAGE = 'Required 1 row';

export default yup.object({
    [fieldNames.STATS]: yup
        .array()
        .min(1, REQUIRED_MESSAGE),
});
