
/**
 * Declare module 'shreejiApp'
 * @type Angular module
 */
var app1 = angular.module('shreejiApp', []);

/**
 * Factory 'myFactory' of shreejiApp
 * 
 * Factory is collection of data.
 * 
 * @return {object}
 */
app1.factory('myFactory', function() {
	return {name:"minita"};
});



/**
 * Declare another module 'myApp'
 * @type Angular module
 */
var app2 = angular.module('myApp', ['shreejiApp']); // Inject shreejiApp - so features of shreejiApp are accessible into myApp

/**
 * Declare Controller
 * @param  {object} $scope     Scope of defined controller
 */
app2.controller('myCtrl', function($scope, myFactory) { // Injectables goes into arguments. Here we are using `myFactory` from `shreejiApp`
	
	console.log(myFactory.name); // Get name from `myFactory`

	$scope.firstName = "John";
	$scope.lastName = "Doe";

	$scope.fruits = ['Banana', 'Mango', 'Apple'];

	// Reply function from html goes here
	$scope.reply = function () {
		alert("hello!");
	};

	console.log($scope);

});