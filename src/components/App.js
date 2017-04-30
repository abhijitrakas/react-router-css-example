import React from 'react';
import Routes from '../routes';
import Header from './common/Header';

class App extends React.Component
{
	render () {
		return (
			React.createElement(
				'div',
				{ className: "container-fluid" },
				<Header />,
				<Routes />
			)
		)
	}
}

export default App;