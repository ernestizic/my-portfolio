import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import ProgressBar from 'react-scroll-progress-bar';

const AppLayout = () => {
	return (
		<div className='App'>
			<Header />
			<div className='content-wrap'>
				<ProgressBar bgcolor='#fcd201' duration='1' />
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default AppLayout;
