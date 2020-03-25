import playerIdentificationDefault from '../components/PlayerIdentification/initialValues';
import playerLocation from '../components/PlayerLocation/initialValues';
import playerPosition from '../components/PlayerPosition/initialValues';
import playerTeam from '../components/PlayerTeam/initialValues';
import playerStats from '../components/PlayerStats/initialValues';
import fieldNames from './fieldNames';

export default {
    [fieldNames.PLAYER_IDENTIFICATION]: playerIdentificationDefault,
    [fieldNames.PLAYER_LOCATION]: playerLocation,
    [fieldNames.PLAYER_POSITION]: playerPosition,
    [fieldNames.PLAYER_TEAM]: playerTeam,
    [fieldNames.PLAYER_STATS]: playerStats,

    [fieldNames.PLAYER_STATUS]: '',
};
