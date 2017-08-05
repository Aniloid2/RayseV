var React = require('react')
var ReactDOM = require('react-dom')


// import React from 'react';
// import ReactDOM from 'react-dom';

import Facebook_button from "./Facebook_login"

// var Initaliser = React.createClass ({
class Initaliser extends React.Component {

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

    render(){

        return (
            null
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

ReactDOM.render(<div>
	<Initaliser />
	<Facebook_button />
	</div>
	, document.getElementById('container'));