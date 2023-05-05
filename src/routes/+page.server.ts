import { ALEATORIC_ADDRESS } from '$lib/constants';
import { zdk } from '$lib/zdk';
import type { SortDirection, TokenSortKey } from '@zoralabs/zdk';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  const result = await zdk.tokens({
    where: { collectionAddresses: [ALEATORIC_ADDRESS] },
    sort: { sortKey: 'MINTED' as TokenSortKey, sortDirection: 'DESC' as SortDirection },
    pagination: { limit: 100 }
  });

  return { tokens: result.tokens.nodes };
}) satisfies PageServerLoad;
