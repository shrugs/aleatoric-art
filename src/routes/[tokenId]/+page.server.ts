import { ALEATORIC_ADDRESS } from '$lib/constants';
import { zdk } from '$lib/zdk';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
  const collection = await zdk.collection({ address: ALEATORIC_ADDRESS });

  const result = await zdk.token({
    token: { address: ALEATORIC_ADDRESS, tokenId: params.tokenId }
  });

  return {
    token: result.token,
    maxTokenId: (collection.totalSupply ?? 46) - 1
  };
}) satisfies PageServerLoad;
