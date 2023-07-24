import { ReactNode } from 'react';
import NavBar from './NavBar';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className='grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-1 text-slate-700 dark:bg-slate-900 font-poppins dark:text-neutral-200'>
			<div className='col-span-full p-2'>
				<NavBar />
			</div>
			<aside className='col-span-4 md:col-span-2 lg:col-span-3 p-4 border'>Aside Menu</aside>
			<main className='col-span-4 md:col-span-6 lg:col-span-9 auto-cols-max p-4 border'>{children}</main>
			<footer className='col-span-full p-4 h-14 border'>
				<span className='text-xl font-bold'>2023 © GAMEHUB, Behind The Games</span>
			</footer>
		</div>
	);
};

export default Layout;
