import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';

class Header extends React.Component
{
	render () {
		return (
			React.createElement(
				'nav',
				{ className: 'navbar navbar-default' },
			  	React.createElement(
			  		'div',
			  		{ className: "container-fluid" },
				    React.createElement(
				    	'div',
			    	 	{className: "navbar-header"},
			    	 	React.createElement(
			    	 		Link,
			    	 		{to: '/', replace: true},
			    	 		React.createElement(
			    	 			'img',
			    	 			{src: Logo, className: 'img-rounded', width: '100', height: '75'},
		    	 			)
		    	 		)
				    ),
				    React.createElement(
				    	'nav',
				    	{className: "nav navbar-nav"},
				    	React.createElement(
				    		'li',
				    		{},
				    		React.createElement(
				    			Link,
				    			{to:'/', replace: true},
				    			'Home'
			    			)
		    			),
		    			React.createElement(
				    		'li',
				    		{},
				    		React.createElement(
				    			Link,
				    			{to:'/about-us', replace: true},
				    			'About Us'
			    			)
		    			),
		    			React.createElement(
				    		'li',
				    		{},
				    		React.createElement(
				    			Link,
				    			{to:'/contact-us', replace: true},
				    			'Contact Us'
			    			)
		    			)
			      	)
			    )
			)
		);
	}
}

export default Header;