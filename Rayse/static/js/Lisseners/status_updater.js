function status_updater_fun() {
		LinkObj.status_lissen.on('value', function(snapshot) {
		delete_topped_ref = LinkObj.firebase_raw.database().ref().child('Users').child(user_raw_gender).child(user_raw_id).child('Topped')

		delete_topped_ref.remove()

		
		});

}