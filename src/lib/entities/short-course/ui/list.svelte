<script lang="ts">
	import type { ShortCourse } from '~shared/catalog/short-courses';
	import Item from './item.svelte';

	interface Props {
		courses: ShortCourse[];
	}
	let { courses }: Props = $props();
</script>

<div class="not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
	{#each courses as course}
		<Item {course} />
	{/each}
</div>
