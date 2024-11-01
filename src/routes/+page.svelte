<script lang="ts">
	import FilterRoot from '$lib/components/Filter/FilterRoot.svelte';
	import Grid from '$lib/components/Grid.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if data.books?.length}
	<FilterRoot authors={data.authors} seriesTitles={data.seriesTitles} />

	<Grid books={data.books} />
{:else}
	<p>No books found</p>
{/if}
