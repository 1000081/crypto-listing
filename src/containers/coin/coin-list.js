import React from 'react';
import { connect } from 'react-redux';
import { getPromotedCoins } from '../coin/action';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { Modal } from 'react-bootstrap';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Grid } from 'gridjs-react';
import "gridjs/dist/theme/mermaid.css";
import moment from "moment";
import { html } from 'gridjs';
import CoinAgGrid from '../../components/ag-grid-coins';


class Coins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      showAddCoin: false
    };

    this.showAddCoin = this.showAddCoin.bind(this);
    // this.grid = this.grid.bind(this);
  }

  componentDidMount() {
    this.props.getPromotedCoins();
  }

  showAddCoin() {
    console.log('Show coin registration......');
    this.setState({ showAddCoin: true });
  };


  render() {
    console.log('state......' + this.state.showAddCoin);
    return (
      <div className="card">
            <div class="well well-sm">Promoted Coins</div>
          <div className="">
            <CoinAgGrid data={this.props.promotedCoins} />
          </div>
        <div className="">
          <div className="">
            <ul className="nav nav-tabs">
              <li className="nav-item"><a data-toggle="tab" href="#new">New</a></li>
              <li><a data-toggle="tab" href="#alltb">All Time Best</a></li>
              <li><a data-toggle="tab" href="#normal">Normal</a></li>
              <li><a data-toggle="tab" href="#presale">Presale</a></li>
            </ul>
          </div>
          <div className="">
            <div class="tab-content">
              <div id="new" className="tab-pane fade in active">
                <CoinAgGrid data={this.props.newCoins} />
              </div>
              <div id="alltb" className="tab-pane fade">
                <CoinAgGrid data={this.props.allTimeBestCoins} />
              </div>
              <div id="normal" className="tab-pane fade">
                <CoinAgGrid data={this.props.allTimeBestCoins} />
              </div>
              <div id="presale" className="tab-pane fade">
                <CoinAgGrid data={this.props.preSaleCoins} />
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    );
  }

};

const mapStateToProps = state => ({
  promotedCoins: state.coinReducer.promotedCoins,
  allTimeBestCoins: state.coinReducer.allTimeBestCoins,
  normalCoins: state.coinReducer.normalCoins,
  preSaleCoins: state.coinReducer.preSaleCoins,
  newCoins: state.coinReducer.newCoins
});

const mapDispatchToProps = { getPromotedCoins };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Coins);
