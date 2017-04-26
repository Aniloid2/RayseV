function Online_offline_fun() {
	var user_connection_ref = LinkObj.firebase_raw.database().ref().child('Users').child(user_raw_gender).child(user_raw_id).child('Status');

	user_connection_ref.onDisconnect().set('Offline')

	user_connection_ref.set('Online')

	LinkObj.status_lissen.on('value', function(snapshot) {
		delete_topped_ref = LinkObj.firebase_raw.database().ref().child('Users').child(user_raw_gender).child(user_raw_id).child('Topped')

		delete_topped_ref.remove()

		
		});
}