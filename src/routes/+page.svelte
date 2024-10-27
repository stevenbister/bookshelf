<script lang="ts">
	import Grid from '$lib/components/Grid.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if data.books?.length}
	<Grid books={data.books} />
{:else}
	<p>No books found</p>
{/if}
