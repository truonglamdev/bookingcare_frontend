import classNames from 'classnames/bind';
import styles from './Diagnostic.module.scss';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SampleNextArrow, SamplePrevArrow } from '../../../../components/Customs/ButtonSlider';
import Image from '../../../../components/Image';

const cx = classNames.bind(styles);
function Diagnostic() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <Slider {...settings}>
                    <div className={cx('slider-item')}>
                        <div className={cx('avatar')}>
                            <Image
                                className={cx('img')}
                                src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/121042-than-kinh.jpg"
                                alt="avatar"
                            />
                        </div>
                        <div className={cx('description')}>Thần kinh</div>
                    </div>
                    <div className={cx('slider-item')}>
                        <div className={cx('avatar')}>
                            <Image
                                className={cx('img')}
                                src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/121042-than-kinh.jpg"
                                alt="avatar"
                            />
                        </div>
                        <div className={cx('description')}>Thần kinh</div>
                    </div>
                    <div className={cx('slider-item')}>
                        <div className={cx('avatar')}>
                            <Image
                                className={cx('img')}
                                src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/121042-than-kinh.jpg"
                                alt="avatar"
                            />
                        </div>
                        <div className={cx('description')}>Thần kinh</div>
                    </div>
                    <div className={cx('slider-item')}>
                        <div className={cx('avatar')}>
                            <Image
                                className={cx('img')}
                                src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/121042-than-kinh.jpg"
                                alt="avatar"
                            />
                        </div>
                        <div className={cx('description')}>Thần kinh</div>
                    </div>
                    <div className={cx('slider-item')}>
                        <div className={cx('avatar')}>
                            <Image
                                className={cx('img')}
                                src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/121042-than-kinh.jpg"
                                alt="avatar"
                            />
                        </div>
                        <div className={cx('description')}>Thần kinh</div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Diagnostic;
