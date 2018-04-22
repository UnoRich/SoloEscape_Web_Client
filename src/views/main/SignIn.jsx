import React, { Component } from 'react'
import GoogleSignIn from "react-google-signin";
import * as API from '../../../src/apis';

class SignIn extends Component { 
    constructor(...props){
        super(...props)
        this.SignOut = this.SignOut.bind(this);
        this.SignIn = this.SignIn.bind(this);
    }

    SignIn(userProfile, accessToken) {
        console.log(userProfile)
    }
    
    SignOut() {
        this.googleAuth.signOut();
    }

    render() {
        const data = API.getGoogleSigninUI();
        return (
          <div>
                <GoogleSignIn clientId="680107599193-4egd5q12p1ijqor26eh0ucj369fjf037"
                      ref={g => this.googleAuth = g}
                      onSuccess={this.SignIn}/>             
                <button onClick={this.SignOut}> Sign Out </button>  
          </div>
        );    
    }
}
export default SignIn;