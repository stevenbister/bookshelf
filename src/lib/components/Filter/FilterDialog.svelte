<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Author } from '$lib/db/schema/authors';
	import type { Series } from '$lib/db/schema/series';
	import FilterBtn from './FilterBtn.svelte';

	interface Props {
		authors: Author[];
		seriesTitles: { id: Series['id']; title: Series['title'] }[];
	}

	let { authors, seriesTitles }: Props = $props();

	let dialog: HTMLDialogElement;

	function handleChange(event: Event) {
		const formData = new FormData(event.target?.form as HTMLFormElement);
		const searchParams = new URLSearchParams();

		for (const [key, value] of formData) {
			searchParams.set(key, value);
		}

		goto(`?${searchParams.toString()}`);
	}
</script>

<dialog bind:this={dialog}>
	<button onclick={() => dialog.close()}>close</button>

	<form method="GET" onsubmit={() => dialog.close()} onchange={handleChange}>
		<label for="author">Select an author</label>
		<select id="author" name="author">
			<option disabled selected></option>

			{#each authors as author}
				<option value={author.id}>{author.first_name} {author.last_name}</option>
			{/each}
		</select>

		<label for="series">Select a series</label>
		<select id="series" name="series">
			<option disabled selected></option>
			{#each seriesTitles as series}
				<option value={series.id}>{series.title}</option>
			{/each}
		</select>

		<button type="reset">Clear</button>
		<button>Filter</button>
	</form>
</dialog>

<FilterBtn name="filter" onclick={() => dialog.showModal()}>Filter</FilterBtn>

<style lang="scss">
</style>
