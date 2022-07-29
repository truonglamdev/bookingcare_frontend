import './HeaderHomePage.scss';
import Image from '../../../components/Image/Image';
import images from '../../../assets/images';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Menu from '../../../components/Popper/Menu/Menu';

function HeaderHomePage() {
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
                        <Menu>
                            <div className="language-vn">VN</div>
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
