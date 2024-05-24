<script lang="ts">
	import { Masthead } from '~widgets/navigation/masthead';
	import { Footer } from '~widgets/navigation/footer';
	import { fade } from 'svelte/transition';
	import '../app.css';
	import '@fontsource-variable/darker-grotesque';
	import '@fontsource/eczar/400.css';
</script>

<Masthead />

<main class="px-4 md:px-10">
	<slot />
</main>

<Footer />
