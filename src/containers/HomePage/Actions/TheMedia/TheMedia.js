import classNames from 'classnames/bind';
import styles from './TheMedia.module.scss';

const cx = classNames.bind(styles);
function TheMedia() {
    return (
        <div className={cx('media-container')}>
            <div className={cx('media-wrapper')}>
                <div className={cx('media-header')}>
                    <span>Truyền thông nói gì về bookingcare</span>
                </div>
                <div className={cx('media-content')}>
                    <div className={cx('video')}>
                        <iframe
                            width="90%"
                            height="320"
                            src="https://www.youtube.com/embed/Uqh-CY3ik0M"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className={cx('description')}>
                        <span>
                            Có ý kiến cho rằng, các thông tin về bác sĩ và cơ sở y tế đầy rẫy trên Internet. Và người
                            bệnh cũng không gặp khó khăn gì trong việc tìm hiểu thông tin và đặt lịch khám với bác sĩ,
                            cơ sở y tế.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TheMedia;
