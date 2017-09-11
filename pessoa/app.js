var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:'templates/list.html',
			controller:'pessoaController'
		})
		.when('/pessoas', {
			templateUrl:'templates/list.html',
			controller:'pessoaController'
		})
		.when('/pessoas/create', {
			templateUrl:'templates/add.html',
			controller:'pessoaController'
		})
		.when('/pessoas/:id/edit', {
			templateUrl:'templates/edit.html',
			controller:'pessoaController'
		})
		.when('/pessoas/:id/show', {
			templateUrl:'templates/show.html',
			controller:'pessoaController'
		});
});
