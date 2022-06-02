import './App.css';
import { Routing } from './routes/routes';
import React from 'react';
import './App.css';
import { fetchData, putData } from './AwsFunctions';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

const App=()=> {

  const fetchDataFormDynamoDb = () => {
    fetchData('users')
  }

  const addDataToDynamoDB = async () => {
    const userData = {
      name:"Faisal",
      age:"170"
    }

    await putData('users', userData)
  }

 return (
    <div className="App">
      {/* <button onClick={() => fetchDataFormDynamoDb()}> Fetch </button>
      <button onClick={() => addDataToDynamoDB()}> Put </button> */}
      <Routing />
    </div>
  );
}
export default App