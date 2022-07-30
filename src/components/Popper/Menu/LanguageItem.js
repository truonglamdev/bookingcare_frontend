import classNames from 'classnames/bind';
import Image from '../../Image/Image';
import styles from '../Menu/LanguageItem.module.scss';
import { changeLanguageApp } from '../../../store/actions';
import { useDispatch } from 'react-redux';

const cx = classNames.bind(styles);
function LanguageItem({ data, func }) {
    const dispatch = useDispatch();

    const handleChangeLanguage = (language) => {
        dispatch(changeLanguageApp(language));
        func(data);
    };
    return (
        <div className={cx('wrapper')} onClick={() => handleChangeLanguage(data.id)}>
            <div className={cx('language-image')}>
                <Image src={data.image} alt={data.title} />
            </div>
            <div className={cx('language-title')}>{data.title}</div>
        </div>
    );
}

export default LanguageItem;
