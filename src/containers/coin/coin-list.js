import React from 'react';
import { connect } from 'react-redux';
import { getPromotedCoins, updateCoin } from '../coin/action';
import "gridjs/dist/theme/mermaid.css";
import CoinAgGrid from '../../components/ag-grid-coins';
import BtnCellRenderer from '../../components/button-renderer';
import { ReactSearchAutocomplete } from "react-search-autocomplete";


class Coins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colDefs: [
        {
          width: '70',
          cellRenderer: this.symbolCellRenderer,
          field: "logo"
        },
        {
          width: '200',
          field: "name",
          cellRenderer: this.yearCellRenderer
        },
        {
          width: '100',
          field: "symbol"
        },
        {
          width: '100',
          field: "chain"
        },
        {
          width: '110',
          headerName: "Launch",
          field: "launchDt",
          cellRenderer: this.launchCellRenderer
        },
        {
          width: '170',
          headerName: "Presale Date"
        },
        {
          width: '100',
          headerName: "Last 1hr %"
        },
        {
          width: '200',
          headerName: "Price",
          field: "price",
          cellRenderer: this.priceCellRenderer
        },
        {
          width: '200',
          headerName: "Market Cap",
          field: "marketCap",
          sortable: true,
          cellRenderer: this.marketCapCellRenderer
        },
        {
          width: '130',
          cellRenderer: this.auditCellRenderer,
          headerName: "Audit"
        },
        {
          width: '170',
          cellClass: "cell-wrap-text",
          autoHeight: true,
          headerName: "Listed On",
          field: 'listedDt'
        },
        {
          width: '160',
          field: "vote",
          cellRenderer: 'btnCellRenderer',
          cellRendererParams: {
            clicked: function (field) {
              alert(`${field} was clicked`);
            }
          }
        }
      ],
      defaultColDef: {
        flex: 1,
        minWidth: 100
      },
      frameworkComponents: {
        btnCellRenderer: BtnCellRenderer
      },
      rowData: [],
      doReferesh: false,
      hover: false,
      showAddCoin: false
    }
    this.showAddCoin = this.showAddCoin.bind(this);
  }

  componentDidMount() {
    this.props.getPromotedCoins();
    this.setState({ rowData: this.props.data })
  };

  componentDidUpdate(prevProps, prevState) {
    const { voteCount } = this.props;
    if (prevProps.voteCount !== voteCount) {
      this.props.getPromotedCoins();
    }
  }


  showAddCoin(value) {
    // console.log('Show coin registration......' + value);
    this.setState({ showAddCoin: true });
  };

  yearCellRenderer(params) {
    // put the value in bold
    return params.value;
  };

  marketCapCellRenderer(params) {
    // put the value in bold
    return '<i class="fas fa-dollar-sign"></i>&nbsp;' + params.value;
  };

  symbolCellRenderer(params) {
    return '<img class="img-circle" src="img/ethereum-eth-logo.png" width="50" height="30"></img>';
  };

  launchCellRenderer(params) {
    return '<a href="#" class="btn btn-warning">' + 6 + '&nbsp;days</a>';
  };

  auditCellRenderer(params) {
    return '<button type="button" class="btn btn-primary"><i class="fas fa-search-dollar"></i>&nbspAudit</button>';
  };

  priceCellRenderer(params) {
    // put the value in bold
    return '<i class="fas fa-dollar-sign"></i>&nbsp;' + params.value;
  };

  render() {
    return (
      <div>
        <div class="row">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title"><span class="navbar-brand mb-0 h1"><i class="fas fa-bullhorn"></i>&nbsp;Promoted Coins</span></h5>
                <br />
                <CoinAgGrid data={this.props.promotedCoins} columnDefs={this.state.colDefs} frameworkComponents={this.state.frameworkComponents} />
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                {/* <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a> */}
                <br />
                ADS
                <br />
                <br />
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                {/* <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a> */}
                <br />
                ADS
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title"></h5>
                <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" data-bs-toggle="tab" href="#home">New</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#menu1">All Time Best</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#menu2">Normal</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#menu3">Presale</a>
                  </li>
                </ul>
                <div class="tab-content">
                  <div id="home" class="container tab-pane active"><br />
                    <CoinAgGrid data={this.props.newCoins} columnDefs={this.state.colDefs} frameworkComponents={this.state.frameworkComponents} />
                  </div>
                  <div id="menu1" class="container tab-pane fade"><br />
                    <CoinAgGrid data={this.props.allTimeBestCoins} columnDefs={this.state.colDefs} frameworkComponents={this.state.frameworkComponents} />
                  </div>
                  <div id="menu2" class="container tab-pane fade"><br />
                    <CoinAgGrid data={this.props.normalCoins} columnDefs={this.state.colDefs} frameworkComponents={this.state.frameworkComponents} />
                  </div>
                  <div id="menu3" class="container tab-pane fade"><br />
                    <CoinAgGrid data={this.props.preSaleCoins} columnDefs={this.state.colDefs} frameworkComponents={this.state.frameworkComponents} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-body">
                <br />
                ADS
                <br />
                <br />
              </div>
            </div>
          </div>
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
  newCoins: state.coinReducer.newCoins,
  voteCount: state.coinReducer.voteCount
});

const mapDispatchToProps = { getPromotedCoins, updateCoin };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Coins);
