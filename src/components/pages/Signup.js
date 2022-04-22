import React, { useState } from 'react';

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
        <div className="signup-wrap">
            <h1>Sign Up</h1>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Email</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <label>
                    <p>Confirm Password</p>
                    <input type="password" />
                </label>
                <div className="formBtn">
                    <button className="btn solid primary" type="submit">Create Account</button>
                </div>
            </form>
        </div>
    )
}