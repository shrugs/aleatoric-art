<script lang="ts">
  export let data;
</script>

<h1 class="text-xl">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#each data.tokens as token (token.token.tokenId)}
  {token.token.tokenId}
{/each}
