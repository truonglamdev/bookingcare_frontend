import SlickSlider from '../../components/SlickSlider';
import classNames from 'classnames/bind';
import styles from './Handbook.module.scss';
import '../_base.scss';
import Image from '../../../../components/Image';

import Button from '../../../../components/Button';

const cx = classNames.bind(styles);
function Handbook() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('title-header')}>Cẩm nang</div>
                <div>
                    <Button primary  onClick={() => alert('click me')}>
                        Tất cả bài viết
                    </Button>
                </div>
            </div>
            <div className={cx('content')}>
                <SlickSlider dots={false} slidesToScroll={1} slidesToShow={1}>
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
    );
}

export default Handbook;
