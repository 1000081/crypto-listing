import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import App from './components/App/index';
import * as serviceWorker from './serviceWorker';

import '@babel/polyfill';

ReactDOM.render(
    <Provider store={ store }>
      <Router> 
        <App />
      </Router>
    </Provider>,
    document.querySelector("#root")
  );

  //regiter while production
  serviceWorker.unregister();


