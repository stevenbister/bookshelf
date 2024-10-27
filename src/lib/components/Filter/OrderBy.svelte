<script lang="ts">
	import { page } from '$app/stores';
	import FilterBtn from './FilterBtn.svelte';

	const orderBy = $page.url.searchParams.get('orderBy');
	let selected = $state(orderBy === 'desc' ? 'desc' : 'asc');
</script>

<form method="GET" data-sveltekit-keepfocus>
	<FilterBtn
		name="orderBy"
		value={selected ?? 'asc'}
		onclick={() => {
			selected = selected === 'asc' ? 'desc' : 'asc';
		}}
	>
		{selected === 'asc' ? 'A-Z' : 'Z-A'}
	</FilterBtn>
</form>
