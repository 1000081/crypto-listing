import React from 'react';
import { connect } from 'react-redux';
import { getPromotedCoins } from '../coin/action';


class AddCoin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };

    }

    render() {
        return (
            <div class="col-md-8">
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            &nbsp;
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            Coin Information
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Coin Name...." />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="symbol" aria-required>Symbol</label>
                            <input type="text" class="form-control" id="symbol" placeholder="BTC" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="logo">Logo</label>
                            <input type="file" class="form-control" id="logo" placeholder="../btc.jpg" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="chain">Network/Chain</label>
                            <select id="chain" class="form-control">
                                <option selected value='bsc'>Binance Smart Chain (BSC)</option>
                                <option value='rth'>Ethereum (ETH)</option>
                                <option value='matic'>Polygon (MATIC)</option>
                                <option value='trx'>Tron (TRX)</option>
                                <option value='ftm'>Fantom (FTM)</option>
                                <option value='sol'>Solana (SOL)</option>
                                <option value='kcc'>Kucoin Chain (KCC)</option>
                                <option value='other'>Other</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                    <div class="form-group col-md-6">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="presale" />
                                <label class="form-check-label" for="presale">
                                    &nbsp;Presale ?
                                </label>
                            </div>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="description" aria-required>Description</label>
                            <textarea class="form-control" id="description" placeholder="BTC" />
                        </div>
                    </div>
                    {/* <div class="form-row">
                        <div class="form-group col-md-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="presale" />
                                <label class="form-check-label" for="presale">
                                    &nbsp;Presale ?
                                </label>
                            </div>
                        </div>
                    </div> */}

                    <div class="form-row">
                        <div class="form-group col-md-12">
                            Contract Details
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="cAddress">Contract Address</label>
                            <input type="text" class="form-control" id="cAddress" placeholder="Coin Name...." />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="launchDt" aria-required>Launch Date</label>
                            <input type="text" class="form-control" id="launchDt" placeholder="BTC" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="marketCap">Market Cap</label>
                            <input type="text" class="form-control" id="marketCap" placeholder="Coin Name...." />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="price" aria-required>Price</label>
                            <input type="text" class="form-control" id="price" placeholder="BTC" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            Social Media
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="telegram">Telegram</label>
                            <input type="text" class="form-control" id="telegram" placeholder="Coin Name...." />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="Twitter" aria-required>Twitter</label>
                            <input type="text" class="form-control" id="Twitter" placeholder="BTC" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="reddit">Reddit</label>
                            <input type="text" class="form-control" id="reddit" placeholder="Coin Name...." />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="website" aria-required>Website</label>
                            <input type="text" class="form-control" id="website" placeholder="BTC" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label for="discord" aria-required>Discord</label>
                            <input type="text" class="form-control" id="discord" placeholder="BTC" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            Additional Information
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label for="otherChains" aria-required>Other Chains</label>
                            <input type="text" class="form-control" id="otherChains" placeholder="BTC" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label for="dexToools" aria-required>Dextools link</label>
                            <input type="text" class="form-control" id="dexToools" placeholder="BTC" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label for="swap" aria-required>Swap link</label>
                            <input type="text" class="form-control" id="swap" placeholder="BTC" />
                        </div>
                    </div>
                     <div class="form-row">
                        <div class="form-group col-md-12">
                            <button type="submit" class="btn btn-primary">Submit Coin</button>
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

const mapDispatchToProps = { getPromotedCoins };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddCoin);