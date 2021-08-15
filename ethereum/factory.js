/** @format */

import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x24aB731E4548dca498E38d45877A875EB087deF1"
);

export default instance;
