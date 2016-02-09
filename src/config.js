//import is es6 that does essentially the same thing as common js pattern require
import angular from 'angular';
import uiRouter from 'angular-ui-router';

const app = angular.module('app', [uiRouter]);

//configure app with ui-router
app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
	//configure routes
		//if we load in erroneous route, go  back to base/catch-all route
	// $urlRouterProvider.other('/');
	// $stateProvider
	// 	.state('todos', {
	// 		url: '/',
	// 		template: require('todos/todos.html')
	// 	})
	// 	.state('about',{
	// 		url: '/about',
	// 		template: require('about/about.html')
	// 	})

	// 	//remove hashes from urls -> clean presentation of url
	// 	$locationProvider.html5mode(true);
});

//export app for import into index.js file
export default app;