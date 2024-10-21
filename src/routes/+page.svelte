<script lang="ts">
	import Grid from '$lib/components/Grid.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if data.books?.length}
	<div class="mt-2">
		<Grid books={data.books} />
	</div>
{:else}
	<p>No books found</p>
{/if}
