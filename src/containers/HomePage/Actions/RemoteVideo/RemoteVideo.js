import SlickSlider from '../../components/SlickSlider';
import classNames from 'classnames/bind';
import styles from './RemoteVideo.module.scss';
import '../_base.scss';
import Image from '../../../../components/Image';
import Button from '../../../../components/Button';

const cx = classNames.bind(styles);
function RemoteVideo() {
    return (
        <div className={cx('wrapper-container')}>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <div className={cx('title-header')}>Bác sĩ từ xa qua Video</div>
                    <Button primary rightIcon={<i className="fas fa-search"></i>} onClick={() => alert('click me')}>
                        Tìm kiếm
                    </Button>
                </div>
                <div className={cx('content')}>
                    <SlickSlider dots={false} slidesToScroll={4}>
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
                    </SlickSlider>
                </div>
            </div>
        </div>
    );
}

export default RemoteVideo;
