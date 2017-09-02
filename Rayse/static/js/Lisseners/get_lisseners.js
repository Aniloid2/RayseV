
function get_the_data(userid, gender) {

	/*  This function is the first one called when the user presses the button.
	a connection to the DB is made and a call to retrive all lisseners on one specific quad is made
*/
	var userid = userid;

	var databaseURL = "https://rayse-1d175.firebaseio.com/"

	// var folder = userid.concat(databaseURL)
	var folder = databaseURL
	console.log(folder)


	console.log(userid)

	var config = {
	apiKey: "AIzaSyA1He_lYsMphHl41rpQSEUfTeYIj976Oz4",
	authDomain: "rayse-1d175.firebaseapp.com",
	databaseURL: folder,
	storageBucket: "rayse-1d175.appspot.com",
	};


	firebase.initializeApp(config);

	const dbRefObject = firebase.database().ref().child(gender).child(userid);

	const status_lissen = firebase.database().ref().child('Users').child(gender).child(userid).child('Status')

	console.log(status_lissen)

	const details = firebase.database().ref().child(gender).child(userid).child("Details")


	// Object creation

	var LinkedObj = new links(firebase, status_lissen)
	console.log('Parts of lissener object', LinkedObj.firebase_raw )


	// updates the video and audio feed (audio feed not properly integrated) given the IP address entered on the quadcopter dashboard

	return LinkedObj;
	// return firebase;

	}