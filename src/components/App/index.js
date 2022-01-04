import React, { Component, ChangeEvent} from 'react';
import { connect } from 'react-redux';
import { Route, Switch} from 'react-router-dom';

import Button from '../../containers/news/Button';
import Loading from '../../containers/news/Loading';
import NewsItem from '../../containers/news/NewsItem';
import Coins from '../../containers/coin/coin-list';
import AddCoin from '../../containers/coin/add-coin';
import UpdateCoin from '../../containers/coin/update-coin';
// import 'bootstrap/dist/js/bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }


  render() {

    return (
            <Switch>
                <Route path='/coins' exact={true} component={Button}/>
                <Route path='/loading' exact={true} component={Loading}/>
                <Route path='/news' exact={true} component={NewsItem}/>
                <Route path='/addCoin' exact={true} component={AddCoin}/>
                <Route path='/updateCoin' exact={true} component={UpdateCoin}/>
                <Route path='/' exact={true} component={Coins}/>
            </Switch>
    );
  }

};

const mapStateToProps = state => ({

})

const mapDispatchToProps = {
//   getNews: getNews,
//   coins: getPromotedCoins

};

const AppComponent = connect(
  null,
  mapDispatchToProps,
)(App);

export default AppComponent;
