import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as AWS from 'aws-sdk';
import { ConfigurationOptions } from 'aws-sdk';

ConfigurationOptions = {
    region: 'us-west-1',
    secretAccessKey: '1ANCxy56WfjmLFhFjveFhbcK7swZk2RS9c8olfw5',
    accessKeyId: 'AKIAUBQP5LDCTKAXPKOQ'
}

AWS.config.update(configuration)

ReactDOM.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
  document.getElementById('root')
);