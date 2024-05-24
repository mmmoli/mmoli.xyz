<script lang="ts">
	import type { ShortCourse } from '~shared/catalog/short-courses';

	interface Props {
		course: ShortCourse;
	}

	let { course }: Props = $props();
</script>

<article class="card shadow-lg">
	<div class="card-body">
		<h2 class="card-title leading-tight text-lg">{course.name}</h2>
		<p>{course.lead}</p>
	</div>
</article>
