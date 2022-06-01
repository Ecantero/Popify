import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Navigation } from '../Navigation.js';
import './Login.css';
import {Player} from '../Player.js';
// import Amplify from 'aws-amplify';
// import awsconfig from './aws-exports';
// import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react'

// Amplify.configure(awsconfig);

import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react'

import '@aws-amplify/ui-react/styles.css';
import awsExports from '../../aws-exports'
Amplify.configure(awsExports);

export default function Login() {
    const navigate = useNavigate();
   
    // function redirectLogin(){
    //     let navigate = useNavigate();
    //     const routeChange = () =>{
    //         let path = `newPath`;
    //         navigate(path);
    //     }
    // }

    return(
        <div className='loginPage'>
            <Navigation/>
            <div className='formContainer'>
             <Authenticator className='authenticator'>
                {({ signOut, user }) => (

                    <main>
                    <h1>Hello {user.attributes.email}</h1>
                    <button onClick={navigate("/home")}>Listen to Music</button>
                    </main>
                )}
            </Authenticator>   
            </div>
            
        </div>
    );
}
