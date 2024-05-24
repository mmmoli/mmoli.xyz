import { routes } from '~shared/config/routes';

export interface NavItem {
	label: string;
	href: string;
}

export const navItems: NavItem[] = [
	{
		label: 'Home',
		href: routes.HomeView()
	},
	{
		label: 'Entrepreneurship Short Courses',
		href: routes.ShortCoursesView()
	}
];
