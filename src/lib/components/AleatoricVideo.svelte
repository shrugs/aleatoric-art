<script lang="ts">
  import { convertURIToHTTPS } from '@zoralabs/nft-hooks/dist/fetcher/UriUtils';

  export let uri: string | null | undefined;
  export let controls: boolean = false;
  export let autoplay: boolean = true;

  let muted = true;

  $: src = uri && convertURIToHTTPS(uri);

  const ID_REGEX = /\/(\d+)\.mp4$/;
  $: tokenId = uri?.match(ID_REGEX)?.[1];

  function toggleMute() {
    muted = !muted;
  }
</script>

<div class="flex flex-col items-stretch gap-1">
  {#key uri}
    <!-- <div class="w-full aspect-video" /> -->
    <!-- svelte-ignore a11y-media-has-caption -->
    <video class="w-full aspect-video" {autoplay} bind:muted loop>
      {#if tokenId}
        <source type="video/mp4" src="/assets/{tokenId}.mp4" />
      {/if}
      {#if uri}
        <source type="video/mp4" {src} />
      {/if}
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
