import classNames from 'classnames/bind';
import styles from './Amount.module.scss';
import avata1 from '../../../assets/image/Logo.jpg';

const cx = classNames.bind(styles);

function Amount() {
    return (
        <div className={cx('Amount')}>
            <h3>Tuyển dụng</h3>
            <div className={cx('Amuont-mid')}>
                <div className={cx('Amount-add')}>
                    <div className={cx('Amount-header')}>
                        <img className={cx('Amount-img')} src={avata1} alt="" />
                        <div className={cx('Amount-content')}>
                            <p className={cx('Amount-text')}>Đội A</p>
                            <p className={cx('Amount-text')}>Vị trí:</p>
                            <p className={cx('Amount-text')}>Số lượng:</p>
                            <div className={cx('Amount-button')}>
                                <button className={cx('Amount-add-button')}>Xác nhận</button>
                                <button className={cx('Amount-close-button')}>Hủy</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('Amount-add')}>
                    <div className={cx('Amount-header')}>
                        <img className={cx('Amount-img')} src={avata1} alt="" />
                        <div className={cx('Amount-content')}>
                            <p className={cx('Amount-text')}>Đội A</p>
                            <p className={cx('Amount-text')}>Vị trí:</p>
                            <p className={cx('Amount-text')}>Số lượng:</p>
                            <div className={cx('Amount-button')}>
                                <button className={cx('Amount-add-button')}>Xác nhận</button>
                                <button className={cx('Amount-close-button')}>Hủy</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('Amount-add')}>
                    <div className={cx('Amount-header')}>
                        <img className={cx('Amount-img')} src={avata1} alt="" />
                        <div className={cx('Amount-content')}>
                            <p className={cx('Amount-text')}>Đội A</p>
                            <p className={cx('Amount-text')}>Vị trí:</p>
                            <p className={cx('Amount-text')}>Số lượng:</p>
                            <div className={cx('Amount-button')}>
                                <button className={cx('Amount-add-button')}>Xác nhận</button>
                                <button className={cx('Amount-close-button')}>Hủy</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('Amount-add')}>
                    <div className={cx('Amount-header')}>
                        <img className={cx('Amount-img')} src={avata1} alt="" />
                        <div className={cx('Amount-content')}>
                            <p className={cx('Amount-text')}>Đội A</p>
                            <p className={cx('Amount-text')}>Vị trí:</p>
                            <p className={cx('Amount-text')}>Số lượng:</p>
                            <div className={cx('Amount-button')}>
                                <button className={cx('Amount-add-button')}>Xác nhận</button>
                                <button className={cx('Amount-close-button')}>Hủy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Amount;
