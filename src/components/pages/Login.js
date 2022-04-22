import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function Login() {
    const [errorMessage, setErrorMessage] = useState('');
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleClick = () => {
        setErrorMessage("Email and Password do not match");
    }

    const postLogin = event => {
        event.preventDefault();

        if(!/\w+@\w+\.\w+/.test(identifier)) {
            setErrorMessage("Email and Passowrd do not match");
        } else if(!/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password)) {
            setErrorMessage("Email and Password do not match");
        } else {
            const postData = {
                identifier,
                password
            }
            fetch("/* api */", {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)

            }).then (response => {
                console.log(response);
                if(response.ok) {
                    /* auth check */
                }
                else {
                    setErrorMessage("Credentials not found.")
                }
            });
        }
    }
    if(redirect) {
        return(
            <Navigate to="/" />
        )
    }

    return(
        <div className="login-wrap">
            <h1>Log In</h1>
            <form onSubmit={postLogin}>
                <label>
                    <p>Username/Email</p>
                    <input type="text" name="identifier" onInput={(event) => {setIdentifier(event.target.value);}} value={identifier} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" name="password" onInput={(event) => {setPassword(event.target.value);}} value={password} />
                    {errorMessage && <div className='error-message'> {errorMessage} </div>}
                </label>
                <div className="formBtn">
                    <button onClick={handleClick} className="btn solid primary" type="submit">Log In</button>
                </div>
            </form>
        </div>
    )
}