import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import {  } from 'bootstrap';

import * as actions from '../../store/actions';

import './Login.scss';
import { FormattedMessage } from 'react-intl';

class Login extends Component {
    constructor(props) {
        super(props);
        this.btnLogin = React.createRef();
    }

    render() {
        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12 text-login">Login</div>
                        <div className="col-12 form-group login-input">
                            <label>User name:</label>
                            <input type="text" className="form-control" placeholder="Enter your username" />
                        </div>
                        <div className="col-12 form-group login-input">
                            <label>Password:</label>
                            <input type="password" className="form-control" placeholder="Enter your password" />
                        </div>
                        <div className="col-12 form-group login-btn">
                            <button type="submit">Login</button>
                        </div>
                        <div className="col-12 forgot-password">
                            <span className="">Forgot your password?</span>
                        </div>
                        <div className="col-12 login-with">
                            <span>Or login with:</span>
                        </div>
                        <div className="col-12">
                            
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
