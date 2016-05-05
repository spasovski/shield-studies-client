import React from 'react';
//import {connect} from 'react-redux';
import LoginButton from '../views/login-button';
import store from '../../store';


export default React.createClass({
  onLoginUser: function(googleUser) {
    console.log('logged in:', googleUser);
    var profile = googleUser.getBasicProfile();
    console.log('name:', profile.getName());
    console.log('token:', profile.getId());
  },
  componentDidMount: function() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'onsuccess': this.onLoginUser
    });
  },
  render: function() {
    return (
      <LoginButton />
    );
  }
});
