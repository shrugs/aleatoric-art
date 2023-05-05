<script lang="ts">
  import type { TokensQuery } from '@zoralabs/zdk';
  import AleatoricVideo from './AleatoricVideo.svelte';

  export let token: TokensQuery['tokens']['nodes'][0]['token'];
  export let smol: boolean = false;
</script>

<a href="/{token.tokenId}">
  <div class="flex flex-col {smol ? 'gap-1' : 'gap-2'}">
    <AleatoricVideo uri={token.image?.url} autoplay={!smol} />
    <div class="px-px flex flex-col {smol ? 'gap-1' : 'gap-2'}">
      <h3 class={smol ? 'text-xs' : 'text-sm'}>{token.name}</h3>
    </div>
  </div>
</a>
