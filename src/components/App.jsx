// import React from 'react';
// import Button from '../containers/news/Button';
// import NewsItem from '../containers/news/NewsItem'
// import Loading from '../containers/news/Loading'


// let App = () => (
//   <div>
//     <Button />
//     <Loading />
//     <NewsItem />
//   </div>
// );


// export default App;


import React, {Component, Fragment} from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom'; 

let App = () => (
  <div>
    <Button />
    <Loading />
    <NewsItem />
  </div>
);

export default App;