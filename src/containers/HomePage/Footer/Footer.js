import classNames from 'classnames/bind';
import images from '../../../assets/images';
import Image from '../../../components/Image';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('footer-container')}>
            <div className={cx('footer-content', 'row')}>
                <div className={cx('content-left', 'col-xl-6')}>
                    <div className={cx('info')}>
                        <div className={cx('logo')}>
                            <Image className={cx('logo-image')} src={images.logo} alt="logo" />
                        </div>
                        <div className={cx('body')}>
                            <div className={cx('body-title')}>Công ty cổ phần công nghệ BookingCare</div>
                            <div className={cx('body-wrapper')}>
                                <i className="fas fa-check"></i>
                                <span>28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội</span>
                            </div>
                            <div className={cx('body-wrapper')}>
                                <i className="fas fa-check"></i>
                                <span>ĐKKD số: 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015</span>
                            </div>
                        </div>
                        <div className={cx('certification')}></div>
                    </div>
                </div>
                <div className={cx('content-right', 'col-xl-6', 'row')}>
                    <div className={cx('contact', 'col-xl-6')}></div>
                    <div className={cx('location', 'col-xl-6')}></div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
