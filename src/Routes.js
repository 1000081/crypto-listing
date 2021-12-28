import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import Button from './containers/news/Button';
import Loading from './containers/news/Loading';
import NewsItem from './containers/news/NewsItem';

function App() {
  return (
    <Provider store={ store }>
      <Router> 
      <Route path="/" component={Button} />
      <Route path="/loading" component={Loading} />
      <Route path="/news" component={NewsItem} />
      </Router>
    </Provider>
  );

}

export default App;