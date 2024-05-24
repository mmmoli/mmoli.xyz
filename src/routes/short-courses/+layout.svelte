<script>
	import { HomeView } from '~shared/config/routes';
</script>

<div class="text-sm breadcrumbs">
	<ul>
		<li><a href={HomeView()}>Home</a></li>
		<li>Short Courses</li>
	</ul>
</div>

<slot />
