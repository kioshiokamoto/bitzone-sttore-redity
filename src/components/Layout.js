import React from 'react';
import Nav from './Nav';

const Layout = ({ children }) => {
	return (
		<div className="container">
			<Nav />
			<div className="content">{children}</div>
		</div>
	);
};

export default Layout;
