import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Cookies from 'js-cookie';
const cx = classNames.bind(styles);

function Header() {
    const cookie =  Cookies.get("token")
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}></div>
                <div className={cx('menu')}>
                    <ul className={cx('menu-list')}>
                        <li className={cx('menu-item')}>
                            <a className={cx('menu-item-link')} href="/">
                                Trang chủ
                            </a>
                        </li>
                        <li className={cx('menu-item')}>
                            <a className={cx('menu-item-link')} href="#a">
                                Thách đấu
                            </a>
                        </li>
                        <li className={cx('menu-item')}>
                            <a className={cx('menu-item-link')} href="/Arena">
                                Sân đấu
                            </a>
                        </li>
                        <li className={cx('menu-item')}>
                            <a className={cx('menu-item-link')} href="#a">
                                Giải đấu
                            </a>
                        </li>
                    </ul>
                    {(cookie === undefined) ? 
                    <ul className={cx('menu-list')}>
                        <li className={cx('menu-item')}>
                            <a className={cx('menu-item-link')} href="/register">
                                Đăng ký
                            </a>
                        </li>
                        <li className={cx('menu-item')}>
                            <a className={cx('menu-item-link')} href="/login">
                                Đăng nhập
                            </a>
                        </li>
                    </ul> :
                    <ul className={cx('menu-list')}>
                        <li className={cx('menu-item')}>
                        <a className={cx('menu-item-link')} href="#a" onClick={()=>{
                        Cookies.remove("token");
                        window.location.href=("http://localhost:3001/login");
                        }}>Đăng xuất</a>
                        </li>
                    </ul>
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;
