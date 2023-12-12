import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';

export default function BasePage() {
	return (
		<main>
			<Header />
			<Outlet />
			{/* <Footer /> */}
		</main>
	);
}
