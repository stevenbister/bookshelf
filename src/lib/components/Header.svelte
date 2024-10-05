<script lang="ts">
	export let pathname: string;
</script>

<header class="header container container-m">
	<div class="header-container">
		<div class="header-inner">
			{#if pathname === '/'}
				<h1 class="heading">Bookshelf</h1>
			{:else}
				<p class="heading">Bookshelf</p>
			{/if}
		</div>
	</div>
</header>

<style lang="scss">
	$header-bg: var(--color-light-1);
	$header-border: var(--border-2);

	@layer components {
		.header {
			border-bottom: $header-border;
			background-color: $header-bg;
			padding-block: var(--space-2) var(--space-3);
		}

		.header-container {
			position: relative;

			&::after {
				position: absolute;
				border: $header-border;
				background-color: var(--color-accent-1);
				content: '';
				inset: 6px -6px -6px 6px;
			}
		}

		.header-inner {
			position: relative;
			z-index: 2;
			border: $header-border;
			background-color: $header-bg;
			padding-block: var(--space-2);
		}

		.heading {
			font-size: var(--fs-2);
			font-weight: var(--fw-4);
			text-align: center;
		}
	}
</style>
