import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import classNames from 'classnames/bind';
import styles from './UserRedux.module.scss';

const cx = classNames.bind(styles);
class UserRedux extends Component {
    componentDidMount() {}

    render() {
        return (
            <div className={cx('user-redux-container')}>
                <div className={cx('user-redux-title')}>Quản lý người dùng với redux</div>
                <div className={cx('user-redux-body')}>Thêm người dùng</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
