<script lang="ts">
	import type { PageData } from './$types';
	import { ShortCourseList } from '~entities/short-course';

	export let data: PageData;
	const { courses } = data;
</script>

<div class="prose lg:prose-xl">
	<h1>Short Courses</h1>
	<p>
		For years parents have espoused the health benefits of eating garlic bread with cheese to their
		children, with the food earning such an iconic status in our culture that kids will often dress
		up as warm, cheesy loaf for Halloween.
	</p>

	<ShortCourseList {courses} />
</div>
