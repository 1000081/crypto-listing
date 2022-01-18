import React from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import config from '../config.json';


class Login extends React.Component {
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
        console.log('error------------' + JSON.stringify(error));
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
            <div className="authentication-bg min-vh-100">
                <div className="bg-overlay bg-white"></div>
                <div className="container">
                    <div className="d-flex flex-column min-vh-100 px-3 pt-4">
                        <div className="row justify-content-center my-auto">

                            <div className="col-md-8 col-lg-6 col-xl-4 border">
                                <div className="text-center  py-5 border">
                                    <div className="mb-4 mb-md-5">
                                        <a href="index.html" className="d-block auth-logo">
                                            <img src="assets/images/logo-dark.png" alt="" height="22" className="auth-logo-dark" />
                                            <img src="assets/images/logo-light.png" alt="" height="22" className="auth-logo-light" />
                                        </a>
                                    </div>
                                    <div className="mb-4 border">&nbsp;</div>
                                    <div className="mb-4 border">&nbsp;</div>
                                    <div className="mb-4 border">
                                    <FacebookLogin
                                        appId={config.FACEBOOK_APP_ID}
                                        autoLoad={false}
                                        fields="name,email,picture"
                                        callback={this.facebookResponse} 
                                        />
                                 </div>
                                 <div className="mb-4 border">
                                    <GoogleLogin
                                        clientId={config.GOOGLE_CLIENT_ID}
                                        buttonText="Login"
                                        onSuccess={this.googleResponse}
                                        onFailure={this.onFailure}
                                    />
                                     </div>
                                </div>
                            </div>

                            <div className="col-md-8 col-lg-6 col-xl-4">
                                <div className="text-center  py-5">
                                    <div className="mb-4 mb-md-5">
                                        <a href="index.html" className="d-block auth-logo">
                                            <img src="assets/images/logo-dark.png" alt="" height="22" className="auth-logo-dark" />
                                            <img src="assets/images/logo-light.png" alt="" height="22" className="auth-logo-light" />
                                        </a>
                                    </div>
                                    <div className="mb-4">
                                        <h5>Welcome Back !</h5>
                                        <p>Sign in to continue to Dashonic.</p>
                                    </div>
                                    <form>
                                        <div className="form-floating form-floating-custom mb-3">
                                            <input type="text" className="form-control" id="input-username" placeholder="Enter User Name" />
                                            <label for="input-username">Username</label>
                                            <div className="form-floating-icon">
                                                <i className="uil uil-users-alt"></i>
                                            </div>
                                        </div>
                                        <div className="form-floating form-floating-custom mb-3">
                                            <input type="password" className="form-control" id="input-password" placeholder="Enter Password" />
                                            <label for="input-password">Password</label>
                                            <div className="form-floating-icon">
                                                <i className="uil uil-padlock"></i>
                                            </div>
                                        </div>

                                        <div className="form-check form-check-info font-size-16">
                                            <input className="form-check-input" type="checkbox" id="remember-check" />
                                            <label className="form-check-label font-size-14" for="remember-check">
                                                Remember me
                                            </label>
                                        </div>

                                        <div className="mt-3">
                                            <button className="btn btn-info w-100" type="submit">Log In</button>
                                        </div>

                                        <div className="mt-4">
                                            <a href="auth-resetpassword-basic.html" className="text-muted text-decoration-underline">Forgot your password?</a>
                                        </div>
                                    </form>

                                    <div className="mt-5 text-center text-muted">
                                        <p>Don't have an account ? <a href="auth-signup-basic.html" className="fw-medium text-decoration-underline"> Signup </a></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-12">
                                <div className="text-center text-muted p-4">
                                    <p className="mb-0">&copy; <script>document.write(new Date().getFullYear())</script> Dashonic. Crafted with <i className="mdi mdi-heart text-danger"></i> by Pichforest</p>
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
)(Login);
