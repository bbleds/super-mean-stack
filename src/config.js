//This config file is loaded into index.js when app is loaded

//import is es6 that does essentially the same thing as common js pattern require
import angular from 'angular';
import uiRouter from 'angular-ui-router';

const app = angular.module('app', [uiRouter]);

//configure app with ui-router
app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
	//configure routes
		//if we load in erroneous route, go  back to base/catch-all route
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('todos', {
			url: '/',
			template: require('html-partials/todos.html')
		})
		.state('about',{
			url: '/about',
			template: require('html-partials/about.html')
		});

		//remove hashes from urls -> clean presentation of url
		$locationProvider.html5Mode(true);
});

//export app for import into index.js file
export default app;