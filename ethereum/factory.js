import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0xe11A8eA2b2be6cAFf12b7Cee34d1f3f85192f9b6',
);

export default instance;
