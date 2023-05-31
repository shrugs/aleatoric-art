import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, parent }) => {
  const { tokens } = await parent();

  const token = tokens.find((token) => token.token.tokenId === params.tokenId);
  if (!token) throw error(404);

  const tokenId = parseInt(params.tokenId);

  return { tokenId, token };
}) satisfies PageServerLoad;
