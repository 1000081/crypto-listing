import React from 'react';
import { connect } from 'react-redux';
// import { addCoins } from '../coin/action';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getPromotedCoins } from '../coin/action';
import { ReactSearchAutocomplete } from "react-search-autocomplete";


class UpdateCoin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            coinData: {
                name: '',
                logo: '',
                chain: 'BSC',
                presale: '',
                presaleLink: '',
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
                symbol: '',
                website: '',
                customChat: ''
            },
            visible: {
                logo: true,
                chain: true,
                presale: true,
                presaleLink: true,
                contAddress: true,
                description: true,
                customChat: true,
                website: true,
                launchDt: true,
                telegram: true,
                twitter: true,
                discord: true,
            },
            items: [],
            oldCoinData: {}

        };

        this.handleOnSubmitCoin = this.handleOnSubmitCoin.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSearch = this.handleOnSearch.bind(this);
        this.handleOnHover = this.handleOnHover.bind(this);
        this.handleOnSelect = this.handleOnSelect.bind(this);
        this.handleOnFocus = this.handleOnFocus.bind(this);
        this.handleOnClear = this.handleOnClear.bind(this);

    };

    componentDidMount() {
        this.props.getPromotedCoins();
        this.setState({ items: this.props.coinCollections })
    };


    handleOnSubmitCoin(e) {
        // this.props.addCoins(this.state);
        this.props.history.push('/');
    };

    handleOnChange(e) {
        // this.setState(
        //     {
        //         [e.currentTarget.value]: true,
        //         [e.currentTarget.value]: this.state.oldCoinData.[e.currentTarget.value]
        //     });
        console.log();
    };

    handleOnSearch(string, results) {
        console.log(string, results);
    };

    handleOnHover(result) {
        console.log(result);
    };

    handleOnSelect(item) {
        this.state.oldCoinData = item;
    };

    handleOnFocus() {
        console.log("Focused");
    };

    handleOnClear() {
        console.log("Cleared");
    };

    render() {
        return (
            <div className="col-md-12">
                <br></br>
                <form>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <br />
                                    ADS
                                    <br />
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
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
                    <div class="row">
                        <div class="col-sm-8">
                            <div class="card">
                                <div class="card-body">
                                    <br />
                                    <div className="form-group col-md-4">
                                        <label htmlFor="name">Coin Name</label>
                                        <ReactSearchAutocomplete
                                            items={this.props.coinCollections}
                                            onSearch={this.handleOnSearch}
                                            onHover={this.handleOnHover}
                                            onSelect={this.handleOnSelect}
                                            onFocus={this.handleOnFocus}
                                            onClear={this.handleOnClear}
                                            styling={{ zIndex: 2 }} // To display it on top of the search box below
                                            fuseOptions={{ keys: ["_id", "name", "description"] }}
                                            autoFocus
                                            styling={
                                                {
                                                    backgroundColor: "#032d46",
                                                    height: "40px",
                                                    iconColor: "#0dcaf0",
                                                    color: "white",
                                                    border: "1px solid #0dcaf0",
                                                    boxShadow: "rgba(32, 33, 36, 0.28) 0px 1px 6px 0px"
                                                }
                                            }
                                        />
                                    </div>

                                    <div className="form-group col-md-4">
                                        <label htmlFor="updateField">Update Field</label>
                                        <select id="updateField" className="form-control border border-info border border-info" onChange={this.handleOnChange} defaultValue={'select'}>
                                            <option value='logo'>Logo</option>
                                            <option value='chain'>Network</option>
                                            <option value='presale'>Pre Sale</option>
                                            <option value='presalelink'>Pre Sale Link</option>
                                            <option value='contAddress'>Contract Address</option>
                                            <option value='description'>Description</option>
                                            <option value='customChat'>Custom Chat Link</option>
                                            <option value='website'>Website Link</option>
                                            <option value='launchDt'>Launch Date</option>
                                            <option value='telegram'>Telegram Link</option>
                                            <option value='twitter'>Twitter Link</option>
                                            <option value='discord'>Discord Link</option>
                                            <option value='select'> Select Field</option>
                                        </select>
                                    </div>
                                    <br />
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
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
                    <div className="row">
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            &nbsp;
                        </div>
                    </div>
                    {this.state.visible.logo &&
                        <div className="row">
                            <div className="form-group col-md-6 ">
                                <label htmlFor="logo" aria-required>Logo</label>
                                <input type="file" className="form-control border border-info" id="logo" onChange={this.handleOnChange} />
                            </div>
                            <div className="form-group col-md-6">&nbsp;</div>
                        </div>
                    }

                    {this.state.visible.chain &&
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="chain">Network/Chain</label>
                                <select id="chain" className="form-control border border-info" onChange={this.handleOnChange} defaultValue={this.state.coinData.chain}>
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
                            <div className="form-group col-md-6">&nbsp;</div>
                            {/* <div class="input-group mb-3">
                                <input type="text" class="form-control border border-info" placeholder="Recipient's username" aria-label="Recipient's username"
                                    aria-describedby="button-addon2" />
                                <button class="btn btn-outline-primary" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                                    Button
                                </button>
                            </div> */}
                        </div>
                    }
                    {this.state.visible.presale &&
                        <div className="row">
                            <div className="form-group col-md-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="presale" onChange={this.handleOnChange} />
                                    <label className="form-check-label" htmlFor="presale">&nbsp;Presale ?</label>
                                </div>
                            </div>
                            <div className="form-group col-md-6">&nbsp;</div>
                        </div>
                    }
                    {this.state.visible.description &&
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="description" aria-required>Description</label>
                                <textarea
                                    className="form-control border border-info"
                                    id="description"
                                    placeholder="BTC"
                                    onChange={this.handleOnChange}
                                    rows={5}
                                    cols={5}
                                    value={this.state.coinData.description}
                                />
                            </div>
                            <div className="form-group col-md-6">&nbsp;</div>
                        </div>
                    }
                    {this.state.visible.contAddress &&
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="contAddress">Contract Address</label>
                                <input type="text"
                                    className="form-control border border-info"
                                    id="contAddress"
                                    placeholder="...."
                                    onChange={this.handleOnChange}
                                    value={this.state.coinData.contAddress}
                                />
                            </div>
                            <div className="form-group col-md-6">&nbsp;</div>
                        </div>
                    }
                    {this.state.visible.customChat &&
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="contAddress">Custom Chat</label>
                                <input type="text"
                                    className="form-control border border-info"
                                    id="contAddress"
                                    placeholder="Coin Name...."
                                    onChange={this.handleOnChange}
                                    value={this.state.coinData.contAddress}
                                />
                            </div>
                            <div className="form-group col-md-6">&nbsp;</div>
                        </div>
                    }
                    {this.state.visible.launchDt &&
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="launchDt" aria-required>Launch Date</label>
                                <input type="text"
                                    className="form-control border border-info"
                                    id="launchDt"
                                    placeholder="BTC"
                                    onChange={this.handleOnChange}
                                    value={this.state.coinData.launchDt}
                                />
                            </div>
                            <div className="form-group col-md-6">&nbsp;</div>
                        </div>
                    }
                    {this.state.visible.telegram &&
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="telegram">Telegram</label>
                                <input type="text"
                                    className="form-control border border-info"
                                    id="telegram"
                                    placeholder="Coin Name...."
                                    onChange={this.handleOnChange}
                                    value={this.state.coinData.telegram}
                                />
                            </div>
                            <div className="form-group col-md-6">&nbsp;</div>
                        </div>
                    }
                    {this.state.visible.twitter &&
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="twitter" aria-required>Twitter</label>
                                <input type="text"
                                    className="form-control border border-info"
                                    id="twitter"
                                    placeholder="BTC"
                                    onChange={this.handleOnChange}
                                    value={this.state.coinData.twitter}
                                />
                            </div>
                            <div className="form-group col-md-6">&nbsp;</div>
                        </div>
                    }
                    {this.state.visible.website &&
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="website" aria-required>Website</label>
                                <input type="text"
                                    className="form-control border border-info"
                                    id="website"
                                    placeholder="BTC"
                                    onChange={this.handleOnChange}
                                    value={this.state.coinData.website}
                                />
                            </div>
                            <div className="form-group col-md-6">&nbsp;</div>
                        </div>
                    }
                    {this.state.visible.discord &&
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="discord" aria-required>Discord</label>
                                <input type="text"
                                    className="form-control border border-info"
                                    id="discord"
                                    placeholder="BTC"
                                    onChange={this.handleOnChange}
                                    value={this.state.coinData.discord}
                                />
                            </div>
                            <div className="form-group col-md-6">&nbsp;</div>
                        </div>
                    }
                    <br></br>
                    <br></br>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <button type="button" className="btn btn-primary" onClick={this.handleOnSubmitCoin}>Update Coin</button>
                        </div>
                    </div>

                </form>

            </div>
        )
    };
};

const mapStateToProps = state => ({
    coinCollections: state.coinReducer.coinCollections
});

const mapDispatchToProps = { getPromotedCoins };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UpdateCoin);