<script lang="ts">
	import type { Author } from '$lib/db/schema/authors';
	import type { Series } from '$lib/db/schema/series';
	import FilterDialog from './FilterDialog.svelte';
	import OrderBy from './OrderBy.svelte';

	interface Props {
		authors: Author[];
		seriesTitles: { id: Series['id']; title: Series['title'] }[];
	}

	let { authors, seriesTitles }: Props = $props();
</script>

<div class="filter-root">
	<div class="filter-root-inner">
		<FilterDialog {authors} {seriesTitles} />
		<OrderBy />
	</div>
</div>

<style lang="scss">
	@use '../../styles/tools' as *;

	@layer components {
		.filter-root {
			@include shadow(var(--color-dark-1), 3px -3px -3px 3px);

			top: calc(var(--space-1) * -1);
		}

		.filter-root-inner {
			position: relative;
			z-index: 2;
			display: grid;
			border: var(--border-2);
			background-color: var(--color-callout-1);
			grid-template-columns: repeat(2, 1fr);

			:global(> :last-child) {
				border-left: var(--border-2);
			}
		}
	}
</style>
