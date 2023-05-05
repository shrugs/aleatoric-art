<script lang="ts">
  import { convertURIToHTTPS } from '@zoralabs/nft-hooks/dist/fetcher/UriUtils';
  import type { TokensQuery } from '@zoralabs/zdk';

  export let token: TokensQuery['tokens']['nodes'][0]['token'];
</script>

<svelte:head>
  <meta property="og:title" content={token.name} />
  <meta property="og:url" content="https://aleatoric.art/{token.tokenId}" />
  <meta property="og:description" content={token.description} />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@1ofthemanymatts" />

  {#if token.image?.url}
    <meta property="og:type" content="video" />
    <meta property="og:video" content={convertURIToHTTPS(token.image?.url)} />
    <meta property="og:video:type" content="video/mp4" />
  {/if}
</svelte:head>
