function detectPositionAndUpdateUser(position , user){
		console.log('Welcome!  Fetching your information.... ');
		console.log(user);
		console.log('{{user_default.user.last_name}}')
		console.log(csrf)
		//get user ids that we want to check status



		// var user_connection_ref = firebase.database().ref('Users/'+ '{{user_default.user.facebookprofile.gender}}' +'/'+'{{user_default.user.username_id}}'+'/')
		// user_connection_ref.onDisconnect().set("I disconnected")

		for (var i = 0; i <= series_user.length-1; i++){
			if (series_user[i] == user){
				console.log('user at i', series_user[i]);
				console.log('they are equal!');
				position = 'Bye';
			}
		}

		

		if (position == 'one'){
			document.getElementById('one').innerHTML = time;
			series_user.push(user);
			// update visited under request.user.username_id
			time += 1;
		}
		if (position == 'two'){
			document.getElementById('two').innerHTML = time;
			series_user.push(user);
			time+=1;
		}
		if (position == 'three'){
			document.getElementById('three').innerHTML = time;
			series_user.push(user);
			time +=1;

		}

		// if (time == 4){
		// 	$.ajax({
		// 		type:"POST",
		// 		url:"",
		// 		csrfmiddlewaretoken: '{{ csrf_token}}', 
		// 		data:{'series_user':series_user}
		// 	});
		//console.log('length', series_user.length);
		//for (var i = series_user.length; i )
		//b = series_user[series_user.length -1];
		
		// for (var i = 0; i < series_user.length - 1 ; i++) {
		// 	console.log('hi');
		// 	if (series_user[i] == series_user[i+1])
		// 	{
		// 		console.log('YES');
		// 		time = time - 2
		// 	}

		// };
		if (time == 4){
			document.form_user_order.user_1.value = series_user[0];
			document.form_user_order.user_2.value = series_user[1];
			document.form_user_order.user_3.value = series_user[2];
			console.log(series_user)

			//post list as json and from backend update firebase

			click_order_return_payload = {
				'user_1' : series_user[0],
				'user_2' : series_user[1],
				'user_3' : series_user[2],
				'csrfmiddlewaretoken': csrf,
			}
			console.log(Auth_user_DB_ref + '/Topped/')
			ID = 'Id'+plays_count;
	    	console.log(ID)
	    	var favMovies = LinkObj.firebase_raw.database().ref().child('Users').child(user_raw_gender).child(user_raw_id).child('Topped').child(ID);
	    	favMovies.set(series_user[0]);
	    	plays_count += 1

			$.post( 
				"/get_users/", 
				click_order_return_payload, 
				function( data ) {
			  		console.log( data); // John
			});

			document.getElementById('one').innerHTML = "";
			document.getElementById('two').innerHTML = "";
			document.getElementById('three').innerHTML = "";
			time = 1;
			series_user = []
			console.log(series_user)

			get_users()


		}


		}