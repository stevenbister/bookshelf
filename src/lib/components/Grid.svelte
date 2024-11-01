<script lang="ts">
	interface Props {
		books: {
			title: string;
			slug: string;
			cover: string | null;
		}[];
	}

	let { books }: Props = $props();
</script>

<ul class="grid">
	{#each books as book}
		<li class="grid-item">
			<a href={book.slug} data-sveltekit-preload-data="tap" aria-label={book.title}>
				<img src={book.cover} alt={book.title} />
			</a>
		</li>
	{/each}
</ul>

<style lang="scss">
	@use '../styles/tools' as *;
	@use '../styles/variables' as *;

	@layer components {
		.grid {
			display: grid;
			padding: 0;
			column-gap: 12px;
			grid-template-columns: repeat(3, 1fr);
			list-style: none;

			@include mq($mq-tab) {
				grid-template-columns: repeat(4, 1fr);
			}

			@include mq($mq-desk) {
				grid-template-columns: repeat(5, 1fr);
			}
		}

		.grid-item {
			&:nth-child(3n + 2) {
				padding-block-start: var(--space-1);
			}

			@include mq($mq-tab) {
				&:nth-child(3n + 2) {
					padding-block-start: 0;
				}

				&:nth-child(even) {
					padding-block-start: var(--space-1);
				}
			}

			@include mq($mq-desk) {
				&:nth-child(even) {
					padding-block-start: 0;
				}

				&:nth-child(5n + 2) {
					padding-block-start: var(--space-1);
				}

				&:nth-child(5n + 4) {
					padding-block-start: var(--space-1);
				}
			}

			img {
				width: 100%;
				aspect-ratio: 54/83;
			}
		}
	}
</style>
