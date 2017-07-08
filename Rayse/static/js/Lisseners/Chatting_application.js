function chatting_application_fun() {

	Added_topped = LinkObj.firebase_raw.database().ref().child('Users').child(user_raw_gender).child(user_raw_id).child('Topped')
	// global variable

	// start function 
	Added_topped.on('value', function(snapshot) {
			console.log('The value')

			Topped_dic = snapshot.val()
			console.log(Topped_dic)
		if (Topped_dic != null){
			len = Object.keys(Topped_dic).length;
			console.log(len)
		
			last_added_id = Topped_dic["Id"+len]
			console.log(last_added_id)


			Topped_status_ref = LinkObj.firebase_raw.database().ref().child('Users').child(anty_gender).child(last_added_id).child('Status')

			Topped_status_ref.on("value", function(snapshot) {
					Online_or_Offline = snapshot.val()
					console.log(Online_or_Offline);
					if (Online_or_Offline == "Offline") {
						console.log('noting')

					}
					else {
						Topped_ref = LinkObj.firebase_raw.database().ref().child('Users').child(anty_gender).child(last_added_id).child('Topped')

						Topped_ref.once("value", function(snapshot) {
							var all_other_user_topped = snapshot.val()
							// iterate throu existing ones
						if (all_other_user_topped != null) {
							for (var i = Object.keys(all_other_user_topped).length - 1; i >= 0; i--) {
								var in_their_topped_list = all_other_user_topped["id"+(i+1)]
								if (in_their_topped_list == user_raw_id) {
									console.log('We have a match!! my id is in his topped list')
									// where magic happens
								}
								else {
									console.log('My id is not in other users topped list stright after i have topped him')
								}

							};




						}
						else{
							console.log('its empty at the other users topped list (it means he just logged in and didnt topped anyone)')
						}
							
							console.log('all other topped values', all_other_user_topped)
							Topped_ref.on("value", function(snapshot) {
								console.log('we have checked throu the just topped user topped list')
								
								var all_other_user_topped = snapshot.val()
								//so make a on and check for last time added
								if (all_other_user_topped != null){
								var len = Object.keys(all_other_user_topped).length;
								console.log(len)
							
								var my_id_should_pop_out = all_other_user_topped["Id"+len]
								console.log('we just got the latest added id')
								console.log(my_id_should_pop_out)
								console.log(user_raw_id)
								if (my_id_should_pop_out == user_raw_id) {
									console.log('the other user just liked us, the latest added id picked a match')
									// delete all topped users, create chat id, open pop up 
									var their = parseInt(last_added_id);
									var mine = parseInt(user_raw_id);
									console.log(their)
									console.log(mine)
									if (their > mine) {
										var restring_their = their.toString()
										var restring_mine =mine.toString()

								
										console.log('let him have the lead')
										var chat_id = restring_their.concat(restring_mine)

									}
									else if (their < mine) {
										console.log('i have the lead')
										restring_their = their.toString()
										var restring_mine =mine.toString()
											
										var chat_id = restring_mine.concat(restring_their)

									}
									else {
										console.log('logged in with the same account with two windows ban him')
										var chat_id = 1
										// easter egg?
									}

									// we have a chat id.
									chat_id = chat_id
									console.log(chat_id)

									// create a new chat, list them under chats.
									Chat_ref = LinkObj.firebase_raw.database().ref().child('Chats').child(chat_id)
									var matched_date = new Date();
									var matched_time = matched_date.getTime()
									Chat_ref.set({
										'Time_stamp': matched_time,
										'Id1': restring_mine,
										'Id2':restring_their,
										'Messages':{
											'Message_header': 'Youve matched',
											'1':{
												'Id':restring_mine,
												'Message':'Hi lol no',
												'Time_stamp':12,
											},
											'2':{
												'Id':restring_their,
												'Message':'ahahah no',
												'Time_stamp':54,
											},
											
										},
										'Latest_Message': {
												'Id':restring_mine,
												'Message':'Hi lol no',
												'Time_stamp':1,
												},

										// send data back to django in form of a form, and return a new webpage, with chat. 
										// once lissener on message, and a on on latest message.




									})// get other user so we have name, age (location) to display

									// once reff would pull down all messages, and match time stamp

									// on would lissen for new messages to append

									$.get(
									    "https://rayse-1d175.firebaseio.com/Users/" + anty_gender + "/"+ restring_their + "/Details.json",
									    	function(their_full_user_details) {
									    		their_full_user_details = their_full_user_details
									    		$.get(
												    "https://rayse-1d175.firebaseio.com/Users/" + user_raw_gender + "/"+ user_raw_id + "/Details.json",
												    function (my_full_user_details) {
												    	my_full_user_details = my_full_user_details


														Chat_ref.once("value", function(snapshot) {
															chat_enviroment = snapshot.val()
															console.log(chat_enviroment)
															console.log(chat_id)
															modal.style.display = "block";


															// get button, get textarea, set on click function. get value of text area, post to chat. 

															// the bellow can all be a function

															var send_button = document.getElementById('send_message')

															send_button.onclick = function() {
																var message_to_send = document.getElementById('mex').value
																console.log(message_to_send);
																var Latest_message_ref = LinkObj.firebase_raw.database().ref().child('Chats').child(chat_id).child('Latest_Message')
																var message_data = new Date();

																var message_time = message_data.getTime()


																  var hours = message_data.getHours();
																  var minutes = message_data.getMinutes();
																  var ampm = hours >= 12 ? 'pm' : 'am';
																  hours = hours % 12;
																  hours = hours ? hours : 12; // the hour '0' should be '12'
																  minutes = minutes < 10 ? '0'+minutes : minutes;
																  var strTime = hours + ':' + minutes + ' ' + ampm;

																  strTime = strTime.toString()

																Latest_message_ref.set({
																	'Id_of_sender': user_raw_id,
																	'Message':message_to_send,
																	'Time_stamp':strTime,
																})

																// we would also need to set on total message list.

															}








															// get elements by id substitute with got users object details

															document.getElementById('modal-name').innerHTML = their_full_user_details.Name
															document.getElementById('modal-age').innerHTML = their_full_user_details.Age
															var level_too_long =  their_full_user_details.Level.toString()
															console.log(level_too_long)
															document.getElementById('modal-level').innerHTML = level_too_long.substr(0,4);

															console.log(chat_enviroment.Messages)

															// for loop the size of object, get the message { id, mess, time stamp} check if id == mine or their, get time and format it.

														




															console.log(their_full_user_details)
															console.log(my_full_user_details)





															// i know mine, i know theirs my job here is to lissen when a change is made on latest message

															// here we append all text to html, we also get the two users, first get me, second get theirs, we have raw id check if is
															Latest_message_ref = LinkObj.firebase_raw.database().ref().child('Chats').child(chat_id).child('Latest_Message')



															Latest_message_ref.on("value" , function(snapshot) {
																console.log('Lissening for latest message')
																latest_message = snapshot.val();
																console.log(latest_message);
																console.log('All needed times')
																console.log(chat_enviroment.Time_stamp)
																console.log(latest_message.Time_stamp)
															


																//
																console.log(latest_message.Id_of_sender);
																if (latest_message.Id_of_sender == user_raw_id) {
																	console.log('Ive sent the message')
																	// generate and append code on my part
																	$( ".modal-body" ).append("<div class='entire_message_body'><div class='row'><div class='col-md-6'></div><div class='col-md-5'><div class='My_message'><p>" + latest_message.Message + "</p><p>"+latest_message.Time_stamp+"</p></div></div><div class='col-md-1'><img class='message_image' src="+ my_full_user_details.Webpull +"></div></div></div>")
																	    document.getElementById('mex').value = '';
																}
																else if (latest_message.Id_of_sender == restring_their) {
																	console.log('They have sent an id to me')
																	$( ".modal-body" ).append("<div class='entire_message_body'><div class='row'><div class='col-md-1'><img class='message_image' src="+ their_full_user_details.Webpull + "></div><div class='col-md-5'><div class='Their_message'><p>"+latest_message.Message+"</p><p>" +latest_message.Time_stamp+"</p></div></div><div class='col-md-6'></div></div></div>")
																		document.getElementById('mex').value = '';



																	// generate and append code on their part
																}

																else {
																	console.log('Message faild dramaticaly')
																	// could initialy load a image or a message like pickup line!
																}


																// we have latest message

												// build html.. 
											})


											})


										})
									})




									// chats // chat id// two ids of users, timestamp when match happened
														// 1(message number) (id of mesasge user, message, time stamp )
														//2(message)        (id of message user,message, time stamp)

									// on html pop up we have a script. this script calls all messages under the chat id which is global varable. gets the two ids and saves them in vatiables, check which id is auth users id.
									// call both ids from database for their variables such as names. then cascade all messages in popup, my id left, their id right. 
								}
								else {
									console.log('the one we just linked dont link us :(')
								}
							}
							else {
								console.log('second checking iteraction which should initialy be ignored as its null')
							}


								// just take last item






							});


						});




					}

				});




			// $.get(
			// 	    "https://rayse-1d175.firebaseio.com/Users/" + anty_gender + "/"+ last_added_id+ "/Status.json",
			// 	    	function(is_online) {
			// 	    		console.log(is_online)
			// 	    		if (is_online == "Offline") {
			// 	    			Topped_status_ref = LinkObj.firebase_raw.database().ref().child('Users').child(anty_gender).child(last_added_id).child('Status')
			// 	    			Topped_status_ref.on("value", function(snapshot) {
			// 	    				console.log(snapshot.val())
			// 	    				if (snapshot.val() == "Online") {
			// 	    				Topped_status_ref_Other_topped = LinkObj.firebase_raw.database().ref().child('Users').child(anty_gender).child(last_added_id).child('Topped')
			// 	    			};

			// 	    			})
			// 	    		}
			//     	});
		}
		else{
			console.log('First time')
		}
	});

}