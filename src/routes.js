import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactPage from './components/ContactPage/ContactPage';

class Routes extends React.Component{
	render () {
		return (
			React.createElement(
				Switch,
				{},
				React.createElement(
					Route,
					{exact: true, path: '/', component: HomePage}
				),
				React.createElement(
					Route,
					{path: '/about-us', component: AboutPage}
				),
				React.createElement(
					Route,
					{path: '/contact-us', component: ContactPage}
				)
			)
		);
	}
}

export default Routes;