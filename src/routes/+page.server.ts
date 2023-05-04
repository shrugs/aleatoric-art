import { ALEATORIC_ADDRESS } from '$lib/constants';
import { zdk } from '$lib/zdk';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  const result = await zdk.tokens({
    pagination: { limit: 100 },
    where: { collectionAddresses: [ALEATORIC_ADDRESS] }
  });

  return { tokens: result.tokens.nodes };
}) satisfies PageServerLoad;
