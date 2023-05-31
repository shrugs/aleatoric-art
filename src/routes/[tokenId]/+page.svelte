<script lang="ts">
  import { marked } from 'marked';
  import AleatoricVideo from '$lib/components/AleatoricVideo.svelte';
  import OpenGraphForAleatoric from '$lib/components/OpenGraphForAleatoric.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  $: prevTokenId = data.tokenId === 0 ? data.maxTokenId : data.tokenId - 1;
  $: nextTokenId = data.tokenId === data.maxTokenId ? 0 : data.tokenId + 1;

  $: name = data.token.token.name;
  $: description = data.token.token.description;

  $: uri = data.token.token.image?.url;
</script>

<OpenGraphForAleatoric token={data.token.token} />

<main class="h-screen flex flex-col">
  <div class="flex flex-row justify-center">
    <a class="text-xs px-4 py-4 text-gray-500" href="/">home</a>
  </div>
  <div class="min-w-0 flex-1 flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
    <a href="/{prevTokenId}">
      <div class="p-8 flex justify-center">
        <span class="lg:hidden"><img class="h-4 w-4" src="/arrow-up.svg" alt="up arrow" /></span>
        <span class="hidden lg:block"
          ><img class="h-4 w-4" src="/arrow-left.svg" alt="left arrow" /></span
        >
      </div></a
    >
    <div class="flex-1 flex flex-col lg:flex-row justify-center w-full gap-8">
      <div class="flex-1 flex flex-col justify-center">
        <AleatoricVideo {uri} controls />
      </div>
      <div class="flex flex-col gap-2 lg:w-96 p-4 lg:p-0">
        <div class="flex-1 flex-col gap-2">
          <h1 class="text-xl">{name}</h1>
          {#if description}
            <p class="text-sm prose">
              {@html marked.parse(description.replaceAll(name ?? '', ''))}
            </p>
          {/if}
        </div>
        <a
          class="text-xs underline text-gray-500"
          href="https://market.zora.co/collections/{data.token.token.tokenContract
            ?.collectionAddress}/{data.tokenId}"
          rel="noopener noreferrer"
          target="_blank">view on Zora</a
        >
      </div>
    </div>
    <a href="/{nextTokenId}">
      <div class="p-8 flex justify-center">
        <span class="lg:hidden"><img class="h-4 w-4" src="/arrow-down.svg" alt="down arrow" /></span
        >
        <span class="hidden lg:block"
          ><img class="h-4 w-4" src="/arrow-right.svg" alt="right arrow" /></span
        >
      </div>
    </a>
  </div>
</main>
