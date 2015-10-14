'use strict';

app.controller('ContactsCtrl', function($scope, Contact) {
	$scope.contacts = Contact.all;

	$scope.contact = {firstName: '', lastName: '',
					 	JobTitle: '', phone: '', 
					 	email: ''};
	$scope.sortName     = 'firstName'; // set the default sort type
	$scope.sortJob     = 'JobTitle';
  	$scope.sortReverse  = false;  // set the default sort order
 	$scope.searchName   = '';     // set the default search/filter term

	$scope.submitContact = function() {
		Contact.create($scope.contact).then(function(ref) {
			$scope.contact = {firstName: '', lastName: '',
					 	JobTitle: '', phone: '', 
					 	email: ''};
		});
		
	};



	$scope.deleteContact = function(contact) {
		Contact.delete(contact);
		};

});