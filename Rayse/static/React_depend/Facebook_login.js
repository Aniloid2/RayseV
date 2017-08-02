import React, { Component } from 'react';
import FacebookProvider, { Login } from 'react-facebook';
import './Facebook_button.css'



export default class Facebook_login extends Component {


  //   handleError = (error) => {
  //   this.setState({ error });
  // },

  // handleResponse = (data) => {
  //   console.log(data);
  // },
 
 
 
  render() {
    return (
      <FacebookProvider appId="1608253646136164">
        <Login
          scope="email"
          onResponse={this.handleResponse}
          onError={this.handleError}
          render={({ isLoading, isWorking, onClick }) => (
            <button className="loginBtn loginBtn--facebook" onClick={onClick}>
              Login via Facebook
              {(isLoading || isWorking) && (
                <span> Loading...</span>
              )}
            </button>
          )}
        />
      </FacebookProvider>
    );
  }
}