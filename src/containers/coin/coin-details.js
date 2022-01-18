import React from 'react';
import { connect } from 'react-redux';
import "gridjs/dist/theme/mermaid.css";
import { CopyToClipboard } from 'react-copy-to-clipboard';

class CoinDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddCoin: false,
            value: '',
            copied: false,
            coinDetails : {}
        }
    }

    componentDidMount () {
     
        if(this.props.coinDetails) {
        localStorage.setItem('coinDetails', JSON.stringify(this.props.coinDetails));
        this.setState({coinDetails: this.props.coinDetails});
        } else {
            this.setState({coinDetails: JSON.parse(localStorage.getItem('coinDetails'))});
        }
        console.log();
    
    }

    componentDidUpdate (prevProps, prevState) {
        console.log();
    }

    render() {

        

        console.log('props--------------'+this);
        console.log('props--------------'+this.props);
        console.log('props--------------'+this.state);
        return (
            <div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-body">
                                ADS
                                <br />
                                {/* <CoinAgGrid data={this.props.promotedCoins} columnDefs={this.state.colDefs} frameworkComponents={this.state.frameworkComponents} /> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-9">
                        <div class="card">
                            <div class="card-body">
                                <div className="d-flex border">
                                    <div className="flex-shrink-0 border">
                                        <img className="img-thumbnail" height={150} width={150} src="img/ethereum-eth-logo.png" />
                                    </div>
                                    <div className="flex-grow-1 ms-3 border">
                                        <h1>{this.state.coinDetails && this.state.coinDetails.name}</h1>
                                        <h4>BSC Contract Address: {this.state.coinDetails && this.state.coinDetails && this.state.coinDetails.contAddress}</h4>
                                        <CopyToClipboard text={this.state.coinDetails && this.state.coinDetails.contAddress}
                                            onCopy={() => this.setState({ copied: true })}>
                                            <button><i class="fas fa-copy"></i></button>
                                        </CopyToClipboard>

                                        {this.state.copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
                                    </div>
                                </div>
                                <div className="d-flex border">
                                    <div className="flex-grow-1 ms-3 border">
                                        {this.state.coinDetails && this.state.coinDetails.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                            <div class="card-body">
                                <div className="d-flex border"><h6>Popularity</h6></div>
                                <div className="d-flex border"> Watchlists 658</div>
                                <div className="d-flex border"><h6>Token Value</h6></div>
                                <div className="d-flex border">Marketcap  {this.state.coinDetails && this.state.coinDetails.marketCap}</div>
                                <div className="d-flex border">Price (USD) {this.state.coinDetails && this.state.coinDetails.price}</div>
                                <div className="d-flex border">Price (BNB) {this.state.coinDetails && this.state.coinDetails.price}</div>
                                <div className="d-flex border"><h5>Social Links</h5></div>
                                <div className="d-flex border">
                                    <a href='https://google.com' target="_blank"><h5><span class="badge bg-secondary">Visit Website</span></h5></a>
                                </div>
                                <div className="d-flex border">
                                    <a href={this.state.telegram}><h5><span class="badge bg-secondary">Join Telegram</span></h5></a>
                                </div>
                                <div className="d-flex border">
                                    <a href={this.state.twitter}><h5><span class="badge bg-secondary">Follow Twitter</span></h5></a>
                                </div>
                                <div className="d-flex border">
                                    <a href={this.state.discord}><h5><span class="badge bg-secondary">Join Discord</span></h5></a>
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
    coinDetails: state.coinReducer.payload && state.coinReducer.payload.payload
});

const mapDispatchToProps = { };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CoinDetails);
