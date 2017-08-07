import React, { Component } from 'react';
// var ReactDOM = require('react-dom')

export default class home_page_structure extends React.Component {

	constructor(props){

		super(props);

		this.state = {



			ret:0

		};
	}


	// Return_login_button() {
	// 	return(
	// 		<Facebook_button>
	// 		</Facebook_button>
	// 		);

	// };

    render(){

        return (
        	<div>
            <h1>Im the new header</h1>
            </div>
        );
    }
};//)


// ReactDOM.render(
// 	<div>
// 	<home_page_structure />
// 	</div>
// 	, document.getElementById('Outer_box'));