'use strict';

app.factory('Contact', function($firebase, FIREBASE_URL) {
	var ref = new Firebase(FIREBASE_URL);
	var contacts = $firebase(ref.child('contacts')).$asArray();

	var Contact = {
		all: contacts,
		create: function(contact) {
			return contacts.$add(contact);
		},
		get: function(contactId) {
			return $firebase(ref.child('contacts').child(contactId)).$asObject();
		},
		delete: function(contact) {
			return contacts.$remove(contact);
		}
	};

	return Contact;
});