import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


export default class CoinAgGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }

  render() {
    return (
        <div className="ag-theme-alpine bg-dark">
        <AgGridReact
          domLayout={'autoHeight'}
          rowData={this.props.data} 
          columnDefs={this.props.columnDefs}
          frameworkComponents={this.props.frameworkComponents}
          >
        </AgGridReact>
      </div>
    );
  }
};