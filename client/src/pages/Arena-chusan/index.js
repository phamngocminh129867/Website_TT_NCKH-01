import classNames from "classnames/bind";
import styles from './Arena-chusan.module.scss'
import avata2 from '../../components/assets/image/san-bong-da-mini-the-cuong-2.jpg'
import {FaAngleDown} from "react-icons/fa";
import {FaPlusCircle} from "react-icons/fa";

const cx = classNames.bind(styles)

function Arenachusan() {
    return <div className={cx('Arena')}>
        <div className={cx('Arena-Content')}>
            <div className={cx('Arena-stadium-add')}>
                <h2 className={cx('Arena-Banner')}>Sân đấu</h2>
                <button className={cx('Arena-stadium-btn')}>
                    <FaPlusCircle className={cx('Arena-stadium-icon')}/>
                    <p className={cx('Arena-stadium-text')}>Tạo mới</p>
                </button>
            </div>
            <div  className={cx('Account-stadium')}>
                <div className={cx('Account-stadium-container')}>
                    <div ></div>
                    <div ></div>
                </div>  
            </div>
            <div className={cx('Arena-stadium-filter')}>
                <div className={cx('stadium-filter')}>
                            <span className={cx('stadium-filter-text')}>Sắp xếp theo</span>
                            <button className={cx('stadium-filter-btn')}>Phổ biến</button>
                            <button className={cx('stadium-filter-btn')}>Mới nhất</button>
                            <div className={cx('stadium-filter-stadium')}>
                                <div className={cx('stadium-filter-country')}>
                                    <span className={cx('stadium-country')}>Khu vực</span>
                                    <FaAngleDown />
                                    <ul className={cx('stadium-country-menu')}>
                                        <li className={cx('stadium-country-list')}>
                                            <a href="#a" className={cx('stadium-country-link')}>Bình Dương</a>
                                        </li>
                                        <li className={cx('stadium-country-list')}>
                                            <a href="#a" className={cx('stadium-country-link')}>Tp HCM</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className={cx('stadium-filter-sports')}>
                                    <span className={cx('stadium-sports')}>Môn thể thao</span>
                                    <FaAngleDown />
                                    <ul className={cx('stadium-sports-menu')}>
                                        <li className={cx('stadium-sports-list')}>
                                            <a href="#bongda" className={cx('stadium-sports-link')}>Bóng đá</a>
                                        </li>
                                        <li className={cx('stadium-sports-list')}>
                                            <a href="#bongro" className={cx('stadium-sports-link')}>Bóng rổ</a>
                                        </li>
                                        <li className={cx('stadium-sports-list')}>
                                            <a href="#bongchuyen" className={cx('stadium-sports-link')}>Bóng chuyền</a>
                                        </li>
                                        <li className={cx('stadium-sports-list')}>
                                            <a href="#caulong" className={cx('stadium-sports-link')}>Cầu lông</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className={cx('stadium-filter-price')}>
                                    <span className={cx('stadium-price')}>Giá</span>
                                    <FaAngleDown />
                                    <ul className={cx('stadium-price-menu')}>
                                        <li className={cx('stadium-price-list')}>
                                            <a href="#a" className={cx('stadium-price-link')}>Giá: Thấp đến cao</a>
                                        </li>
                                        <li className={cx('stadium-price-list')}>
                                            <a href="#a" className={cx('stadium-price-link')}>Giá: Cao đến thấp</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>             
                </div>
            </div>
            <div className={cx('Arena-Content-menu')}>
                <h3 className={cx('Arena-Content-text')}>Thủ Dầu Một</h3>
                <div className={cx('Arena-stadium')}>
                    <div className={cx('Arena-stadium-content')}>
                        <img className={cx('Arena-avata-img')} src={avata2} alt=""/>
                        <ul  className={cx('Arena-stadium-list')}> Sân bóng đá mini Thế Cường
                            <li className={cx('Arena-stadium-item')}>Sân: 2</li>
                            <li className={cx('Arena-stadium-item')}>Loại: Sân 5</li>
                            <a className={cx('Arena-stadium-link')} href="#a">Xem chi tiết</a>
                        </ul>
                    </div>
                    <div className={cx('Arena-stadium-content')}>
                        <img className={cx('Arena-avata-img')} src={avata2}alt=""/>
                        <ul  className={cx('Arena-stadium-list')}> Sân bóng đá mini Song Nam
                            <li className={cx('Arena-stadium-item')}>Sân: 4</li>
                            <li className={cx('Arena-stadium-item')}>Loại: Sân 5,Sân 7</li>
                            <a className={cx('Arena-stadium-link')} href="#a">Xem chi tiết</a>
                        </ul>
                    </div>
                    <div className={cx('Arena-stadium-content')}>
                        <img className={cx('Arena-avata-img')} src={avata2}alt=""/>
                        <ul  className={cx('Arena-stadium-list')}> Sân bóng đá mini Truong Sa
                            <li className={cx('Arena-stadium-item')}>Sân: 3</li>
                            <li className={cx('Arena-stadium-item')}>Loại: Sân 5</li>
                            <a className={cx('Arena-stadium-link')} href="#a">Xem chi tiết</a>
                        </ul>
                    </div>
                </div>
                    <div className={cx('Arena-stadium')}>
                        <div className={cx('Arena-stadium-content')}>
                            <img className={cx('Arena-avata-img')} src={avata2}alt=""/>
                            <ul  className={cx('Arena-stadium-list')}> Sân bóng đá mini Thế Cường
                                <li className={cx('Arena-stadium-item')}>Sân: 2</li>
                                <li className={cx('Arena-stadium-item')}>Loại: Sân 5</li>
                                <a className={cx('Arena-stadium-link')} href="#a">Xem chi tiết</a>
                            </ul>
                        </div>
                        <div className={cx('Arena-stadium-content')}>
                            <img className={cx('Arena-avata-img')} src={avata2}alt=""/>
                            <ul  className={cx('Arena-stadium-list')}> Sân bóng đá mini Song Nam
                                <li className={cx('Arena-stadium-item')}>Sân: 4</li>
                                <li className={cx('Arena-stadium-item')}>Loại: Sân 5,Sân 7</li>
                                <a className={cx('Arena-stadium-link')} href="#a">Xem chi tiết</a>
                            </ul>
                        </div>
                        <div className={cx('Arena-stadium-content')}>
                            <img className={cx('Arena-avata-img')} src={avata2}alt=""/>
                            <ul  className={cx('Arena-stadium-list')}> Sân bóng đá mini Truong Sa
                                <li className={cx('Arena-stadium-item')}>Sân: 3</li>
                                <li className={cx('Arena-stadium-item')}>Loại: Sân 5</li>
                                <a className={cx('Arena-stadium-link')} href="#a">Xem chi tiết</a>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('Arena-stadium')}>
                        <div className={cx('Arena-stadium-content')}>
                            <img className={cx('Arena-avata-img')} src={avata2} alt=""/>
                            <ul  className={cx('Arena-stadium-list')}> Sân bóng đá mini Thế Cường
                                <li className={cx('Arena-stadium-item')}>Sân: 2</li>
                                <li className={cx('Arena-stadium-item')}>Loại: Sân 5</li>
                                <a className={cx('Arena-stadium-link')} href="#a">Xem chi tiết</a>
                            </ul>
                        </div>
                        <div className={cx('Arena-stadium-content')}>
                            <img className={cx('Arena-avata-img')} src={avata2}alt=""/>
                            <ul  className={cx('Arena-stadium-list')}> Sân bóng đá mini Song Nam
                                <li className={cx('Arena-stadium-item')}>Sân: 4</li>
                                <li className={cx('Arena-stadium-item')}>Loại: Sân 5,Sân 7</li>
                                <a className={cx('Arena-stadium-link')} href="#a">Xem chi tiết</a>
                            </ul>
                        </div>
                        <div className={cx('Arena-stadium-content')}>
                            <img className={cx('Arena-avata-img')} src={avata2}alt=""/>
                            <ul  className={cx('Arena-stadium-list')}> Sân bóng đá mini Truong Sa
                                <li className={cx('Arena-stadium-item')}>Sân: 3</li>
                                <li className={cx('Arena-stadium-item')}>Loại: Sân 5</li>
                                <a className={cx('Arena-stadium-link')} href="#a">Xem chi tiết</a>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('Arena-stadium')}>
                        <div className={cx('Arena-stadium-content')}>
                            <img className={cx('Arena-avata-img')} src={avata2}alt=""/>
                            <ul  className={cx('Arena-stadium-list')}> Sân bóng đá mini Thế Cường
                                <li className={cx('Arena-stadium-item')}>Sân: 2</li>
                                <li className={cx('Arena-stadium-item')}>Loại: Sân 5</li>
                                <a className={cx('Arena-stadium-link')} href="#a">Xem chi tiết</a>
                            </ul>
                        </div>
                        <div className={cx('Arena-stadium-content')}>
                            <img className={cx('Arena-avata-img')} src={avata2}alt=""/>
                            <ul  className={cx('Arena-stadium-list')}> Sân bóng đá mini Song Nam
                                <li className={cx('Arena-stadium-item')}>Sân: 4</li>
                                <li className={cx('Arena-stadium-item')}>Loại: Sân 5,Sân 7</li>
                                <a className={cx('Arena-stadium-link')} href="#a">Xem chi tiết</a>
                            </ul>
                        </div>
                        <div className={cx('Arena-stadium-content')}>
                            <img className={cx('Arena-avata-img')} src={avata2}alt=""/>
                            <ul  className={cx('Arena-stadium-list')}> Sân bóng đá mini Truong Sa
                                <li className={cx('Arena-stadium-item')}>Sân: 3</li>
                                <li className={cx('Arena-stadium-item')}>Loại: Sân 5</li>
                                <a className={cx('Arena-stadium-link')} href="#a">Xem chi tiết</a>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
    </div>
}

export default Arenachusan;