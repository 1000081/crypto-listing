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
        this.props.addCoins(this.state);
        this.props.history.push('/');
    };

    handleOnChange(e) {

        this.setState({ [e.currentTarget.id]: e.currentTarget.value });

    };

    render() {

        return (
            <form className="p-3 mb-2 bg-transparent  text-white">
                <br />
                <div className="row">
                    <div className="form-group col-md-10 fs-4">
                        Coin Information
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="name">Name</label>
                        <input type="text"
                            className="form-control border border-info"
                            id="name"
                            placeholder="Coin Name...."
                            onChange={this.handleOnChange}
                            ref="name"
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="symbol" aria-required>Symbol</label>
                        <input type="text" className="form-control border border-info" id="symbol" placeholder="BTC" onChange={this.handleOnChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="logo">Logo</label>
                        <input type="file" className="form-control border border-info" id="logo" placeholder="../btc.jpg"
                            onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group col-md-6">
                        <label className='fw-bolder' htmlFor="chain">Network/Chain</label>
                        <select id="chain" className="form-control border border-info" onChange={this.handleOnChange} defaultValue={'select'}>
                            <option selected value='BSC'>Binance Smart Chain (BSC)</option>
                            <option value='ETH'>Ethereum (ETH)</option>
                            <option value='MATIC'>Polygon (MATIC)</option>
                            <option value='TRX'>Tron (TRX)</option>
                            <option value='FTM'>Fantom (FTM)</option>
                            <option value='SOL'>Solana (SOL)</option>
                            <option value='KCC'>Kucoin Chain (KCC)</option>
                            <option value='OTHER'>Other</option>
                            <option value='select'>Select</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-6">
                            <input className="form-check-input" type="checkbox" id="presale" onChange={this.handleOnChange} />
                            <label className="form-check-label" htmlFor="presale"> &nbsp;Presale?</label>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="coinType">Coin Type</label>
                        <select id="coinType" className="form-control border border-info" onChange={this.handleOnChange} defaultValue={'select'}>
                            <option selected value='P'>Promoted</option>
                            <option value='ATB'>All Time Dest</option>
                            <option value='NOR'>Normal</option>
                            <option value='PRE'>Presale</option>
                            <option value='NEW'>New</option>
                            <option value='select'>Select</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-12">
                        <label htmlFor="description" aria-required>Description</label>
                        <textarea
                            className="form-control border border-info"
                            id="description"
                            placeholder="BTC"
                            onChange={this.handleOnChange} rows={5}
                            cols={12} />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="form-group col-md-12 fs-4">
                        Contract Details
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="contAddress">Contract Address</label>
                        <input type="text" className="form-control border border-info" id="contAddress" placeholder="Coin Name...." onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="launchDt" aria-required>Launch Date</label>
                        <input type="text" className="form-control border border-info" id="launchDt" placeholder="BTC" onChange={this.handleOnChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="marketCap">Market Cap</label>
                        <input type="text" className="form-control border border-info" id="marketCap" placeholder="Coin Name...." onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="price" aria-required>Price</label>
                        <input type="text" className="form-control border border-info" id="price" placeholder="BTC" onChange={this.handleOnChange} />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="form-group col-md-12 fs-4">
                        Social Media
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="telegram">Telegram</label>
                        <input type="text" className="form-control border border-info" id="telegram" placeholder="Coin Name...." onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="twitter" aria-required>Twitter</label>
                        <input type="text" className="form-control border border-info" id="twitter" placeholder="BTC" onChange={this.handleOnChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="reddit">Reddit</label>
                        <input type="text" className="form-control border border-info" id="reddit" placeholder="Coin Name...." onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="website" aria-required>Website</label>
                        <input type="text" className="form-control border border-info" id="website" placeholder="BTC" onChange={this.handleOnChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-12">
                        <label htmlFor="discord" aria-required>Discord</label>
                        <input type="text" className="form-control border border-info" id="discord" placeholder="BTC" onChange={this.handleOnChange} />
                    </div>
                </div>
                <br />

                <div className="row">
                    <div className="form-group col-md-12 fs-4">
                        Additional Information
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="form-group col-md-12">
                        <label htmlFor="otherChains" aria-required>Other Chains</label>
                        <input type="text" className="form-control border border-info" id="otherChains" placeholder="BTC" onChange={this.handleOnChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-12">
                        <label htmlFor="dexToools" aria-required>Dextools link</label>
                        <input type="text" className="form-control border border-info" id="dexToools" placeholder="BTC" onChange={this.handleOnChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-12">
                        <label htmlFor="swap" aria-required>Swap link</label>
                        <input type="text" className="form-control border border-info" id="swap" placeholder="BTC" onChange={this.handleOnChange} />
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="form-group col-md-12">
                        <button type="button" className="btn btn-primary" onClick={this.handleOnSubmitCoin}>Submit Coin</button>
                    </div>
                </div>

            </form>
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