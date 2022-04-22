import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import UserPool from '../UserPool';
// callback url: https://aws-host.d3021ujnmxl8cr.amplifyapp.com/
function Signup() {
    const [errorMessage, setErrorMessage] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        UserPool.signUp(username, email, password, [], null, (err, data) => {

            if(err){
                console.error(err);
            }
            console.log(data);
        })

        
    }

   
   
  return (
    <div className="singup-wrap">
            <h1>Sign Up</h1>
            <form onSubmit={onSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" name="username" onInput={(event) => {setUsername(event.target.value);}} value={username} />
                </label>
                <label>
                    <p>Email</p>
                    <input type="text" name="email" onInput={(event) => {setEmail(event.target.value);}} value={email} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" name="password" onInput={(event) => {setPassword(event.target.value);}} value={password} />
                    {errorMessage && <div className='error-message'> {errorMessage} </div>}
                </label>
                <div className="formBtn">
                    <button className="btn solid primary" type="submit">Sign Up</button>
                </div>
            </form>
    </div>
  )
  }


export default Signup