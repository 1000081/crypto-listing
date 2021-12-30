import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { Modal } from 'react-bootstrap';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Grid } from 'gridjs-react';

let styles = {
  backgroundColor: 'HotPink',
  width: '250px',
  height: '100px',
  borderRadius: '100px',
  display: 'block',
  margin: '50px auto',
  fontSize: '25px',
  border: '3px solid '
}

export default class CoinAgGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
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
    return '<img class="img-circle" src="img/ethereum-eth-logo.png" width="50" height="30"></img>';
  };

  voteCellRenderer(params) {
    // put the value in bold
    return '<button type="button" class="btn btn-primary"><i class="fas fa-location-arrow"></i>&nbspVote <span class="badge">' + params.value + '</span></button>&nbsp;' +
      '<button type="button" class="btn btn-success">Update</button> &nbsp;' +
      '<button type="button" class="btn btn-danger">Delete</button>';
  };

  launchCellRenderer(params) {
    return '<a href="#" class="btn btn-warning">'+6+'&nbsp;Days ago</a>';
  };

  render() {
    return (
        <div className="ag-theme-alpine bg-dark">
        <AgGridReact
          domLayout={'autoHeight'}
          rowData={this.props.data} >
          <AgGridColumn width='70' minWidth='50' maxWidth='80' field="logo" suppressSizeToFit='false' cellRenderer={this.symbolCellRenderer} ></AgGridColumn>
          <AgGridColumn width='300' minWidth='250' maxWidth='350' field="logo" suppressSizeToFit='false' field="name" cellRenderer={this.yearCellRenderer}></AgGridColumn>
          <AgGridColumn width='120' minWidth='80' maxWidth='150' field="logo" suppressSizeToFit='false' field="symbol"></AgGridColumn>
          <AgGridColumn width='200' minWidth='150' maxWidth='300' field="logo" suppressSizeToFit='false' headerName="MarketCap" field="marketCap.$numberDecimal" sortable={true} cellRenderer={this.marketCapCellRenderer}></AgGridColumn>
          <AgGridColumn width='150' minWidth='100' maxWidth='250' field="logo" suppressSizeToFit='false' headerName="Launch" field="launchDt" cellRenderer={this.launchCellRenderer}></AgGridColumn>
          <AgGridColumn width='300' minWidth='250' maxWidth='350' field="logo" suppressSizeToFit='false' field="vote" cellRenderer={this.voteCellRenderer} ></AgGridColumn>
        </AgGridReact>
      </div>
    );
  }
};