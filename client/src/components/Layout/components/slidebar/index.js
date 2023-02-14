import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import avata from '../../../assets/image/Logo.jpg';
import { FaUserFriends } from 'react-icons/fa';
import { FaNewspaper } from 'react-icons/fa';
import { FaMedal } from 'react-icons/fa';
import { GiTrophyCup } from 'react-icons/gi';

const cx = classNames.bind(styles);

function Slidebar() {
    return (
        <div className={cx('slidebar')}>
            {/* Top */}
            <div className={cx('slide-top')}>
                <div className={cx('slide-info-top')}>
                    <img className={cx('slide-img-avata')} src={avata} alt="" />
                    <a className={cx('slide-text')} href="#a">
                        Nguyễn Văn A
                    </a>
                </div>
            </div>

            {/* Mid */}
            <div className={cx('slide-mid')}>
                <h3 className={cx('slide-mid-theme')}>Phím tắt</h3>
                <div className={cx('slide-info-mid-menu')}>
                    <ul className={cx('slide-info-menu-list')}>
                        <li className={cx('slide-info-menu-item')}>
                            <FaUserFriends size={'2rem'} />
                            <a href="#a">Bạn bè</a>
                        </li>
                        <li className={cx('slide-info-menu-item')}>
                            <FaNewspaper size={'2rem'} />
                            <a href="#a">Bài viết gần đây</a>
                        </li>
                        <li className={cx('slide-info-menu-item')}>
                            <FaMedal size={'2rem'} />
                            <a href="#a">Thành tích</a>
                        </li>
                        <li className={cx('slide-info-menu-item')}>
                            <GiTrophyCup size={'2rem'} />
                            <a href="#a">Xếp hạng</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bot */}
            <div className={cx('slide-bot')}>
                <h3 className={cx('slide-bot-theme')}>Đội bóng đã Tham Gia</h3>
                <div className={cx('slide-bot-content')}>
                    <div className={cx('slide-bot-content-menu')}>
                        <img className={cx('slide-bot-img')} src={avata} alt="" />
                        <a className={cx('slide-bot-text')} href="#a">
                            Nguyễn Văn A
                        </a>
                    </div>
                    <div className={cx('slide-bot-content-menu')}>
                        <img className={cx('slide-bot-img')} src={avata} alt="" />
                        <a className={cx('slide-bot-text')} href="#a">
                            Nguyễn Văn A
                        </a>
                    </div>
                    <div className={cx('slide-bot-content-menu')}>
                        <img className={cx('slide-bot-img')} src={avata} alt="" />
                        <a className={cx('slide-bot-text')} href="#a">
                            Nguyễn Văn A
                        </a>
                    </div>
                    <div className={cx('slide-bot-content-menu')}>
                        <img className={cx('slide-bot-img')} src={avata} alt="" />
                        <a className={cx('slide-bot-text')} href="#a">
                            Nguyễn Văn A
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slidebar;
