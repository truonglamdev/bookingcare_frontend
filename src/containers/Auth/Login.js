/* eslint-disable no-undef */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import * as actions from '../../store/actions';

import handleLoginApi from '../../services/userService';

import './Login.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.btnLogin = React.createRef();
        this.state = {
            username: '',
            password: '',
            showPassword: false,
            errMessage: '',
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

    handleOnClickSubmit = async () => {
        this.setState({
            errMessage: '',
        });

        try {
            const data = await handleLoginApi(this.state.username, this.state.password);
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message,
                });
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user);
                // console.log(this.props.userLoginSuccess(data.user));
            }
        } catch (e) {
            if (e.response) {
                if (e.response.data) {
                    this.setState({
                        errMessage: e.response.data.message,
                    });
                }
            }
        }
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

                        <div className="col-12 error-message">{this.state.errMessage}</div>
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
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
