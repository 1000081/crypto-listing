import React from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getPromotedCoins, updateCoin } from '../coin/action';
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import Multiselect from 'multiselect-react-dropdown';

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
                logo: false,
                chain: false,
                presale: false,
                presaleLink: false,
                contAddress: false,
                description: false,
                customChat: false,
                website: false,
                launchDt: false,
                telegram: false,
                twitter: false,
                discord: false,
            },
            items: [],
            oldCoinData: {},
            options: [
                {name: 'Logo', id: 1, value: 'logo'},
                {name: 'Network', id: 2, value: 'chain'},
                {name: 'Pre Sale', id: 3, value: 'presale'},
                {name: 'Pre Sale Link', id: 3, value: 'presalelink'},
                {name: 'Contract Address', id: 3, value: 'contAddress'},
                {name: 'Description', id: 3, value: 'description'},
                {name: 'Custom Chat', id: 3, value: 'customChat'},
                {name: 'Website Link', id: 3, value: 'website'},
                {name: 'Launch Date', id: 3, value: 'launchDt'},
                {name: 'Telegram Link', id: 3, value: 'telegram'},
                {name: 'Twitter Link', id: 3, value: 'twitter'},
                {name: 'Discord Link', id: 3, value: 'discord'}
            ],
            selectedList: []
        };

        this.handleOnSubmitCoin = this.handleOnSubmitCoin.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSearch = this.handleOnSearch.bind(this);
        this.handleOnHover = this.handleOnHover.bind(this);
        this.handleOnSelect = this.handleOnSelect.bind(this);
        this.handleOnFocus = this.handleOnFocus.bind(this);
        this.handleOnClear = this.handleOnClear.bind(this);

        this.handleOnFieldSelect = this.handleOnFieldSelect.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onRemove = this.onRemove.bind(this);
    };

    onSelect(selectedList, selectedItem) {
        if(Object.keys(this.state.oldCoinData).length == 0) { 
            alert('select coin name to update');
        } else {
        // tempArr.push('newvalue');
        console.log('selected List-------'+JSON.stringify(selectedList));
        console.log('selectedItem-------'+JSON.stringify(selectedItem));
        this.state.selectedList.push(selectedItem);
        console.log('after selected List-------'+JSON.stringify(selectedList));
        }
    }
    
    onRemove(selectedList, removedItem) {
        const newlist = [].concat(this.state.selectedList) // Clone array with concat or slice(0)
        newlist.splice(removedItem.index, 1);
        this.state.selectedList = newlist;
    }

    componentDidMount() {
        this.props.getPromotedCoins();
        //this.setState({ items: this.props.coinCollections });
        //this.state.options = this.props.coinCollections;
    };

    componentDidUpdate(prevProps, prevState) {
        const { visible } = this.state;
        if (prevState.visible !== visible) {
            //this.props.getPromotedCoins();
            console.log('udated');
        }
    }


    handleOnSubmitCoin(e) {
        let updatedCoin = this.state.coinData;
        this.props.updateCoin(updatedCoin, updatedCoin._id);
    };

    handleOnFieldSelect(e) {
        let selectedFields = this.state.selectedList;
        let updatedState = this.state;
        for (let i = 0; i < selectedFields.length; i++) {
            let selectedField =  selectedFields[i];
            let currentKey = selectedField.value;
            let oldValue = this.state.oldCoinData[currentKey];
            updatedState.visible[currentKey] = true;
            updatedState.coinData[currentKey] = oldValue;
            console.log('currentKey-------------'+currentKey);
            console.log('oldValue-------------'+oldValue);
          }
          this.setState(updatedState);
    };

    handleOnChange(e) {
        let currentKey = e.currentTarget.id;
        let currentValue = e.currentTarget.value;
        let updateState = this.state;
        updateState.coinData[currentKey] = currentValue;
        this.setState(updateState);
    };

    handleOnSearch(string, results) {
        console.log(string, results);
    };

    handleOnHover(result) {
        console.log(result);
    };

    handleOnSelect(item) {
        this.state.oldCoinData = item;
        this.state.coinData = item;
    };

    handleOnFocus() {
        console.log("Focused");
    };

    handleOnClear() {
        console.log("Cleared");
    };

    render() {
        if (this.props.payload && this.props.payload.status) {
            this.props.history.push('/');
        }
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
                                        <Multiselect
                                        options={this.state.options} 
                                        selectedValues={this.state.selectedValue}
                                        onSelect={this.onSelect}
                                        onRemove={this.onRemove} 
                                        displayValue="name"
                                    />
                                    </div>
                                    <br/>
                                    <button type="button" class="btn btn-primary" onClick={this.handleOnFieldSelect}><i class="fas fa-location-arrow"></i>&nbsp;Add Fields<span class="badge">{this.props.value}</span></button>
                                    <br/>
                                    
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
    coinCollections: state.coinReducer.coinCollections,
    payload: state.coinReducer.payload
});

const mapDispatchToProps = { getPromotedCoins, updateCoin };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UpdateCoin);