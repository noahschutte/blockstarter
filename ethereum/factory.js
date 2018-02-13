import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xC7F37ddC69C879d6f7Dd9E0E3DA34b16Dcc3595E'
);

export default instance;
