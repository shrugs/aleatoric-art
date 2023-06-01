<script lang="ts">
  import type { TokensQuery } from '@zoralabs/zdk';

  export let token: TokensQuery['tokens']['nodes'][0]['token'];
  export let controls: boolean = false;
  export let autoplay: boolean = true;

  let muted = true;

  $: tokenId = token.tokenId;

  function toggleMute() {
    muted = !muted;
  }
</script>

<div class="flex flex-col items-stretch gap-1">
  {#key tokenId}
    <!-- svelte-ignore a11y-media-has-caption -->
    <video
      class="w-full aspect-video"
      poster="/posters/{tokenId}.mp4.jpg"
      {autoplay}
      bind:muted
      loop
    >
      <source type="video/mp4" src="/assets/{tokenId}.mp4" />
    </video>
  {/key}
  {#if controls}
    <button class="self-start mx-1 text-xs underline text-gray-500" on:click={toggleMute}>
      {#if muted}
        unmute
      {:else}
        mute
      {/if}
    </button>
  {/if}
</div>
