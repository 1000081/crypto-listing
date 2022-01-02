import React from 'react';
import { connect } from 'react-redux';
import { getPromotedCoins, updateCoin } from '../coin/action';
import "gridjs/dist/theme/mermaid.css";
import CoinAgGrid from '../../components/ag-grid-coins';
import BtnCellRenderer from '../../components/button-renderer';


class Coins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      showAddCoin: false
    };

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
          width: '130', 
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
          width: '150', 
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
            clicked: function(field) {
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
      doReferesh: false
    }
    this.showAddCoin = this.showAddCoin.bind(this);
  }

  componentDidMount() {
    this.props.getPromotedCoins();
    this.setState({ rowData: this.props.data })
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('this props......' + JSON.stringify(this.props));
    console.log('prevProps......' + JSON.stringify(prevProps));
    console.log('this state......' + JSON.stringify(this.state));
    console.log('prevState......' + JSON.stringify(prevState));
    const { voteCount } = this.props;
    if (prevProps.voteCount !== voteCount){
      this.props.getPromotedCoins();
    }

    // this.props.getPromotedCoins();

  }


  showAddCoin(value) {
    console.log('Show coin registration......' + value);
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
    console.log('state......' + this.state.showAddCoin);
    return (
      <div className="card">
        <div class="well well-sm">Promoted Coins</div>
        <div className="">
          <CoinAgGrid data={this.props.promotedCoins} columnDefs={this.state.colDefs} frameworkComponents={this.state.frameworkComponents}/>
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
                <CoinAgGrid data={this.props.newCoins} columnDefs={this.state.colDefs}  frameworkComponents={this.state.frameworkComponents}/>
              </div>
              <div id="alltb" className="tab-pane fade">
                <CoinAgGrid data={this.props.allTimeBestCoins} columnDefs={this.state.colDefs} frameworkComponents={this.state.frameworkComponents}/>
              </div>
              <div id="normal" className="tab-pane fade">
                <CoinAgGrid data={this.props.normalCoins} columnDefs={this.state.colDefs} frameworkComponents={this.state.frameworkComponents}/>
              </div>
              <div id="presale" className="tab-pane fade">
                <CoinAgGrid data={this.props.preSaleCoins} columnDefs={this.state.colDefs} frameworkComponents={this.state.frameworkComponents}/>
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
  newCoins: state.coinReducer.newCoins,
  voteCount: state.coinReducer.voteCount
});

const mapDispatchToProps = { getPromotedCoins, updateCoin };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Coins);
