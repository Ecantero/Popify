import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Navigation } from '../Navigation.js';
import './Signup.css';


export default function Signup() {
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [confPasswordErrorMessage, setConfPasswordErrorMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    const [redirect, setRedirect] = useState('');

    const handleNameError = () => {
        if(!/^[a-zA-Z- ]+$/.test(name)) {
            setNameErrorMessage("Name Invalid");
        } else {
            setNameErrorMessage("");
        }
    }

    const handleEmailError = () => {
        if(!/\w+@\w+\.\w+/.test(email)) {
            setEmailErrorMessage("Email Invalid");
        } else {
            setEmailErrorMessage("");
        }
    }

    const handlePassowrdError = () => {
        if(!/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password)) {
            setPasswordErrorMessage("Password Invalid");
        } else {
            setPasswordErrorMessage("");
        }
    }

    const handleConfPasswordError = () => {
        if(password !== confPassword) {
            setConfPasswordErrorMessage("Passwords do not match");
        } else {
            setConfPasswordErrorMessage("");
        }
    }

    

    return(
        <div className="signup-page">
            <Navigation/>
            <div className='formContainer'>
              
                    <div className='signup-wrap'>
                        <div className='formTitle'>Sign Up</div>
                            <form>
                                <label>
                                    <div className='formSubtitle'>Username</div>
                                    <input type="text" />
                                </label>
                                <label>
                                    <div className='formSubtitle'>Email</div>
                                    <input type="text" />
                                </label>
                                <label>
                                    <div className='formSubtitle'>Password</div>
                                    <input type="password" />
                                </label>
                                <label>
                                    <div className='formSubtitle'>Confirm Password</div>
                                    <input type="password" />
                                </label>
                                <div className="formBtn">
                                <div className="button" type="submit">Create Account</div>
                                </div>
                            </form>
                    </div>    
            </div>
        </div>
    )
}