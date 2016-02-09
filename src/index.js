//loads angular module
import angular from 'angular';

//loades config.js file
import appModule from 'config';

//attach angular module to document in html
angular.bootstrap(document, [appModule.name]);



