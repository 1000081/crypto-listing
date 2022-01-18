import React, { Component } from "react";
import { populateCoinDetails } from '../action'
import { connect } from 'react-redux';


class NameCellRenderer extends Component {
  constructor(props) {
    super(props);
    this.btnClickedHandler = this.btnClickedHandler.bind(this);

    this.state = {
      redirct : {
        url: '',
        status: false
      }
    }
  }

  btnClickedHandler() {
    let vote = { 
                vote: this.props.data.vote + 1
                }
   // this.props.updateCoin(vote, this.props.data._id);
  let redirectStatus= {
    url: '/coinDetails',
    status: true
  }
 // this.setState({redirct: redirectStatus});
 let detailsPayload = {
   payload: this.props.data,
   path: '/coinDetails',
   status: true,
   detailStatus: true
 }
 this.props.populateCoinDetails(detailsPayload);
  
  }
  
  render() {
    return <a href="#" onClick={this.btnClickedHandler}>{this.props.value}</a>;
  }
}

const mapDispatchToProps = { populateCoinDetails };

export default connect(
  null,
  mapDispatchToProps,
)(NameCellRenderer);
