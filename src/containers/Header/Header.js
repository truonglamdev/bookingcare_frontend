/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import * as actions from '../../store/actions';
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';
import { LANGUAGES } from '../../utils/constant';

import images from '../../assets/images';
import Menu from '../../components/Popper/Menu/Menu';
import Image from '../../components/Image/Image';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: images.flagVn,
        };
    }

    render() {
        const languages = [
            {
                title: 'English',
                id: LANGUAGES.EN,
                key: 'EN',
                image: images.flagEn,
            },
            {
                title: 'Việt Nam',
                id: LANGUAGES.VI,
                key: 'VN',
                image: images.flagVn,
            },
            // {
            //     title: 'Japan',
            //     id: 'jb',
            //     image: images.flagJp,
            // },
            // {
            //     title: 'China',
            //     id: 'cn',
            //     image: images.flagCn,
            // },
        ];

        const getLanguage = (data) => {
            this.setState({
                language: data.image,
            });
        };
        const { processLogout, userInfo } = this.props;

        console.log('check user info', userInfo);
        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>

                {/* nút logout */}
                <div className="header-actions-container">
                    <div className="languages">
                        <span className="welcome">
                            <FormattedMessage id="home-header.welcome" />
                            {userInfo && userInfo.firstName ? userInfo.firstName : ''}
                        </span>
                        <Menu languages={languages} getLanguage={getLanguage}>
                            <div className="language-flag">
                                <Image src={this.state.language} alt="" />
                            </div>
                        </Menu>
                    </div>
                    <div className="btn btn-logout" onClick={processLogout}>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
