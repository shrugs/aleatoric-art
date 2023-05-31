import { fetchTokens } from '$lib/zdk';
import type { LayoutServerLoad } from './$types';

export const load = (async () => {
  const result = await fetchTokens();

  return {
    tokens: result.tokens.nodes,
    maxTokenId: result.tokens.nodes.length - 1
  };
}) satisfies LayoutServerLoad;
