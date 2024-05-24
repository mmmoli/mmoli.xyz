import { HomeView } from '~shared/config/routes';

export interface NavItem {
	label: string;
	href: string;
}

export const navItems: NavItem[] = [
	{
		label: 'Home',
		href: HomeView()
	}
];
