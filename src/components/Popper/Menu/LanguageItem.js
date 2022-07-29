import classNames from 'classnames/bind';
import Image from '../../Image/Image';
import styles from '../Menu/LanguageItem.module.scss';

const cx = classNames.bind(styles);
function LanguageItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('language-image')}>
                <Image src="https://banggia.vndirect.com.vn/static/media/uk.e5564902e2.svg" />
            </div>
            <div className={cx('language-title')}>English</div>
        </div>
    );
}

export default LanguageItem;
