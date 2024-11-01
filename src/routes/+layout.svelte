<script lang="ts">
	import { page } from '$app/stores';
	import Header from '$lib/components/Header.svelte';
	import './style.scss';
</script>

<Header pathname={$page.url.pathname} />

<main class="container pb-2">
	<slot />
</main>
