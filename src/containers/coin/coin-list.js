import React from 'react';
import { connect } from 'react-redux';
import { getPromotedCoins } from '../coin/action';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { Modal } from 'react-bootstrap';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class Coins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      showAddCoin: false
    };

    this.marketCapCellRenderer = this.marketCapCellRenderer.bind(this);
    this.symbolCellRenderer = this.symbolCellRenderer.bind(this);
    this.symbolCellRenderer = this.symbolCellRenderer.bind(this);
    this.actionButtonsCellRenderer = this.actionButtonsCellRenderer.bind(this);
    this.voteCellRenderer = this.voteCellRenderer.bind(this);
    this.launchCellRenderer = this.launchCellRenderer(this);
    this.showAddCoin = this.showAddCoin.bind(this);
  }

  componentDidMount() {
    this.props.getPromotedCoins();
  }

  yearCellRenderer(params) {
    // put the value in bold
    return params.value;
  };

  marketCapCellRenderer(params) {
    // put the value in bold
    return '<i class="fas fa-dollar-sign"></i>&nbsp;' + params.value;
  };

  symbolCellRenderer(params) {
    // return '<img src="'+params.value+'" width="5000" height="6000">';
    return '<i class="fab fa-bitcoin"></i>';
  };

  actionButtonsCellRenderer(params) {
    // return '<img src="'+params.value+'" width="5000" height="6000">';
    return '<button type="button" class="btn btn-success">Update</button> &nbsp; <button type="button" class="btn btn-danger">Delete</button>';
  };

  voteCellRenderer(params) {
    // put the value in bold
    return '<button type="button" class="btn btn-primary"><i class="fas fa-location-arrow"></i>&nbspVote <span class="badge">' + params.value + '</span></button>';
  };

  launchCellRenderer(params) {
    var date1 = new Date("06/30/2019");
    var date2 = new Date("07/30/2019");
    // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();
    console.log('days......' + Difference_In_Time);
    return '13';
  };


  showAddCoin() {
    console.log('Show coin registration......');
    this.setState({ showAddCoin: true });
  };

  render() {
    console.log('state......' + this.state.showAddCoin);
    return (
      <div className="card">
        <div class="panel panel-default">
          <div class="panel-heading text-center">
            Promoted Coins
            </div>
          <div class="panel-body">
            <div className="ag-theme-alpine bg-dark">
              <AgGridReact 
              domLayout={'autoHeight'}
              rowData={this.props.promotedCoins} >
                <AgGridColumn field="logo" cellRenderer={this.symbolCellRenderer}></AgGridColumn>
                <AgGridColumn field="name" cellRenderer={this.yearCellRenderer}></AgGridColumn>
                <AgGridColumn field="symbol"></AgGridColumn>
                <AgGridColumn headerName="MarketCap" field="marketCap.$numberDecimal" sortable={true} cellRenderer={this.marketCapCellRenderer}></AgGridColumn>
                <AgGridColumn headerName="Launch" field="launchDt"></AgGridColumn>
                <AgGridColumn field="vote" cellRenderer={this.voteCellRenderer} ></AgGridColumn>
                <AgGridColumn headerName="Actions" cellRenderer={this.actionButtonsCellRenderer}></AgGridColumn>
              </AgGridReact>
            </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading text-center">
            <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#new">New</a></li>
              <li><a data-toggle="tab" href="#alltb">All Time Best</a></li>
              <li><a data-toggle="tab" href="#normal">Normal</a></li>
              <li><a data-toggle="tab" href="#presale">Presale</a></li>
            </ul>
          </div>
          <div class="panel-body">
            <div class="tab-content">
              <div id="new" class="tab-pane fade in active">
                <div className="ag-theme-alpine bg-dark">
                  <AgGridReact 
                  domLayout={'autoHeight'}
                  rowData={this.props.newCoins} >
                    <AgGridColumn field="logo" cellRenderer={this.symbolCellRenderer}></AgGridColumn>
                    <AgGridColumn field="name" cellRenderer={this.yearCellRenderer}></AgGridColumn>
                    <AgGridColumn field="symbol"></AgGridColumn>
                    <AgGridColumn headerName="MarketCap" field="marketCap.$numberDecimal" sortable={true} cellRenderer={this.marketCapCellRenderer}></AgGridColumn>
                    <AgGridColumn headerName="Launch" field="launchDt" cellRenderer={this.launchCellRenderer}></AgGridColumn>
                    <AgGridColumn field="vote" cellRenderer={this.voteCellRenderer}></AgGridColumn>
                    <AgGridColumn headerName="Actions" cellRenderer={this.actionButtonsCellRenderer}></AgGridColumn>
                  </AgGridReact>
                </div>
              </div>
              <div id="alltb" class="tab-pane fade">
                <div className="ag-theme-alpine bg-dark">
                  <AgGridReact 
                  domLayout={'autoHeight'}
                  rowData={this.props.allTimeBestCoins} >
                    <AgGridColumn field="logo" cellRenderer={this.symbolCellRenderer}></AgGridColumn>
                    <AgGridColumn field="name" cellRenderer={this.yearCellRenderer}></AgGridColumn>
                    <AgGridColumn field="symbol"></AgGridColumn>
                    <AgGridColumn headerName="MarketCap" field="marketCap.$numberDecimal" sortable={true} cellRenderer={this.marketCapCellRenderer}></AgGridColumn>
                    <AgGridColumn field="launchDt" cellRenderer={this.launchCellRenderer}></AgGridColumn>
                    <AgGridColumn field="vote" cellRenderer={this.voteCellRenderer}></AgGridColumn>
                    <AgGridColumn headerName="Actions" cellRenderer={this.actionButtonsCellRenderer}></AgGridColumn>
                  </AgGridReact>
                </div>
              </div>
              <div id="normal" class="tab-pane fade">
                <div className="ag-theme-alpine bg-dark">
                  <AgGridReact 
                  domLayout={'autoHeight'}
                  rowData={this.props.normalCoins} >
                    <AgGridColumn field="logo" cellRenderer={this.symbolCellRenderer}></AgGridColumn>
                    <AgGridColumn field="name" cellRenderer={this.yearCellRenderer}></AgGridColumn>
                    <AgGridColumn field="symbol"></AgGridColumn>
                    <AgGridColumn headerName="MarketCap" field="marketCap.$numberDecimal" sortable={true} cellRenderer={this.marketCapCellRenderer}></AgGridColumn>
                    <AgGridColumn field="launchDt" cellRenderer={this.launchCellRenderer}></AgGridColumn>
                    <AgGridColumn field="vote" cellRenderer={this.voteCellRenderer}></AgGridColumn>
                    <AgGridColumn headerName="Actions" cellRenderer={this.actionButtonsCellRenderer}></AgGridColumn>
                  </AgGridReact>
                </div>
              </div>
              <div id="presale" class="tab-pane fade">
                <div className="ag-theme-alpine bg-dark">
                  <AgGridReact 
                  domLayout={'autoHeight'}
                  rowData={this.props.preSaleCoins} >
                    <AgGridColumn field="logo" cellRenderer={this.symbolCellRenderer}></AgGridColumn>
                    <AgGridColumn field="name" cellRenderer={this.yearCellRenderer}></AgGridColumn>
                    <AgGridColumn field="symbol"></AgGridColumn>
                    <AgGridColumn headerName="MarketCap" field="marketCap.$numberDecimal" sortable={true} cellRenderer={this.marketCapCellRenderer}></AgGridColumn>
                    <AgGridColumn field="launchDt" cellRenderer={this.launchCellRenderer}></AgGridColumn>
                    <AgGridColumn field="vote" cellRenderer={this.voteCellRenderer}></AgGridColumn>
                    <AgGridColumn headerName="Actions" cellRenderer={this.actionButtonsCellRenderer}></AgGridColumn>
                  </AgGridReact>
                </div>
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
  newCoins: state.coinReducer.newCoins
});

const mapDispatchToProps = { getPromotedCoins };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Coins);
