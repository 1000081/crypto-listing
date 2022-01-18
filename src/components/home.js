import React from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import config from '../config.json';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddCoin: false,
            value: '',
            copied: false,
            userDetails: {
                name: 'Srinivasan Maharajan',
                email: 'srinivasan.maha@gmail.com',
                userType: 'ADMIN'
            },
            isAuthenticated: false,
            user: null,
            token: ''
        }

        this.googleResponse = this.googleResponse.bind(this);
    }

    logout() {
        this.setState({ isAuthenticated: false, token: '', user: null })
    };

    onFailure(error) {
       console.log('error------------'+JSON.stringify(error));
    };

    facebookResponse(response) {
        const tokenBlob = new Blob([JSON.stringify({ access_token: response.accessToken }, null, 2)], { type: 'application/json' });
        const options = {
            method: 'POST',
            body: tokenBlob,
            mode: 'cors',
            cache: 'default'
        };
        fetch('http://localhost:8010/proxy/auth/facebook', options).then(r => {
            const token = r.headers.get('x-auth-token');
            r.json().then(user => {
                if (token) {
                    this.setState({ isAuthenticated: true, user, token })
                }
            });
        })
    };

    googleResponse(response) {
        const tokenBlob = new Blob([JSON.stringify({ access_token: response.accessToken }, null, 2)], { type: 'application/json' });
        const options = {
            method: 'POST',
            body: tokenBlob,
            mode: 'cors',
            cache: 'default'
        };
        fetch('http://localhost:8010/proxy/auth/google', options).then(r => {
            const token = r.headers.get('x-auth-token');
            r.json().then(user => {
                if (token) {
                    this.setState({ isAuthenticated: true, user, token })
                }
            });
        })
    };

    componentDidMount() {

        // if(this.props.coinDetails) {
        // localStorage.setItem('coinDetails', JSON.stringify(this.props.coinDetails));
        // this.setState({coinDetails: this.props.coinDetails});
        // } else {
        //     this.setState({coinDetails: JSON.parse(localStorage.getItem('coinDetails'))});
        // }
        console.log();

    }

    componentDidUpdate(prevProps, prevState) {
        //console.log();
    }

    render() {
        if (this.state.userDetails && this.state.userDetails.userType == 'USER') {
            this.props.history.push('/coinList');
        }

        let content = !!this.state.isAuthenticated ?
            (
                <div>
                    <p>Authenticated</p>
                    <div>
                        {this.state.user.email}
                    </div>
                    <div>
                        <button onClick={this.logout} className="button">
                            Log out
                        </button>
                    </div>
                </div>
            ) :
            (
                <div>
                    {/* <TwitterLogin loginUrl="http://localhost:5000/api/v1/auth/twitter"
                                   onFailure={this.onFailure} onSuccess={this.twitterResponse}
                                   requestTokenUrl="http://localhost:5000/api/v1/auth/twitter/reverse"/> */}
                    <FacebookLogin
                        appId={config.FACEBOOK_APP_ID}
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={this.facebookResponse} />
                    <GoogleLogin
                        clientId={config.GOOGLE_CLIENT_ID}
                        buttonText="Login"
                        onSuccess={this.googleResponse}
                        onFailure={this.onFailure}
                    />
                </div>
            );

        return (
            <div>
                {content}
                <div className="row">
                    <div className="col-sm-20">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-bs-toggle="tab" href="#approve">Yet to approve</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#approved">Approved</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#rejected">Rejected</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#promoted">Promoted</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#normal">Normal</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#presale">Presale</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="approve" className="container tab-pane active"><br />
                                        {/* <CoinAgGrid data={this.props.newCoins} columnDefs={this.state.colDefs} frameworkComponents={this.state.frameworkComponents} /> */}
                                    </div>
                                    <div id="approved" className="container tab-pane fade"><br />
                                        {/* <CoinAgGrid data={this.props.allTimeBestCoins} columnDefs={this.state.colDefs} frameworkComponents={this.state.frameworkComponents} /> */}
                                    </div>
                                    <div id="rejected" className="container tab-pane fade"><br />
                                        {/* <CoinAgGrid data={this.props.normalCoins} columnDefs={this.state.colDefs} frameworkComponents={this.state.frameworkComponents} /> */}
                                    </div>
                                    <div id="promoted" className="container tab-pane fade"><br />
                                        {/* <CoinAgGrid data={this.props.preSaleCoins} columnDefs={this.state.colDefs} frameworkComponents={this.state.frameworkComponents} /> */}
                                    </div>
                                    <div id="normal" className="container tab-pane fade"><br />
                                        {/* <CoinAgGrid data={this.props.preSaleCoins} columnDefs={this.state.colDefs} frameworkComponents={this.state.frameworkComponents} /> */}
                                    </div>
                                    <div id="presale" className="container tab-pane fade"><br />
                                        {/* <CoinAgGrid data={this.props.preSaleCoins} columnDefs={this.state.colDefs} frameworkComponents={this.state.frameworkComponents} /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

};

const mapStateToProps = state => ({
    coinDetails: {}
});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);
