import React, { Component } from 'react';
var ReactDOM = require('react-dom')
import {Button, DropdownButton,Pager, Container, Row, Col, Grid, Jumbotron } from 'react-bootstrap';




// all material ui
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';


import * as firebase from 'firebase'
import background from '../css/homepage/background.css';
import detect_order from '../js/helper_functions/detect_order.js';
import DjangoCSRFToken from 'django-react-csrftoken';



// $.get(
// 		    "https://rayse-1d175.firebaseio.com/Users/" + 'M'+ "/"+ '10211332172367154' + ".json",
// 		    function(data_return_1) {
// 		    	console.log('data has returned', data_return_1)
// 		    });

// console.log(dat)

// <div class="col-md-4">
// 			<h2 id='name_user_1' ></h2>
// 			<h2 id='age_user_1'></h2>
// 			<p id='level_user_1'></p>

// 			<p id="one"></p>
// 			<button id='button_user_1' onclick="detectPositionAndUpdateUser('one', )"><img id="webpull_user_1" src=""></button>
// 		</div>




export class Three_users extends React.Component {

	constructor() {
		super();
		this.state = {
			ar:[],
			shadow:1,
			opac:0,
			color:'red',
		}
	}


	// here we have detect selected user function

	// var rootRef = firebase.database().ref().child('Users').child('M').child('10211332172367154').child('Details');
   
 //   var NameRef = rootRef.child('Name');
 //    NameRef.on('value', snap => {
 //      this.setState({
 //      user1:snap.val()
 //  	  });
 //    });
		onMouseOver() {  this.setState({ shadow: 4 })
			}
		onMouseOut() {this.setState({ shadow: 1 })
			}

		overlay_placement() {

				this.setState({
					opac:0.4,
				})
			}

		// randomColor() {
		// 	return 'red'
		// }


		overlay_style() {
			   return {
			     opacity:this.props.Opac ,
			     position: "absolute", 
			     top:"50%", left:"50%", 
			     transform: "translate(-50%, -50%)", 
			     backgroundColor: this.props.Col,
			     width:"100%", 
			     height:"100%",
			     transition:".4s ease",
			   }
			 }

		overlay_text_style() {
			   return {
			     opacity:1 ,
			     position: "absolute", 
			     top:"50%", left:"50%", 
			     transform: "translate(-50%, -50%)", 
			     
			     width:"100%", 
			     height:"100%",
			     transition:".4s ease",
			     color:"white",
			     font:"menu",
			     fontSize:"xx-large",
			   }
			 }




	
	// flamingo(position, username_id) {
	// 	console.log('ive been clicked', position, this.state.ar)

	// 	var a = detect_order(position, username_id, this.state.ar);

	// 	console.log('returned array', a)


		// this.setState(
		// 	{ ar: this.state.ar.concat([username_id ])},
		// 	// function() {
		// 	// 	console.log(this.state.ar);
		// 	// }
		// 	);


	// }

// border and onclick on first div, 
// <Button  onClick={() => {this.props.Flamingo(this.props.Position , this.props.UsernameID, this.props.AR)}} >
					

// 				<img src={this.props.Webpull}></img>
// 				</Button>
	render() {
		return (


			<Col xs={12} sm={12} md={4} lg={4}>
		
			<div  onClick={() => {this.props.Flamingo(this.props.Position , this.props.UsernameID, this.props.AR)}} >

				<div style={{textAlign: 'left'}}>
					
					<Card onMouseOver={this.onMouseOver.bind(this)}
						   onMouseOut={this.onMouseOut.bind(this)}
						   zDepth={this.state.shadow}
						   onClick={this.overlay_placement.bind(this)} >

					
				

		        <CardMedia 
		         
		      overlay={<CardTitle title={this.props.Name} subtitle={'Age:' + ' ' +this.props.Age} />}>


		      <div id="wrapper"  style={{ position: 'relative'}}>
		      <img alt="" src={this.props.Webpull} style={{ display: 'block',  width: '100%', height: 'auto'}}  />
		      
		      <div  id="over" style={this.overlay_style()}>
		      
		      </div>
			  <h1 style={this.overlay_text_style()} >{this.props.Time_called}</h1>

		      </div>
		    </CardMedia>
		    
        </Card>

				</div>
			
				</div>
				
			</Col>




				)
	}
};




export class Card_Holder extends React.Component {

	// create a function to popolate, pass the popolation parameters as props, have the detect order function outside too that edits a array outside the three 
	// users, pass the detect order function as props

	constructor(props){

		super(props);

		this.state = {
			my_user_gender:'',
			my_user_id: '',
			user1: {
				username_id:'Non',
				 Age:'Non',			    			 
				name:'Non',
				surname:'Non',
				webpull: 'Loading...',
			},
			user2: {
				username_id:'Non',
				Age:'Non',			    			 
				name:'Non',
				surname:'Non',
				webpull: 'Loading...',
			},
			user3: {
				username_id:'Non',
				Age:'Non',			    			 
				name:'Non',
				surname:'Non',
				webpull: 'Loading...', // add a call to a loading picture
			},
			ar: [],
			time:1,
			user_1_id: 0,
			Col1: '',
			opac1:0,
			time_called1:'',
			user_2_id: 0,
			Col2: '',
			opac2:0,
			time_called2:'',
			user_3_id: 0,
			Col3: '',
			opac3:0,
			time_called3:'',
			plays_count:1,
					};
		//this.flamingo = this.flamingo.bind(this);
	}


	componentDidMount() {
		 $.get(
		    "/get_users",
		    function(data) {
		    	console.log(data);
		    	// this.setState({
		    	// 	my_user_gender:data.show_gender,
		    	// 	my_user_id:data.user_1
		    	// })

		    	$.get(
				    "https://rayse-1d175.firebaseio.com/Users/" + data.show_gender + "/"+data.user_1 + ".json",
				    function(data_return_1) {
				    	console.log('returned data',data_return_1)
				    	this.setState({
				    		user1: {
				    			 username_id:data.user_1,	
				    			 Age:data_return_1.Details.Age,			    			 
				    			 name: data_return_1.Details.Name,
				    			 surname: data_return_1.Details.Surname,
				    			 webpull: data_return_1.Details.Webpull
				    			}
				    	})
				    	console.log('im the state',this.state)
				    
				}.bind(this));


				$.get(
				    "https://rayse-1d175.firebaseio.com/Users/" + data.show_gender + "/"+data.user_2 + ".json",
				    function(data_return_2) {
				    	console.log('returned data',data_return_2)
				    	this.setState({
				    		user2: {
				    			 username_id:data.user_2,
				    			 Age:data_return_2.Details.Age,			    			 
				    			 name: data_return_2.Details.Name,
				    			 surname: data_return_2.Details.Surname,
				    			 webpull: data_return_2.Details.Webpull
				    			}
				    	})
				    	console.log('im the state',this.state)
				    
				}.bind(this));

				$.get(
				    "https://rayse-1d175.firebaseio.com/Users/" + data.show_gender + "/"+data.user_3 + ".json",
				    function(data_return_3) {
				    	console.log('returned data',data_return_3)
				    	this.setState({
				    		user3: {
				    			 username_id:data.user_3,
 				    			 Age:data_return_3.Details.Age,			    			 
				    			 name: data_return_3.Details.Name,
				    			 surname: data_return_3.Details.Surname,
				    			 webpull: data_return_3.Details.Webpull
				    			}
				    	})
				    	console.log('im the state',this.state)
				    
				}.bind(this));





		    }.bind(this));
		}


		flamingo(position, username_id, rr) {
		console.log('ive been clickeddd', position, username_id, rr)

		// var a = detect_order(position, username_id, rr);

		// this.state.ar.concat([username_id ])

		// console.log('returned array', a)

		for (var i = 0; i <= this.state.ar.length-1; i++){
					if (this.state.ar[i] == username_id){
						console.log('user at i', this.state.ar[i]);
						console.log('they are equal!');
						position = 'Bye';
					}
			}

		if (this.state.time ==1){
			var Color_position = 'yellow';
			var Opac = 0.4;
		}
		else if (this.state.time == 2){
			var Color_position = 'silver';
			var Opac = 0.4;
		}
		else if (this.state.time == 3){
			var Color_position = 'orange';
			var Opac = 0.4;
		}
		else {
			var Color_position = '';
			var Opac = 0;
		}



		if (position == 'one'){
			//document.getElementById('one').innerHTML = time;


			this.setState({
				Col1:Color_position,
				opac1:Opac,
				time_called1:this.state.time.toString(),
			})
			series_user.push(username_id);
			this.setState(
			{ ar: this.state.ar.concat([username_id ]),
			  time: this.state.time += 1
			},
				function(data){
				console.log('the state and the time',this.state.ar, this.state.time)
				}
			)
			// time += 1;
		}

		if (position == 'two'){
			// document.getElementById('two').innerHTML = time;
			this.setState({
				Col2:Color_position,
				opac2:Opac,
				time_called2:this.state.time.toString(),
			})
			this.setState(
			{ ar: this.state.ar.concat([username_id ]),
			  time: this.state.time += 1
			},
				function(data){
				console.log('the state and the time', this.state.ar, this.state.time)
				}
			)
			// time+=1;
		}
		if (position == 'three'){
			// document.getElementById('three').innerHTML = time;
			this.setState({
				Col3:Color_position,
				opac3:Opac,
				time_called3:this.state.time.toString(),
			})
			this.setState(
			{ ar: this.state.ar.concat([username_id ]),
			  time: this.state.time += 1
			},
				function(data){
				console.log('the state and the time',this.state.ar, this.state.time)
				}
			)
			// time +=1;

		}

		// we have position and time, depending on time e.g time == 1 yellow, time == 2 silver, time == 3 orange, put color on given postiotion.


		// if (this.state.time == 1) {
		// 	console.log('time is 1 with position:', postiotion);
		// 	// set position to gold
		// 	this.setState({

		// 	})
		// }




		if (this.state.time == 4){
			console.log('time', this.state.time)
			// this.state.time = 1;
			console.log('time after set',  this.state.time)
			this.setState( {

			'time':this.state.time += 1,
			'user_1_id': this.state.ar[0], // parse in form as state
			'user_2_id': this.state.ar[1],  // make sure that the order is correct
			'user_3_id': this.state.ar[2],
		},function (returned){
			console.log(this.state.user_1_id)
		})


			$.get(
			'/get_my_user',
			function(User_details){
				console.log(User_details.MyUser.username_id, User_details.MyUser.gender);


				$.get(
			    "https://rayse-1d175.firebaseio.com/Users/" + User_details.MyUser.gender  + "/"+ User_details.MyUser.username_id + "/Topped.json",
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
				    			if (id_entry == this.state.user_1_id){
				    				already_exist = true;
				    			}
				    		}
				    		
				    		}
				    	console.log('allready exists')
				    	console.log(already_exist)


						if (already_exist == false){
										console.log('plays 2', this.state.plays_count)
										var ID = 'Id'+ this.state.plays_count;
								    	console.log(ID)
								    	var favMovies = firebase.database().ref().child('Users').child(User_details.MyUser.gender ).child( User_details.MyUser.username_id ).child('Topped').child(ID);
								    	console.log(this.state.user_1_id);
								    	favMovies.set(this.state.user_1_id);

								    	this.setState({
								    		plays_count:this.state.plays_count += 1
								    	})
								    	
								    }
						
						



				    
			    	}.bind(this));





			}.bind(this));

			// console.log('plays 3', plays_count

			var click_order_return_payload = {
				'user_1' : this.state.user_1_id,
				'user_2' : this.state.user_2_id,
				'user_3' : this.state.user_3_id,
				'csrfmiddlewaretoken': csrf,
			}

			$.post( 
				"/get_users/", 
				click_order_return_payload, 
				function( data ) {
			  		console.log('after get users we get', data); // John

					this.setState( {
								time:1,
								ar:[],
								Col1: '',
								opac1:0,
								time_called1:'',
								Col2: '',
								opac2:0,
								time_called2:'',
								Col3: '',
								opac3:0,
								time_called3:'',

							})

							
							// document.user_choice_form.submit()
							console.log('this csrf tokkeen',csrf)



							this.componentDidMount()


			}.bind(this));

			// document.getElementById('one').innerHTML = "";
			// document.getElementById('two').innerHTML = "";
			// document.getElementById('three').innerHTML = "";
			// this.state.time = 1;
			// this.state.ar = [];
			// console.log(series_user)
		
		





		}





		// click_order_return_payload = {
		// 	'user_1_id' : this.state.ar[0],
		// 	'user_2_id' : this.state.ar[1],
		// 	'user_3_id' : this.state.ar[2],
		// 	// 'csrfmiddlewaretoken': csrf, // find out how to send a csrf token with jeson data 
		// }

		
		// 	    "https://rayse-1d175.firebaseio.com/Users/" + user_raw_gender + "/"+ user_raw_id+ "/Topped.json",
		// 	    	function(already_present) {


		// $.get(
		// 	    "https://rayse-1d175.firebaseio.com/Users/" + user_raw_gender + "/"+ user_raw_id+ "/Topped.json",
		// 	    	function(already_present) {
		// 	    		console.log('Already present', already_present)
		// 	    		var already_exist = false
		// 	    		console.log(!already_exist)
		// 	    		console.log(already_exist)
		// 	    		if (already_present != null) {
		// 	    			console.log('im equal to null')
		// 		    		for (var i = 0; i <= Object.keys(already_present).length -1; i++) {
		// 		    			var id_entry = already_present["Id" + (i+1)]
		// 		    			console.log('im in operation')
		// 		    			if (id_entry == top_user_this_round){
		// 		    				already_exist = true;
		// 		    			}
		// 		    		}
				    		
		// 		    		}
		// 		    	console.log('allready exists')
		// 		    	console.log(already_exist)


		// 				if (already_exist == false){
		// 								console.log('plays 2', this.state.plays_count)
		// 								ID = 'Id'+this.state.plays_count;
		// 						    	console.log(ID)
		// 						    	var favMovies = LinkObj.firebase_raw.database().ref().child('Users').child(user_raw_gender).child(user_raw_id).child('Topped').child(ID);
		// 						    	console.log(top_user_this_round);
		// 						    	favMovies.set(top_user_this_round);
		// 						    	this.state.plays_count += 1
		// 						    }
						
						



				    
		// 	    	});















		


		}








// need to pass in time too, initialy the time will be empty, but then we can pass values.
// add a form at the end and pass in state parameters from detect order function 



	render() {
		return(
			<div>

			<Three_users Time_called={this.state.time_called1} Col={this.state.Col1} Opac={this.state.opac1} AR={this.state.ar} Flamingo={this.flamingo.bind(this)} Position='one' UsernameID={this.state.user1.username_id} Name={this.state.user1.name} Age={this.state.user1.Age}  Webpull={this.state.user1.webpull}/>
            <Three_users Time_called={this.state.time_called2} Col={this.state.Col2} Opac={this.state.opac2} AR={this.state.ar}  Flamingo={this.flamingo.bind(this)} Position='two' UsernameID={this.state.user2.username_id} Name={this.state.user2.name} Age={this.state.user2.Age} Webpull={this.state.user2.webpull}/>
            <Three_users Time_called={this.state.time_called3} Col={this.state.Col3} Opac={this.state.opac3} AR={this.state.ar} Flamingo={this.flamingo.bind(this)} Position='three' UsernameID={this.state.user3.username_id} Name={this.state.user3.name} Age={this.state.user3.Age} Webpull={this.state.user3.webpull}/>
            
			</div>


			)
	}
};





export default class home_page_structure extends React.Component {


	// get ids
	// constructor(props){

	// 	super(props);

	// 	this.state = {
	// 		user1: {
	// 			username_id:'Non',
	// 			name:'Non',
	// 			surname:'Non',
	// 			webpull: 'Loading...',
	// 		},
	// 		user2: {
	// 			username_id:'Non',
	// 			name:'Non',
	// 			surname:'Non',
	// 			webpull: 'Loading...',
	// 		},
	// 		user3: {
	// 			username_id:'Non',
	// 			name:'Non',
	// 			surname:'Non',
	// 			webpull: 'Loading...', // add a call to a loading picture
	// 		}

	// 	};
	// }



	// componet mout inside call global function to change state 

	/* compnentDidMount() {
	
		fill_three()
	}


	*/
	// componentDidMount() {
	// 	 $.get(
	// 	    "/get_users",
	// 	    function(data) {
	// 	    	console.log(data);

	// 	    	$.get(
	// 			    "https://rayse-1d175.firebaseio.com/Users/" + data.show_gender + "/"+data.user_1_id + ".json",
	// 			    function(data_return_1) {
	// 			    	console.log('returned data',data_return_1)
	// 			    	this.setState({
	// 			    		user1: {
	// 			    			 username_id:data.user_1_id,
	// 			    			 name: data_return_1.Details.Name,
	// 			    			 surname: data_return_1.Details.Surname,
	// 			    			 webpull: data_return_1.Details.Webpull
	// 			    			}
	// 			    	})
	// 			    	console.log('im the state',this.state)
				    
	// 			}.bind(this));


	// 			$.get(
	// 			    "https://rayse-1d175.firebaseio.com/Users/" + data.show_gender + "/"+data.user_2_id + ".json",
	// 			    function(data_return_2) {
	// 			    	console.log('returned data',data_return_2)
	// 			    	this.setState({
	// 			    		user2: {
	// 			    			 username_id:data.user_2_id,
	// 			    			 name: data_return_2.Details.Name,
	// 			    			 surname: data_return_2.Details.Surname,
	// 			    			 webpull: data_return_2.Details.Webpull
	// 			    			}
	// 			    	})
	// 			    	console.log('im the state',this.state)
				    
	// 			}.bind(this));

	// 			$.get(
	// 			    "https://rayse-1d175.firebaseio.com/Users/" + data.show_gender + "/"+data.user_3_id + ".json",
	// 			    function(data_return_3) {
	// 			    	console.log('returned data',data_return_3)
	// 			    	this.setState({
	// 			    		user3: {
	// 			    			 username_id:data.user_3_id,
	// 			    			 name: data_return_3.Details.Name,
	// 			    			 surname: data_return_3.Details.Surname,
	// 			    			 webpull: data_return_3.Details.Webpull
	// 			    			}
	// 			    	})
	// 			    	console.log('im the state',this.state)
				    
	// 			}.bind(this));





	// 	    }.bind(this));

	// 	}


	// pass ids, get name etc.. as props

	// have row here and turn three users into individulal colum,
	//passing props which are the position name etc gathered from 
	//requenst

	// request gets value and sets state, state into three users as prop
	// three users is single user 
	// returns single colum with on click do detectorder (will we recive user)
	// can we save state.









//<Header_material />

    render(){

        return (
        	<div>

            <AppBarExampleComposition/>
            
            <Card_Holder/>

            

            
          
            </div>
        );
    }
};













class Login extends React.Component {
  // static muiName = 'FlatButton';

  send_to_login_page() {
  	console.log('send to login page')
  	document.location.href = '/login' // send to login screen 
  }



  render() {
    return (
      <FlatButton {...this.props} label="Login" style={{ color:'white' }} onClick={this.send_to_login_page} />
    );
  }
}

class Logged extends React.Component {

	 delete_accaunt(){
		console.log('I delete accunt ')
		
		document.location.href = '/delete_account'
		// $.get(
		// 			"/logout",
		// 			function(){
		// 				console.log('both deleted and loggged out')
		// 			}
		// 			)
	};

	logout_accaunt() {
		console.log('logging out of account')
		document.location.href = '/logout'
	}

	render() {
		return (<div>
  <IconMenu
  	iconStyle={{color:'white'}}

    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >   
   <MenuItem primaryText="Logout" onClick={this.logout_accaunt} />
    <MenuItem primaryText="Delete Account" onClick={this.delete_accaunt} />
  </IconMenu>
  </div>)
	}
}





// Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class AppBarExampleComposition extends Component {
  // state = {
  //   logged: false,
  // };
  constructor() {
  	super();
  	this.state = {
  		logged:false,
  	}
  }

   handleChange (logged){
    this.setState({logged: logged},
    	function() {
    		console.log('the state after set',this.state.logged)

    	}.bind(this));
    console.log('this is logged ', logged )
    //document.location.href = '/nevermind'
  };



  // function that sets logged to true or false
  componentDidMount() {
    // assinc to check logged.
    // if logged == false or true, then setState#
    console.log('start mount ', this.state.logged)
	$.get(
		'/get_my_user',
		function(User_details){
			console.log('is user logged in ?',User_details.logged);
			this.handleChange(User_details.logged)
			

		}.bind(this));
  }


 

  render() {
    return (
      <div>

        <AppBar
          title="Title"
           style={{height:"20%", textAlign:"center", marginBottom:"2%", marginTop:"0.2%", backgroundColor:'#a20000'}} //ffc1c1
    title={<img id="logo" style={{ height: "100%"}} src="https://s3.amazonaws.com/s3raysev/images/LogotopWebImg_white.png "/>} ///static/images/LogotopWebImg_white.png

          iconElementRight={this.state.logged ? <Logged /> : <Login />}
        />
      </div>
    );
  }
}








































export class Header_material extends React.Component {






	render() {
		return(


			  <AppBar
	  style={{height:"20%", textAlign:"center", marginBottom:"2%", marginTop:"0.2%", backgroundColor:'#a20000'}} //ffc1c1
    title={<img id="logo" style={{ height: "100%"}} src="/static/images/LogotopWebImg_white.png"/>}
    // iconClassNameRight="muidocs-icon-navigation-expand-more"

  >
  
  </AppBar>


			)
	}
}



export class Sub_headder extends React.Component {

	render() {
		return (


			<div>
			</div>
			)
	}
}





// export class Header extends React.Component {

// 	showallert() {
// 		console.log('allert')
// 	}
// 	// add image inside button <btn><img src=""> add rayse logo?..

// 	render() {
// 		return(
//  	<div >
// 	 <Jumbotron bsClass={'jumbotron' + ' ' + background.jumbo_background } >
	

//  	<Grid>
//     <Row className="show-grid"  >
//       <Col xs={6} sm={3} md={3} lg={3}><Button bsClass={'btn'+ ' ' + background.jumbo_buttons} >View King</Button></Col>
//       <Col  xs={12} sm={6} md={6} lg={6}><h1> Rayse 1.01v </h1></Col>
//       <Col xs={6} sm={3} md={3} lg={3}>
//       	<DropdownButton title="Settings" id="bg-vertical-dropdown-2">
// 	    	  <MenuItem  href="/logout" >Logout</MenuItem>
// 	      	<MenuItem eventKey="2">Delete account</MenuItem>
//     	</DropdownButton>
//       </Col>

//     </Row>
//   </Grid>
	
// 	</Jumbotron>
// </div>


// 		);

// 	}

// };