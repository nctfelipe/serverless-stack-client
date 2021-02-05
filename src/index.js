import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

Amplify.configure({
    Auth: {
        mandatorySignIn: true,
        region: process.env.REACT_APP_COGNITO_REGION,
        userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
        identityPoolId: process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID,
        userPoolWebClientId: process.env.REACT_APP_COGNITO_APP_CLIENT_ID
    },
    Storage: {
        region: process.env.REACT_APP_S3_REGION,
        bucket: process.env.REACT_APP_S3_BUCKET,
        identityPoolId: process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID
    },
    API: {
        endpoints: [
            {
                name: "notes",
                endpoint: process.env.REACT_APP_APIGATEWAY_URL,
                region: process.env.REACT_APP_COGNITO_REGION
            },
        ]
    }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
