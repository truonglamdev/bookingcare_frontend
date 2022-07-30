import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import Image from '../../../components/Image/Image';
import images from '../../../assets/images';
import options from '../../../assets/images/options';
import './Banner.scss';
function Banner() {
    const medicalService = [
        {
            title: <FormattedMessage id="banner.specialty" />,
            image: options.option1,
            to: '/',
        },
        {
            title: <FormattedMessage id="banner.remote" />,
            image: options.option2,
            to: '/',
        },
        {
            title: <FormattedMessage id="banner.general" />,
            image: options.option3,
            to: '/',
        },
        {
            title: <FormattedMessage id="banner.medical-test" />,
            image: options.option4,
            to: '/',
        },
        {
            title: <FormattedMessage id="banner.mental-health" />,
            image: options.option5,
            to: '/',
        },
        {
            title: <FormattedMessage id="banner.mental" />,
            image: options.option6,
            to: '/',
        },
        {
            title: <FormattedMessage id="banner.surgery-package" />,
            image: options.option7,
            to: '/',
        },
        {
            title: <FormattedMessage id="banner.medical-product" />,
            image: options.option8,
            to: '/',
        },
    ];

    return (
        <div className="banner-home-container">
            <div className="banner-home-content">
                <div className="banner-search-box">
                    <div className="banner-home-header">
                        <h2 className="banner-header-title">
                            <FormattedMessage id="banner.title" />
                        </h2>
                        <span>
                            <FormattedMessage id="banner.description" />
                        </span>
                    </div>
                    <div className="banner-home-search">
                        <div className="search-input">
                            <div className="search-icon">
                                <i className="fas fa-search"></i>
                            </div>
                            <input type="text" placeholder="Tìm phòng khám" />
                        </div>
                    </div>
                    <div className="banner-home-app">
                        <Image className="app-store" src={images.appStore} alt="app-store" />
                        <Image className="google-play" src={images.googlePlay} alt="google-play" />
                    </div>
                </div>
                <div className="banner-home-options">
                    <div className="banner-options-container container ">
                        <ul className="banner-options-list row">
                            {medicalService.map((item, index) => (
                                <li key={index} className="banner-options-item col">
                                    <Link className="item-box" to={item.to}>
                                        <div className="item-image">
                                            <Image className="image" src={item.image} alt={item.title} />
                                        </div>
                                        <div className="item-title">{item.title}</div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
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
export default connect(mapStateToProps, mapDispatchToProps)(Banner);
