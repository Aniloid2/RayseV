function get_users() {


    $.get(
    "/get_users",
    function(data) {
    	console.log(data);

    	$.get(
		    "https://rayse-1d175.firebaseio.com/Users/" + anty_gender + "/"+data.user_1 + ".json",
		    function(data_return_1) {
		    	console.log(data_return_1)
		    	document.getElementById('name_user_1').innerHTML = 'Name: ' + data_return_1.Details.Name + ' ' + data_return_1.Details.Surname
		    	document.getElementById('age_user_1').innerHTML ='Age: ' + data_return_1.Details.Age
		    	document.getElementById('level_user_1').innerHTML ='Level: '+ data_return_1.Details.Level
		    	document.getElementById('webpull_user_1').src = data_return_1.Details.Webpull
		    	document.getElementById('button_user_1').setAttribute( "onClick", "detectPositionAndUpdateUser('one', "+data.user_1+");" )

		});

    	$.get(
    		"https://rayse-1d175.firebaseio.com/Users/" + anty_gender + "/"+data.user_2 + ".json",
	    function(data_return_2) {
	    	console.log(data_return_2)
	    	document.getElementById('name_user_2').innerHTML = 'Name: ' + data_return_2.Details.Name + ' ' + data_return_2.Details.Surname
	    	document.getElementById('age_user_2').innerHTML ='Age: ' + data_return_2.Details.Age
	    	document.getElementById('level_user_2').innerHTML ='Level: '+ data_return_2.Details.Level
	    	document.getElementById('webpull_user_2').src = data_return_2.Details.Webpull
	    	document.getElementById('button_user_2').setAttribute( "onClick", "detectPositionAndUpdateUser('two', "+data.user_2+");" )

	    });

	    	$.get(
	    "https://rayse-1d175.firebaseio.com/Users/" + anty_gender + "/"+data.user_3 + ".json",
	    function(data_return_3) {
	    	console.log(data_return_3)
	    	document.getElementById('name_user_3').innerHTML = 'Name: ' + data_return_3.Details.Name + ' ' + data_return_3.Details.Surname
	    	document.getElementById('age_user_3').innerHTML ='Age: ' + data_return_3.Details.Age
	    	document.getElementById('level_user_3').innerHTML ='Level: '+ data_return_3.Details.Level
	    	document.getElementById('webpull_user_3').src = data_return_3.Details.Webpull
	    	document.getElementById('button_user_3').setAttribute( "onClick", "detectPositionAndUpdateUser('three', "+data.user_3+");" )

	    });



    });

}