import React, { Component } from 'react';
import FacebookProvider, { Login } from 'react-facebook';
import FacebookLogin from 'react-facebook-login';
import DjangoCSRFToken from 'django-react-csrftoken'

import styles from './Facebook_button.css';


export default class Facebook_login extends React.Component {


  //   handleError = (error) => {
  //   this.setState({ error });
  // },

 
 
 constructor(props){

    super(props);

    this.state = {

      first_name:0,
      last_name:0,
      username_id:0,
      webpull:0,
      ip:0,

    };
    this.handleResponse = this.handleResponse.bind(this);
  }

  // componentDidMount() {

  // }
  // handleResponse() {
  //   this.setState( data => ({
  //     ret:data   
  //   }));
  //   console.log(this.state.ret)
   
  // }

  handleResponse(response) {

    console.log('response', response);
    console.log('first_name', response.picture.data.url);


    $.getJSON('https://api.ipify.org?format=json', function(data) {
              var IPadress = JSON.stringify(data, null, 2)
              console.log(IPadress);
              console.log(data.ip);
              // document.Facebookdata.ip.value = data.ip;
              this.setState({ip:data.ip})


            }.bind(this));

    this.setState({first_name:response.first_name});
    this.setState({last_name:response.last_name});

    this.setState({username_id:response.id});

    this.setState({webpull:response.picture.data.url});


    console.log(this.state)

    document.Facebookdata.submit()





    // document.Facebookdata.last_name.value = response.last_name
    // document.Facebookdata.first_name.value = response.first_name


    // // document.FacebookData.first_name.value = response.first_name
    
    // document.Facebookdata.webpull.value = response.picture.data.url
    // document.Facebookdata.username_id.value = response.id

    // var form_data = {
    //     'first_name':response.first_name,
    //     'last_name' : response.last_name,
    //     'username_id': response.id,
    //     'webpull': response.picture.data.url,
    //     'csrfmiddlewaretoken': csrf,
    //   }

    // $.post(
    //   "/login/",
    //   form_data,
    //   function(data) {
    //     console.log(data)
    //   });

    



  };
 
 handleError(error) {
  console.log('error', error);
 }
 
  render() {


    // return (
    //   <FacebookProvider appId="1608253646136164">
    //     <Login

    //       scope=""

    //       onResponse={this.handleResponse}
    //       onError={this.handleError}
    //       render={({ isLoading, isWorking, onClick }) => (
    //         <button className={styles.loginBtn +' '+ styles.loginBtnfacebook} onClick={onClick}>
    //           Login via Facebook
    //           {(isLoading || isWorking) && (
    //             <span> Loading...</span>
    //           )}
    //         </button>
    //       )}
    //     />
    //   </FacebookProvider>
    // );

    return (
    <div>
      <FacebookLogin
        appId="1608253646136164"
        autoLoad={true}
        fields="id,first_name,last_name,email,picture.height(300).width(300)"
        callback={this.handleResponse}
        cssClass={styles.loginBtn + ' '+ styles.loginBtnfacebook }
    />


    <form id="facebook_user" name="Facebookdata" encType="application/json" method="POST" style={{display : 'none'}}>
        <DjangoCSRFToken/>

        <input type="text" value={this.state.first_name} name="first_name"/>
        <input type="text" value={this.state.last_name} name="last_name" />
        <input type="text" value={this.state.username_id} name="username_id"/>
        <input type="text" value={this.state.webpull} name="webpull"/>
        <input type="text" value={this.state.ip} name="ip"/>


    </form>
    {/*<button id="submit_button" type="submit" form="facebook_user" value="Submit" style={{display:'block'}} >Random to the app!</button>*/}

    </div>


    

      );






  }
}