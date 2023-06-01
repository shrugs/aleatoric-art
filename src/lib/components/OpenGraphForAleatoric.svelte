<script lang="ts">
  import type { TokensQuery } from '@zoralabs/zdk';

  export let token: TokensQuery['tokens']['nodes'][0]['token'];
</script>

<svelte:head>
  <meta property="og:title" content={token.name} />
  <meta property="og:url" content="https://aleatoric.art/{token.tokenId}" />
  <meta property="og:description" content={token.description} />
  <meta property="og:image" content="https://aleatoric.art/posters/{token.tokenId}.mp4.png" />

  <meta property="og:type" content="video" />
  <meta property="og:video" content="https://aleatoric.art/assets/{token.tokenId}.mp4" />
  <meta property="og:video:type" content="video/mp4" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@1ofthemanymatts" />
</svelte:head>
