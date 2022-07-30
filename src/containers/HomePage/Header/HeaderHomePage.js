import './HeaderHomePage.scss';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { connect } from 'react-redux';
import { LANGUAGES } from '../../../utils/constant';

import Image from '../../../components/Image/Image';
import images from '../../../assets/images';
import Menu from '../../../components/Popper/Menu/Menu';

function HeaderHomePage() {
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
    const [language, setLanguage] = useState(images.flagVn);

    const getLanguage = (data) => {
        setLanguage(data.image);
    };
    return (
        <div className="home-header-container">
            <div className="home-header-content">
                <div className="home-header-logo">
                    <div className="header-menu">
                        <i className="fas fa-bars"></i>
                    </div>
                    <a href="/home" className="header-logo">
                        <Image className="logo-img" src={images.logo} alt="logo" />
                    </a>
                </div>
                <div className="home-header-options">
                    <ul className="header-options-list">
                        <li className="header-options-item">
                            <h3 className="option-title">
                                <FormattedMessage id="home-header.specialty" />
                            </h3>
                            <span className="option-description">
                                <FormattedMessage id="home-header.search-doctor" />
                            </span>
                        </li>
                        <li className="header-options-item">
                            <h3 className="option-title">
                                <FormattedMessage id="home-header.facility" />
                            </h3>
                            <span className="option-description">
                                <FormattedMessage id="home-header.choose-room" />
                            </span>
                        </li>
                        <li className="header-options-item">
                            <h3 className="option-title">
                                <FormattedMessage id="home-header.doctor" />
                            </h3>
                            <span className="option-description">
                                <FormattedMessage id="home-header.choose-doctor" />
                            </span>
                        </li>
                        <li className="header-options-item">
                            <h3 className="option-title">
                                <FormattedMessage id="home-header.examination-package" />
                            </h3>
                            <span className="option-description">
                                <FormattedMessage id="home-header.check-health" />
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="home-header-actions">
                    <div className="support">
                        <div className="support-icon">
                            <i className="fas fa-question"></i>
                        </div>
                        <div className="support-title">
                            <FormattedMessage id="home-header.support" />
                        </div>
                    </div>
                    <div className="languages">
                        <Menu languages={languages} getLanguage={getLanguage}>
                            <div className="language-flag">
                                <Image src={language} />
                            </div>
                        </Menu>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {};
};

// export default HeaderHomePage;
export default connect(mapStateToProps, mapDispatchToProps)(HeaderHomePage);
