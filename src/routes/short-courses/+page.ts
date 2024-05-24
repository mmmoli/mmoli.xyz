import { shortCourses } from '~shared/catalog/short-courses';
import type { PageLoad } from './$types';
export const prerender = true;

export const load: PageLoad = async () => {
	return {
		courses: shortCourses
	};
};
