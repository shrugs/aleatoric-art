import { ALEATORIC_ADDRESS } from '$lib/constants';
import { zdk } from '$lib/zdk';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const prerender = 'auto';

export const load = (async ({ params }) => {
  const collection = await zdk.collection({ address: ALEATORIC_ADDRESS });

  const result = await zdk.token({
    token: { address: ALEATORIC_ADDRESS, tokenId: params.tokenId }
  });

  if (!result.token) throw error(404);

  return {
    token: result.token,
    maxTokenId: (collection.totalSupply ?? 46) - 1
  };
}) satisfies PageServerLoad;
