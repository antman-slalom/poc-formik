import * as yup from 'yup';
import playerIdentificationValidationSchema from '../components/PlayerIdentification/validateSchema';
import playerLocationValidationSchema from '../components/PlayerLocation/validateSchema';
import playerPositionValidationSchema from '../components/PlayerPosition/validateSchema';
import playerTeamValidationSchema from '../components/PlayerTeam/validateSchema';
import playerStatsValidationSchema from '../components/PlayerStats/validateSchema';
import fieldNames from './fieldNames';

export default yup.object({
    [fieldNames.PLAYER_IDENTIFICATION]: playerIdentificationValidationSchema,
    [fieldNames.PLAYER_LOCATION]: playerLocationValidationSchema,
    [fieldNames.PLAYER_POSITION]: playerPositionValidationSchema,
    [fieldNames.PLAYER_TEAM]: playerTeamValidationSchema,
    [fieldNames.PLAYER_STATS]: playerStatsValidationSchema,


    [fieldNames.PLAYER_STATUS]: yup
        .string()
        .matches(/live/),
});
