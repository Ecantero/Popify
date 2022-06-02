import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as AWS from 'aws-sdk';
import { ConfigurationOptions } from 'aws-sdk';

if (!AWS.config.region){
  AWS.config.update({
    region: 'us-west-1'
  })
}

const configuration = ConfigurationOptions = {
  secretAccessKey: '1ANCxy56WfjmLFhFjveFhbcK7swZk2RS9c8olfw5',
  accessKeyId: 'AKIAUBQP5LDCTKAXPKOQ'
}


ReactDOM.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
  document.getElementById('root')
);