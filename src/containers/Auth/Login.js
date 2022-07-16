/* eslint-disable no-undef */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import * as actions from '../../store/actions';

import './Login.scss';
import { FormattedMessage } from 'react-intl';

class Login extends Component {
    constructor(props) {
        super(props);
        this.btnLogin = React.createRef();
        this.state = {
            username: '',
            password: '',
            showPassword: false,
        };
    }

    handleOnChangeUsername = (e) => {
        this.setState({
            username: e.target.value,
        });
    };

    handleOnChangePassword = (e) => {
        this.setState({
            password: e.target.value,
        });
    };

    handleOnClickSubmit = () => {
        alert('submit successfully');
    };

    handleShowHidePassword = () => {
        this.setState({
            showPassword: !this.state.showPassword,
        });
    };

    render() {
        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12 text-login">Login</div>
                        <div className="col-12 form-group login-input">
                            <label>User name:</label>
                            <input
                                type="text"
                                value={this.state.username}
                                onChange={(e) => this.handleOnChangeUsername(e)}
                                className="form-control"
                                placeholder="Enter your username"
                            />
                        </div>
                        <div className="col-12 form-group login-input">
                            <label>Password:</label>
                            <div className="custom-input-password">
                                <input
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    value={this.state.password}
                                    onChange={(e) => this.handleOnChangePassword(e)}
                                    className="form-control password"
                                    placeholder="Enter your password"
                                />
                                <span onClick={this.handleShowHidePassword} className="eye-hide-password">
                                    {this.state.showPassword ? (
                                        <i className="far fa-eye"></i>
                                    ) : (
                                        <i className="far fa-eye-slash"></i>
                                    )}
                                </span>
                            </div>
                        </div>

                        <div className="col-12 form-group login-btn">
                            <button type="submit" onClick={this.handleOnClickSubmit}>
                                Login
                            </button>
                        </div>
                        <div className="col-12 forgot-password">
                            <span className="">Forgot your password?</span>
                        </div>
                        <div className="col-12 login-with">
                            <span>Or login with:</span>
                        </div>
                        <div className="col-12 social-login">
                            <i className="fab fa-google-plus-g google-icon "></i>
                            <i className="fab fa-facebook-f facebook-icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
