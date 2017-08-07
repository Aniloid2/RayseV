var React = require('react')
var ReactDOM = require('react-dom')


// import React from 'react';
// import ReactDOM from 'react-dom';

import Facebook_button from "./Facebook_login";
import Home_page from "./home_page_structure"
import loginform_styles from '../css/loginform/style.css';
// import LogoImg from './9e2494ad2b4a9a6374c4eabf4f6e242d.png';



// var Login_form = React.createClass ({
class Header extends React.Component {
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

	// componentDidMount() {

		// $.getJSON('https://api.ipify.org?format=json', function(data) {
		// 		      var IPadress = JSON.stringify(data, null, 2)
		// 		      console.log(IPadress);
		// 		      console.log(data.ip);
		// 		      document.Facebookdata.ip.value = data.ip;
		// 		    });

	// };

	Return_login_button() {

		return(
			<Facebook_button>
			</Facebook_button>
			);

	};

    render(){



        return (
        	// Container = 'container'
            <div className={  loginform_styles.FoginForm  } >
            <img id="logo" src="/static/images/LogotopWebImg.png"/>
            <div>
            	{this.Return_login_button()}
            	</div>
            	 <a className={ loginform_styles.link } href="#">We won't post anthing to your wall</a>
            </div>
        )
    }
};//)

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
	<div>
	<Header />
	</div>
	, document.getElementById('outer_box'));
}
catch(err) {
	console.log('missed')
}
// do my header window.location
try{
ReactDOM.render(
	<div>
	
	<Login_form />
	</div>
	, document.getElementById('container'));

}
catch(err) {
	console.log('missed')
}

