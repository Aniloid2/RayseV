var React = require('react')
var ReactDOM = require('react-dom')


// import React from 'react';
// import ReactDOM from 'react-dom';

import Facebook_button from "./Facebook_login";
import Home_page from "./home_page_structure.jsx"
import loginform_styles from '../css/loginform/style.css';
// import LogoImg from './9e2494ad2b4a9a6374c4eabf4f6e242d.png';

// import '../css/bootstrap.css';
import * as firebase from 'firebase'

import {  Jumbotron } from 'react-bootstrap';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var folder = "https://rayse-1d175.firebaseio.com/"
var diff_config = {
	apiKey: "AIzaSyA1He_lYsMphHl41rpQSEUfTeYIj976Oz4",
	authDomain: "rayse-1d175.firebaseapp.com",
	databaseURL: folder,
	storageBucket: "rayse-1d175.appspot.com",
	};

firebase.initializeApp(diff_config);


// var Login_form = React.createClass ({
class Home_page_structure extends React.Component {
	render () {


		return (
			<Home_page/>
			)
	}
}


class Login_form extends React.Component {

	constructor(props){

		super(props);

		this.state = {

		//get location of user (IP), do server side calls when ip is different; to get logitude and latitude
	  	//use freegeoip.net

			

			ret:0

		};
	}


	Return_login_button() {

		return(
			<Facebook_button>
			</Facebook_button>
			);

	};

    render(){


// the image is located during dev at src="/static/images/LogotopWebImg.png"
        return (
        	// Container = 'container'
            <div className={  loginform_styles.FoginForm  } >
            <img id="logo" src="https://s3.amazonaws.com/s3raysev/images/LogotopWebImg.png"/>     
            <div>
            	{this.Return_login_button()}
            	</div>
            	 <a className={ loginform_styles.link } href="#">We won't post anthing to your wall</a>
            </div>
        )
    }
};

// var TEST = React.createClass ({


// 	getInitialState: function() {

// 	//get location of user (IP), do server side calls when ip is different; to get logitude and latitude
//   	//use freegeoip.net

// 	$.getJSON('https://api.ipify.org?format=json', function(data) {
// 		      var IPadress = JSON.stringify(data, null, 2)
// 		      console.log(IPadress);
// 		      console.log(data.ip);
// 		      document.Facebookdata.ip.value = data.ip;
// 		    });

// 	return (null)

// 	},

//     render: function() {

//         return (

//             <h1>hepppa</h1>
//         )
//     }
// })


try {
ReactDOM.render(	
	<div >

	  <MuiThemeProvider>

	  

	<Home_page_structure />
  </MuiThemeProvider>
	
	
	</div>
	, document.getElementById('outer_box'));
}
catch(err) {
	console.log('missed', err)
}
// do my Home_page_structure window.location
try{
ReactDOM.render(
	<div>
	
	<Login_form />
	</div>
	, document.getElementById('container'));

}
catch(err) {
	console.log('missed', err)
}

