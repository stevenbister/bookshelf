<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if data.books?.length}
	<pre>{JSON.stringify(data.books, null, 2)}</pre>
{:else}
	<p>No books found</p>
{/if}
