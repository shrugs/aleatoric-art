<script lang="ts">
  import AleatoricCard from '$lib/components/AleatoricCard.svelte';

  export let data;
</script>

<svelte:head>
  <title>Aleatoric</title>
  <meta property="og:title" content="Aleatoric, by one of the many matts" />
  <meta property="og:url" content="https://aleatoric.art" />
  <meta
    property="og:description"
    content="Aleatoric is an experiment in artistic intentionality, digital scarcity, and serendipity
        where I literally make art in my sleep: my sleep talk babble is auto-transcribed,
        auto-visualized, and minted into an NFT the morning-of."
  />
  <meta property="og:image" content="https://aleatoric.art/meta.png" />
  <meta name="twitter:site" content="@1ofthemanymatts" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<main class="flex flex-col py-4 md:px-4 gap-4">
  <section class="flex flex-col md:flex-row items-center gap-4 md:py-16">
    <div class="px-4 min-w-0 flex-1 flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl">Aleatoric</h1>
        <h2>
          by <a
            class="underline"
            href="https://oneofthemanymatts.com"
            rel="noopener noreferrer"
            target="_blank">one of the many matts</a
          >
        </h2>
      </div>
      <p class="text-gray-800">
        Aleatoric is an experiment in artistic intentionality, digital scarcity, and serendipity
        where I literally make art in my sleep: my sleep talk babble is auto-transcribed,
        auto-visualized, and minted into an NFT the morning-of.
      </p>
      <p class="text-gray-800">
        As the artist, I don't know when pieces will be minted, what they're titled, or even what
        they'll look or sound like.
      </p>
      <p class="text-sm text-gray-500">
        Learn more about Aleatoric in the <a
          class="underline"
          href="https://zine.zora.co/aleatoric-nft-project"
          rel="noopener noreferrer"
          target="_blank">Zora Zine</a
        >.
      </p>
    </div>
    <div class="min-w-0 flex-1 flex-col w-full">
      <AleatoricCard token={data.tokens[0].token} />
    </div>
  </section>
  <section>
    <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
      {#each data.tokens.slice(1) as { token } (token.tokenId)}
        <AleatoricCard {token} smol />
      {/each}
    </ul>
  </section>
</main>
