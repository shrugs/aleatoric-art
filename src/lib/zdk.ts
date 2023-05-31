import pkg, { type TokensQuery, type SortDirection, type TokenSortKey } from '@zoralabs/zdk';
import { ALEATORIC_ADDRESS } from './constants';
const { ZDK, ZDKChain, ZDKNetwork } = pkg;

const zdk = new ZDK({
  networks: [{ network: ZDKNetwork.Ethereum, chain: ZDKChain.Mainnet }],
  apiKey: process.env.ZDK_API_KEY
});

let _cache: TokensQuery;

export async function fetchTokens() {
  if (!_cache) {
    console.log('calling zdk...');
    _cache = await zdk.tokens({
      where: { collectionAddresses: [ALEATORIC_ADDRESS] },
      sort: { sortKey: 'MINTED' as TokenSortKey, sortDirection: 'DESC' as SortDirection },
      pagination: { limit: 100 }
    });
  }

  return _cache;
}
