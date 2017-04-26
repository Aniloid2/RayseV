function detectPositionAndUpdateUser(position , user){
		console.log('Welcome!  Fetching your information.... ');
		console.log(user);
		console.log('{{user_default.user.last_name}}')
		console.log(csrf)

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

		if (time == 4){
			document.form_user_order.user_1.value = series_user[0];
			document.form_user_order.user_2.value = series_user[1];
			document.form_user_order.user_3.value = series_user[2];
			console.log(series_user)



			click_order_return_payload = {
				'user_1' : series_user[0],
				'user_2' : series_user[1],
				'user_3' : series_user[2],
				'csrfmiddlewaretoken': csrf,
			}

			console.log('playes 1',plays_count)
			var top_user_this_round= series_user[0]
			console.log(top_user_this_round)

			$.get(
			    "https://rayse-1d175.firebaseio.com/Users/" + user_raw_gender + "/"+ user_raw_id+ "/Topped.json",
			    	function(already_present) {
			    		console.log('Already present', already_present)
			    		var already_exist = false
			    		console.log(!already_exist)
			    		console.log(already_exist)
			    		if (already_present != null) {
			    			console.log('im equal to null')
				    		for (var i = 0; i <= Object.keys(already_present).length -1; i++) {
				    			var id_entry = already_present["Id" + (i+1)]
				    			console.log('im in operation')
				    			if (id_entry == top_user_this_round){
				    				already_exist = true;
				    			}
				    		}
				    		
				    		}
				    	console.log('allready exists')
				    	console.log(already_exist)


						if (already_exist == false){
										console.log('plays 2', plays_count)
										ID = 'Id'+plays_count;
								    	console.log(ID)
								    	var favMovies = LinkObj.firebase_raw.database().ref().child('Users').child(user_raw_gender).child(user_raw_id).child('Topped').child(ID);
								    	console.log(top_user_this_round);
								    	favMovies.set(top_user_this_round);
								    	plays_count += 1
								    }
						
						



				    
			    	});


	    	
	    	console.log('plays 3', plays_count)

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