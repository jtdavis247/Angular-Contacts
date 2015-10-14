'use strict';

app.controller('ContactViewCtrl', function($scope, $routeParams, Contact) {
	$scope.contact = Contact.get($routeParams.contactId);
	$scope.contacts = Contact.all;

	$scope.saveContact = function() {
		// not sure what goes here
		Contact.get($scope.contact).then(function(ref) {

		});
		
	};
});