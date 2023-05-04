import { ZDK, ZDKChain, ZDKNetwork } from '@zoralabs/zdk';

export const zdk = new ZDK({
  networks: [{ network: ZDKNetwork.Ethereum, chain: ZDKChain.Mainnet }]
});
