import getAgentTitles from './getAgentTitles';
import getCommissionByTitleId from './getCommissionByTitleId';
import getLocations from './getLocations';
import getPlayer from './getPlayer';
import getStadiumInfo from './getStadiumInfo';
import getQuotasByTitleId from './getQuotasByTitleId';
import saveAgentTitle from './saveAgentTitle';

const AdminService = {};

// get calls
AdminService.getAgentTitles = () => getAgentTitles.success;
AdminService.getCommissionByTitleId = () => getCommissionByTitleId.success;
AdminService.getLocations = () => getLocations.success;
AdminService.getPlayer = id => getPlayer.success(id);
AdminService.getStadiumInfo = id => getStadiumInfo.success(id);
AdminService.getQuotasByTitleId = () => getQuotasByTitleId.success;

// save calls
AdminService.saveAgentTitle = () => saveAgentTitle.success;

export default AdminService;
