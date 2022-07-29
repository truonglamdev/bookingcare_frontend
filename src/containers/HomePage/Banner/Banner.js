import { Link } from 'react-router-dom';
import Image from '../../../components/Image/Image';
import images from '../../../assets/images';
import options from '../../../assets/images/options';
import './Banner.scss';
function Banner() {
    const medicalService = [
        {
            title: 'Khám chuyên khoa',
            image: options.option1,
            to: '/',
        },
        {
            title: 'Khám từ xa',
            image: options.option2,
            to: '/',
        },
        {
            title: 'Khám tổng quát',
            image: options.option3,
            to: '/',
        },
        {
            title: 'Xét nghiệm y học',
            image: options.option4,
            to: '/',
        },
        {
            title: 'Sức khoẻ tinh thần',
            image: options.option5,
            to: '/',
        },
        {
            title: 'Khám nha khoa',
            image: options.option6,
            to: '/',
        },
        {
            title: 'Gói phẩu thuật',
            image: options.option7,
            to: '/',
        },
        {
            title: 'Sản phẩm y tế',
            image: options.option8,
            to: '/',
        },
    ];

    return (
        <div className="banner-home-container">
            <div className="banner-home-content">
                <div className="banner-search-box">
                    <div className="banner-home-header">
                        <h2 className="banner-header-title">NỀN TẢNG Y TẾ</h2>
                        <span>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</span>
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
                                            <Image className='image' src={item.image} alt={item.title} />
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

export default Banner;
