import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderHomePage from './Header/HeaderHomePage';

import Banner from './Banner/Banner';
import Action from './Actions';
import Footer from './Footer/Footer';

import styles from './HomePage.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
class HomePage extends Component {
    render() {
        return (
            <div className={cx('wrapper')}>
                <HeaderHomePage />
                <Banner />
                <Action />
                <Footer />
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
