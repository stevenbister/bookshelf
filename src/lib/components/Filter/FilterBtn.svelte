<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	let { children, ...rest }: HTMLButtonAttributes = $props();
</script>

<button {...rest}>
	{@render children?.()}
</button>

<style lang="scss">
	@layer components {
		button {
			width: 100%;
			padding: 0;
			border: none;
			appearance: none;
			background: none;
			cursor: pointer;
			padding-block: var(--space--2);
		}
	}
</style>
