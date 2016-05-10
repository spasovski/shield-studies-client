import React from 'react';
import LoginButton from '../views/login-button';
import store from '../../store';
import {connect} from 'react-redux';
import * as loginApi from '../../api/login-api';


const LoginContainer = React.createClass({
  _doSignIn: function() {
    loginApi.performSignIn();
  },
  _doSignOut: function() {
    loginApi.performSignOut();
  },
  _isSignedIn: function() {
    return !!localStorage.user_token;
  },
  componentDidMount: function() {
    gapi.load('auth2', function() {
      // Yep - that's a global auth singleton.
      window.auth2 = gapi.auth2.init({
        client_id: '676697640342-o9mhtndrj60dk7jksdmmunetfmuqng4q.apps.googleusercontent.com'
      });
    });
  },
  render: function() {
    return(
      <LoginButton signedIn={this._isSignedIn()} email={localStorage.user_email} signIn={this._doSignIn} signOut={this._doSignOut} />
    );
  }
});

const mapStateToProps = function(store) {
  return {
    user: store.loginState.user
  }
}

export default connect(mapStateToProps)(LoginContainer);