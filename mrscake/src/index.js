import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore } from 'redux';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import{loadStripe} from '@stripe/stripe-js';
import{Elements} from '@stripe/react-stripe-js'
import { CookiesProvider } from 'react-cookie';

export const  store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const stripePromise = loadStripe("pk_test_51He4SgJSdNwudrVaBgLpEyC75xSrRFaiOyzdz9L8UJBDTwl0fh8jTn2TPzg4ECF3u3IWOBt8ETVH4xVG2xrlhDOr003rLbwZFd");


ReactDOM.render(
  <CookiesProvider>
    <Elements stripe={stripePromise}>
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
    </Elements>
  </CookiesProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
