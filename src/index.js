import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	React.createElement(
		Router,
		null,
		<App />
	),
	document.getElementById('app')
);
