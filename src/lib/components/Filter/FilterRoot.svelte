<script lang="ts">
	import OrderBy from './OrderBy.svelte';
</script>

<div class="filter-root">
	<div class="filter-root-inner">
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
			border: var(--border-2);
			background-color: var(--color-callout-1);
		}
	}
</style>
