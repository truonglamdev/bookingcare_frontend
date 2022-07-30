import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderHomePage from './Header/HeaderHomePage';
import Banner from './Banner/Banner';
import Diagnostic from './Actions/Diagnostic';

class HomePage extends Component {
    render() {
        return (
            <div style={{ minHeight: '1000px', overflowY: 'auto' }}>
                <HeaderHomePage />
                <Banner />
                <Diagnostic />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
