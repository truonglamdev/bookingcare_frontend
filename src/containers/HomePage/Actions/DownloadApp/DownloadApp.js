/* eslint-disable jsx-a11y/anchor-has-content */
import classNames from 'classnames/bind';
import Image from '../../../../components/Image';
import styles from './DownloadApp.module.scss';

import images from '../../../../assets/images';

const cx = classNames.bind(styles);
function DownloadApp() {
    return (
        <div className={cx('download-app-container')}>
            <div className={cx('download-app-content')}>
                <div className={cx('content-left')}>
                    <Image className={cx('download-app-image')} src={images.bookingApp} alt="booking app" />
                </div>
                <div className={cx('content-right')}>
                    <div className={cx('content-title')}>Tải ứng dụng BookingCare</div>
                    <div className={cx('list-benefit')}>
                        <div className={cx('item')}>
                            <i className="fas fa-check"></i>
                            <span>Đặt khám nhanh hơn</span>
                        </div>
                        <div className={cx('item')}>
                            <i className="fas fa-check"></i>
                            <span>Nhận thông báo từ hệ thống</span>
                        </div>
                        <div className={cx('item')}>
                            <i className="fas fa-check"></i>
                            <span>Nhận hướng dẫn chi tiết khi khám bệnh</span>
                        </div>
                    </div>
                    <div className={cx('app-mobile')}>
                        <Image className={cx('app-store')} src={images.appStore} />
                        <Image className={cx('google-play')} src={images.googlePlay} />
                    </div>
                    <div className={cx('contact')}>
                        <a href="/">Hoặc mở liên kết: https://bookingcare.vn/app</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DownloadApp;
