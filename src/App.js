import './App.css';
import { Routing } from './routes/routes';
import React from 'react';
import './App.css';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

const App=()=> {

 return (
    <div className="App">
      <Routing />
    </div>
  );
}
export default App