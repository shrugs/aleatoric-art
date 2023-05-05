import pkg from '@zoralabs/zdk';
const { ZDK, ZDKChain, ZDKNetwork } = pkg;

export const zdk = new ZDK({
  networks: [{ network: ZDKNetwork.Ethereum, chain: ZDKChain.Mainnet }]
});
