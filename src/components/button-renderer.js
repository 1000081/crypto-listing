import React, { Component } from "react";
import { updateCoin } from '../containers/coin/action'
import { connect } from 'react-redux';


class BtnCellRenderer extends Component {
  constructor(props) {
    super(props);
    this.btnClickedHandler = this.btnClickedHandler.bind(this);

    this.state = {

    }
  }

  btnClickedHandler() {
    let vote = { 
                vote: this.props.data.vote + 1
                }
    this.props.updateCoin(vote, this.props.data._id);
  }
  
  render() {
    
    return <button type="button" class="btn btn-primary" onClick={this.btnClickedHandler}><i class="fas fa-location-arrow"></i>&nbsp;Vote <span class="badge">{this.props.value}</span></button>;
  }
}

const mapDispatchToProps = { updateCoin };

export default connect(
  null,
  mapDispatchToProps,
)(BtnCellRenderer);
