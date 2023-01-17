import classNames from 'classnames/bind';
import styles from './Arena.module.scss';
import avata2 from '../../components/assets/image/san-bong-da-mini-the-cuong-2.jpg';
import { FaAngleDown } from 'react-icons/fa';
import Cookies from 'js-cookie';

const cx = classNames.bind(styles);
function Arena() {
    const token = Cookies.get('token');
    if (token===undefined)  {
        window.location.href = "http://localhost:3001/login";
    }
    return (
        <div className={cx('Arena')}>
            <h2 className={cx('Arena-Banner')}>Sân đấu</h2>
            <div className={cx('Arena-Content')}>
                <div className={cx('Arena-stadium-filter')}>
                    <div className={cx('stadium-filter')}>
                        <span className={cx('stadium-filter-text')}>Sắp xếp theo</span>
                        <button className={cx('stadium-filter-btn')}>Phổ biến</button>
                        <button className={cx('stadium-filter-btn')}>Mới nhất</button>
                        <button className={cx('stadium-filter-btn')}>Khu vực</button>

                        <div className={cx('stadium-filter-price')}>
                            <span className={cx('stadium-price')}>Giá</span>
                            <FaAngleDown />
                            <ul className={cx('stadium-price-menu')}>
                                <li className={cx('stadium-price-list')}>
                                    <a href="#a" className={cx('stadium-price-link')}>
                                        Giá: Thấp đến cao
                                    </a>
                                </li>
                                <li className={cx('stadium-price-list')}>
                                    <a href="#a" className={cx('stadium-price-link')}>
                                        Giá: Cao đến thấp
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={cx('Arena-Content-menu')}>
                    <h3 className={cx('Arena-Content-text')}>Thủ Dầu Một</h3>
                    <div className={cx('Arena-stadium')}>
                        <div className={cx('Arena-stadium-content')}>
                            <img className={cx('Arena-avata-img')} src={avata2} alt="" />
                            <ul className={cx('Arena-stadium-list')}>
                                {' '}
                                Sân bóng đá mini Thế Cường
                                <li className={cx('Arena-stadium-item')}>Sân: 2</li>
                                <li className={cx('Arena-stadium-item')}>Loại: Sân 5</li>
                                <a className={cx('Arena-stadium-link')} href="#a">
                                    Xem chi tiết
                                </a>
                            </ul>
                        </div>
                        <div className={cx('Arena-stadium-content')}>
                            <img className={cx('Arena-avata-img')} src={avata2} alt="" />
                            <ul className={cx('Arena-stadium-list')}>
                                {' '}
                                Sân bóng đá mini Song Nam
                                <li className={cx('Arena-stadium-item')}>Sân: 4</li>
                                <li className={cx('Arena-stadium-item')}>Loại: Sân 5,Sân 7</li>
                                <a className={cx('Arena-stadium-link')} href="#a">
                                    Xem chi tiết
                                </a>
                            </ul>
                        </div>
                        <div className={cx('Arena-stadium-content')}>
                            <img className={cx('Arena-avata-img')} src={avata2} alt="" />
                            <ul className={cx('Arena-stadium-list')}>
                                {' '}
                                Sân bóng đá mini Truong Sa
                                <li className={cx('Arena-stadium-item')}>Sân: 3</li>
                                <li className={cx('Arena-stadium-item')}>Loại: Sân 5</li>
                                <a className={cx('Arena-stadium-link')} href="#a">
                                    Xem chi tiết
                                </a>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('Arena-stadium')}>
                        <div className={cx('Arena-stadium-content')}>
                            <img className={cx('Arena-avata-img')} src={avata2} alt="" />
                            <ul className={cx('Arena-stadium-list')}>
                                {' '}
                                Sân bóng đá mini Thế Cường
                                <li className={cx('Arena-stadium-item')}>Sân: 2</li>
                                <li className={cx('Arena-stadium-item')}>Loại: Sân 5</li>
                                <a className={cx('Arena-stadium-link')} href="#a">
                                    Xem chi tiết
                                </a>
                            </ul>
                        </div>
                        <div className={cx('Arena-stadium-content')}>
                            <img className={cx('Arena-avata-img')} src={avata2} alt="" />
                            <ul className={cx('Arena-stadium-list')}>
                                {' '}
                                Sân bóng đá mini Song Nam
                                <li className={cx('Arena-stadium-item')}>Sân: 4</li>
                                <li className={cx('Arena-stadium-item')}>Loại: Sân 5,Sân 7</li>
                                <a className={cx('Arena-stadium-link')} href="#a">
                                    Xem chi tiết
                                </a>
                            </ul>
                        </div>
                        <div className={cx('Arena-stadium-content')}>
                            <img className={cx('Arena-avata-img')} src={avata2} alt="" />
                            <ul className={cx('Arena-stadium-list')}>
                                {' '}
                                Sân bóng đá mini Truong Sa
                                <li className={cx('Arena-stadium-item')}>Sân: 3</li>
                                <li className={cx('Arena-stadium-item')}>Loại: Sân 5</li>
                                <a className={cx('Arena-stadium-link')} href="#a">
                                    Xem chi tiết
                                </a>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('Arena-stadium')}>
                        <div className={cx('Arena-stadium-content')}>
                            <img className={cx('Arena-avata-img')} src={avata2} alt="" />
                            <ul className={cx('Arena-stadium-list')}>
                                {' '}
                                Sân bóng đá mini Thế Cường
                                <li className={cx('Arena-stadium-item')}>Sân: 2</li>
                                <li className={cx('Arena-stadium-item')}>Loại: Sân 5</li>
                                <a className={cx('Arena-stadium-link')} href="#a">
                                    Xem chi tiết
                                </a>
                            </ul>
                        </div>
                        <div className={cx('Arena-stadium-content')}>
                            <img className={cx('Arena-avata-img')} src={avata2} alt="" />
                            <ul className={cx('Arena-stadium-list')}>
                                {' '}
                                Sân bóng đá mini Song Nam
                                <li className={cx('Arena-stadium-item')}>Sân: 4</li>
                                <li className={cx('Arena-stadium-item')}>Loại: Sân 5,Sân 7</li>
                                <a className={cx('Arena-stadium-link')} href="#a">
                                    Xem chi tiết
                                </a>
                            </ul>
                        </div>
                        <div className={cx('Arena-stadium-content')}>
                            <img className={cx('Arena-avata-img')} src={avata2} alt="" />
                            <ul className={cx('Arena-stadium-list')}>
                                {' '}
                                Sân bóng đá mini Truong Sa
                                <li className={cx('Arena-stadium-item')}>Sân: 3</li>
                                <li className={cx('Arena-stadium-item')}>Loại: Sân 5</li>
                                <a className={cx('Arena-stadium-link')} href="#a">
                                    Xem chi tiết
                                </a>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('Arena-stadium')}>
                        <div className={cx('Arena-stadium-content')}>
                            <img className={cx('Arena-avata-img')} src={avata2} alt="" />
                            <ul className={cx('Arena-stadium-list')}>
                                {' '}
                                Sân bóng đá mini Thế Cường
                                <li className={cx('Arena-stadium-item')}>Sân: 2</li>
                                <li className={cx('Arena-stadium-item')}>Loại: Sân 5</li>
                                <a className={cx('Arena-stadium-link')} href="#a">
                                    Xem chi tiết
                                </a>
                            </ul>
                        </div>
                        <div className={cx('Arena-stadium-content')}>
                            <img className={cx('Arena-avata-img')} src={avata2} alt="" />
                            <ul className={cx('Arena-stadium-list')}>
                                {' '}
                                Sân bóng đá mini Song Nam
                                <li className={cx('Arena-stadium-item')}>Sân: 4</li>
                                <li className={cx('Arena-stadium-item')}>Loại: Sân 5,Sân 7</li>
                                <a className={cx('Arena-stadium-link')} href="#a">
                                    Xem chi tiết
                                </a>
                            </ul>
                        </div>
                        <div className={cx('Arena-stadium-content')}>
                            <img className={cx('Arena-avata-img')} src={avata2} alt="" />
                            <ul className={cx('Arena-stadium-list')}>
                                {' '}
                                Sân bóng đá mini Truong Sa
                                <li className={cx('Arena-stadium-item')}>Sân: 3</li>
                                <li className={cx('Arena-stadium-item')}>Loại: Sân 5</li>
                                <a className={cx('Arena-stadium-link')} href="#a">
                                    Xem chi tiết
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Arena;
