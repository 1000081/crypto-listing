import React from 'react';
import { connect } from 'react-redux';
import { addCoins } from '../coin/action';


class AddCoin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            name: '',
            logo: '',
            chain: 'BSC',
            presale: '',
            coinType: 'NEW',
            description: '',
            contAddress: '',
            launchDt: '',
            marketCap: '',
            price: '',
            telegram: '',
            twitter: '',
            reddit: '',
            discord: '',
            otherChains: '',
            dexToools: '',
            swap: '',
            vote: 0,
            symbol: ''
        };

        this.handleOnSubmitCoin = this.handleOnSubmitCoin.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    };

    
    handleOnSubmitCoin(e) {
        
        console.log('Current State-name--------->>'+this.state.name);
        console.log('Current State---------->>'+JSON.stringify(this.state));
        console.log('Current State---------->>'+this.state.logo);
        this.props.addCoins(this.state);
        this.props.history.push('/');
    };

    handleOnChange(e) {
         if(e.currentTarget.id === 'name') { this.setState({ name: e.currentTarget.value }); } else 
         if(e.currentTarget.id === 'logo') { this.setState({ logo: e.currentTarget.value }); } else 
         if(e.currentTarget.id === 'chain') { this.setState({ chain: e.currentTarget.value }); } else 
         if(e.currentTarget.id === 'presale') { this.setState({ presale: e.currentTarget.value }); } else 
         if(e.currentTarget.id === 'coinType') { this.setState({ coinType: e.currentTarget.value }); } else 
         if(e.currentTarget.id === 'description') { this.setState({ description: e.currentTarget.value }); } else 
         if(e.currentTarget.id === 'contAddress') { this.setState({ contAddress: e.currentTarget.value }); } else 
         if(e.currentTarget.id === 'launchDt') { this.setState({ launchDt: e.currentTarget.value }); } else 
         if(e.currentTarget.id === 'marketCap') { this.setState({ marketCap: e.currentTarget.value }); } else 
         if(e.currentTarget.id === 'price') { this.setState({ price: e.currentTarget.value }); } else 
         if(e.currentTarget.id === 'telegram') { this.setState({ telegram: e.currentTarget.value }); } else 
         if(e.currentTarget.id === 'twitter') { this.setState({ twitter: e.currentTarget.value }); } else 
         if(e.currentTarget.id === 'reddit') { this.setState({ reddit: e.currentTarget.value }); } else 
         if(e.currentTarget.id === 'discord') { this.setState({ discord: e.currentTarget.value }); } else 
         if(e.currentTarget.id === 'otherChains') { this.setState({ otherChains: e.currentTarget.value }); } else 
         if(e.currentTarget.id === 'dexToools') { this.setState({ dexToools: e.currentTarget.value }); } else 
         if(e.currentTarget.id === 'swap') { this.setState({ swap: e.currentTarget.value }); } else
         if(e.currentTarget.id === 'vote') { this.setState({ swap: e.currentTarget.value }); } else
         if(e.currentTarget.id === 'symbol') { this.setState({ swap: e.currentTarget.value }); }
         
      };

      render() {

        return (
            <div className="col-md-8">
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            &nbsp;
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            Coin Information
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="name">Name</label>
                            <input type="text" 
                            className="form-control" 
                            id="name" 
                            placeholder="Coin Name...."  
                            onChange={this.handleOnChange}
                            ref="name"
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="symbol" aria-required>Symbol</label>
                            <input type="text" className="form-control" id="symbol" placeholder="BTC"  onChange={this.handleOnChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="logo">Logo</label>
                            <input type="file" className="form-control" id="logo" placeholder="../btc.jpg" 
                            onChange={this.handleOnChange}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="chain">Network/Chain</label>
                            <select id="chain" className="form-control"   onChange={this.handleOnChange} >
                                <option selected value='BSC'>Binance Smart Chain (BSC)</option>
                                <option value='ETH'>Ethereum (ETH)</option>
                                <option value='MATIC'>Polygon (MATIC)</option>
                                <option value='TRX'>Tron (TRX)</option>
                                <option value='FTM'>Fantom (FTM)</option>
                                <option value='SOL'>Solana (SOL)</option>
                                <option value='KCC'>Kucoin Chain (KCC)</option>
                                <option value='OTHER'>Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="presale"   onChange={this.handleOnChange} />
                                <label className="form-check-label" htmlFor="presale">
                                    &nbsp;Presale ?
                                </label>
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="coinType">Coin Type</label>
                            <select id="coinType" className="form-control"   onChange={this.handleOnChange} >
                                <option selected value='P'>Promoted</option>
                                <option value='ATB'>All Time Dest</option>
                                <option value='NOR'>Normal</option>
                                <option value='PRE'>Presale</option>
                                <option value='NEW'>New</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="description" aria-required>Description</label>
                            <textarea className="form-control" id="description" placeholder="BTC"   onChange={this.handleOnChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            Contract Details
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="contAddress">Contract Address</label>
                            <input type="text" className="form-control" id="contAddress" placeholder="Coin Name...."   onChange={this.handleOnChange}  />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="launchDt" aria-required>Launch Date</label>
                            <input type="text" className="form-control" id="launchDt" placeholder="BTC"  onChange={this.handleOnChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="marketCap">Market Cap</label>
                            <input type="text" className="form-control" id="marketCap" placeholder="Coin Name...."  onChange={this.handleOnChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="price" aria-required>Price</label>
                            <input type="text" className="form-control" id="price" placeholder="BTC"  onChange={this.handleOnChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            Social Media
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="telegram">Telegram</label>
                            <input type="text" className="form-control" id="telegram" placeholder="Coin Name...."  onChange={this.handleOnChange}  />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="twitter" aria-required>Twitter</label>
                            <input type="text" className="form-control" id="twitter" placeholder="BTC"  onChange={this.handleOnChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="reddit">Reddit</label>
                            <input type="text" className="form-control" id="reddit" placeholder="Coin Name...."  onChange={this.handleOnChange}  />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="website" aria-required>Website</label>
                            <input type="text" className="form-control" id="website" placeholder="BTC" onChange={this.handleOnChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="discord" aria-required>Discord</label>
                            <input type="text" className="form-control" id="discord" placeholder="BTC" onChange={this.handleOnChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            Additional Information
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="otherChains" aria-required>Other Chains</label>
                            <input type="text" className="form-control" id="otherChains" placeholder="BTC"  onChange={this.handleOnChange}  />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="dexToools" aria-required>Dextools link</label>
                            <input type="text" className="form-control" id="dexToools" placeholder="BTC"  onChange={this.handleOnChange}  />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="swap" aria-required>Swap link</label>
                            <input type="text" className="form-control" id="swap" placeholder="BTC"   onChange={this.handleOnChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <button type="button" className="btn btn-primary" onClick={this.handleOnSubmitCoin}>Submit Coin</button>
                        </div>
                    </div>

                </form>

            </div>
        )
    };
};

const mapStateToProps = state => ({
    coin: []
});

const mapDispatchToProps = { addCoins };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddCoin);