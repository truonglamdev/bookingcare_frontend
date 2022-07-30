import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import MenuWrapper from '../MenuWrapper/MenuWrapper';
import LanguageItem from '../Menu/LanguageItem';
import { Fragment } from 'react';

const cx = classNames.bind(styles);
function Menu({ children, languages, getLanguage }) {
    const changeLanguage = (data) => getLanguage(data);

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <MenuWrapper>
                {languages.map((item, index) => (
                    <LanguageItem data={item} key={index} func={changeLanguage} />
                ))}
            </MenuWrapper>
        </div>
    );
    return (
        <Fragment>
            <Tippy
                interactive
                delay={[0, 700]}
                offset={[12, 8]}
                placement="bottom-end"
                render={renderResult}
            >
                {children}
            </Tippy>
        </Fragment>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    languages: PropTypes.array.isRequired,
};

export default Menu;
