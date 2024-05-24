<script>
	import { Masthead } from '~widgets/navigation/masthead';
	import { Footer } from '~widgets/navigation/footer';
	import '../app.css';
	import '@fontsource-variable/darker-grotesque';
	import '@fontsource/eczar/400.css'; // Specify weight
	// import '@fontsource/eczar/400-italic.css';
</script>

<Masthead />

<main class="px-10">
	<slot />
</main>

<Footer />
