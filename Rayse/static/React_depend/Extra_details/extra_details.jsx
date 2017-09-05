import React, { Component } from 'react';
var ReactDOM = require('react-dom')

import DjangoCSRFToken from 'django-react-csrftoken';


import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import {  Row, Col } from 'react-bootstrap';
import loginform_styles from '../../css/loginform/style.css';







const items = [];
for (let i = 18; i < 122; i++ ) {
  items.push(<MenuItem value={i} key={i} label={i} primaryText={`${i}`} />);
}


class Form_ex extends React.Component {

	  constructor(props) {
	  	super(props)
	  	this.state = {
		    Gender: 'Gender',
		    Age:'',
		    ERROR:'',
		  };
		}


   handleChangeGender (event, index, value) { 

  	console.log('the envent gender', event, index, value )

  	this.setState({Gender:value},
  		function() {
  			console.log("set value gender",this.state.Gender)
  		}); 
  }

    handleChangeAge (event, index, value) {
	console.log('the envent age', event, index, value )
    this.setState({Age:value},
    	function() {
  			console.log("set value age",this.state.Age)
  		});
  };

  send_extra_details_to_backend() {
  	
  	if (this.state.Gender == "Gender"){
  		this.setState({ERROR:'** Please select your gender'})

  	}
  	else if (this.state.Age == "") {
  		this.setState({ERROR:'** Please select your age'})
  	}
  	else {
  		console.log('submitting')
  		// document.Extra_details_data.submit()
  	}
  	
  }





// <img id="logo" src="https://s3.amazonaws.com/s3raysev/images/LogotopWebImg.png"/> 
  render() {
    return (
      <div>
      <Row>
    
      
      <p>We just need some extra details from you</p>
      <p style={{fontSize:10, color:'#a20000'}}>{this.state.ERROR}</p>
      </Row>
	  <Row>
	  <p >Gender</p>

        <SelectField
         floatingLabelText=''
          floatingLabelFixed={false}
          value={this.state.Gender}
          onChange={this.handleChangeGender.bind(this)}
          selectedMenuItemStyle={{color:'#a20000'}}
        >
          <MenuItem value={'M'} label="Male" primaryText="Male" />
          <MenuItem value={'F'} label="Female" primaryText="Female" />

        </SelectField>

       </Row>
       <Row>
        <p >Age</p>
        <SelectField
        floatingLabelText={this.state.Age}
        floatingLabelFixed={false}
        value={this.state.value}
        onChange={this.handleChangeAge.bind(this)}
        maxHeight={200}
        floatingLabelStyle={{color:'black'}}
        selectedMenuItemStyle={{color:'#a20000'}}
      >
        {items}
      </SelectField>
      </Row>
      <Row>
        <form id="extra_details_form" name="Extra_details_data" encType="application/json" method="POST" style={{display:'none'}} >
        <DjangoCSRFToken/>

        <input type="text" value={this.state.Gender} name="gender"/>
        <input type="text" value={this.state.Age} name="age" />


    </form>
    <FlatButton label="Primary" primary={true} onClick={this.send_extra_details_to_backend.bind(this)} fullWidth={true} style={{color:'#a20000'}} />
    </Row>
    




        </div>
 

			)
	}
}

class extra_details extends React.Component {
	render() {
		return(
			<div className={loginform_styles.FoginForm}>
			<img id="logo" src="https://s3.amazonaws.com/s3raysev/images/LogotopWebImg.png"  style={{width:'100%'}} /> 
			<Form_ex/>
			</div>)
	}
}




export default extra_details;