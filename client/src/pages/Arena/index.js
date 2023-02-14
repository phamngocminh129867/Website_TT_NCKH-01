import classNames from 'classnames/bind';
import styles from './Arena.module.scss';
import avata2 from '../../components/assets/image/san-bong-da-mini-the-cuong-2.jpg';
import { FaAngleDown,FaAngleLeft,FaAngleRight } from 'react-icons/fa';
import Cookies from 'js-cookie';

const cx = classNames.bind(styles);
function Arena() {
    const token = Cookies.get('token');
    if (token===undefined)  {
        window.location.href = "http://localhost:3001/login";
    }
    return <div className={cx('Arena')}>
        <div className={cx('Arena-Banner')}>
            <h2 className={cx('Arena-Bannet-text')}> Sân đấu</h2>
            <h2 className={cx('Arena-Bannet-text')}>Lịch sử đặt sân</h2>
        </div>
        <div className={cx('Arena-container')}>
            <div className={cx('Arena-Content')}>
            <div className={cx('Arena-stadium-filter')}>
                <div className={cx('stadium-filter')}>
                            <span className={cx('stadium-filter-text')}>Sắp xếp theo</span>
                            <button className={cx('stadium-filter-btn')}>Phổ biến</button>
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
                            </div>             
                </div>
            </div>
            <div className={cx('Arena-Content-menu')}>
                <h3 className={cx('Arena-Content-text')}>Thủ Dầu Một</h3>
                <div className={cx('Arena-stadium')}>
                    <div className={cx('Arena-stadium-content')}>
                        <img className={cx('Arena-avata-img')} src={avata2} alt=''/>
                        <ul  className={cx('Arena-stadium-list')}> Sân bóng đá mini Thế Cường
                            <li className={cx('Arena-stadium-item')}>Sân: 2</li>
                            <li className={cx('Arena-stadium-item')}>Loại: Sân 5</li>
                            <div className={cx('Arena-stadium-link')}>
                                <button  className={cx('Stadium-link-button')}><a href="/yarddetails">Đặt Sân</a></button>
                            </div>
                        </ul>
                    </div>
                    <div className={cx('Arena-stadium-content')}>
                        <img className={cx('Arena-avata-img')} src={avata2} alt=''/>
                        <ul  className={cx('Arena-stadium-list')}> Sân bóng đá mini Song Nam
                            <li className={cx('Arena-stadium-item')}>Sân: 4</li>
                            <li className={cx('Arena-stadium-item')}>Loại: Sân 5,Sân 7</li>
                            <div className={cx('Arena-stadium-link')}>
                                    <button  className={cx('Stadium-link-button')}><a href="/yarddetails">Đặt Sân</a></button>
                                </div>
                        </ul>
                    </div>
                    
                </div>
                    <div className={cx('Arena-stadium')}>
                        <div className={cx('Arena-stadium-content')}>
                            <img className={cx('Arena-avata-img')} src={avata2} alt=''/>
                            <ul  className={cx('Arena-stadium-list')}> Sân bóng đá mini Thế Cường
                                <li className={cx('Arena-stadium-item')}>Sân: 2</li>
                                <li className={cx('Arena-stadium-item')}>Loại: Sân 5</li>
                                <div className={cx('Arena-stadium-link')}>
                                    <button  className={cx('Stadium-link-button')}><a href="/yarddetails">Đặt Sân</a></button>
                                </div>
                            </ul>
                        </div>
                        <div className={cx('Arena-stadium-content')}>
                            <img className={cx('Arena-avata-img')} src={avata2} alt=''/>
                            <ul  className={cx('Arena-stadium-list')}> Sân bóng đá mini Song Nam
                                <li className={cx('Arena-stadium-item')}>Sân: 4</li>
                                <li className={cx('Arena-stadium-item')}>Loại: Sân 5,Sân 7</li>
                                <div className={cx('Arena-stadium-link')}>
                                    <button  className={cx('Stadium-link-button')}><a href="/yarddetails">Đặt Sân</a></button>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('Arena-stadium')}>
                        <div className={cx('Arena-stadium-content')}>
                            <img className={cx('Arena-avata-img')} src={avata2} alt=''/>
                            <ul  className={cx('Arena-stadium-list')}> Sân bóng đá mini Thế Cường
                                <li className={cx('Arena-stadium-item')}>Sân: 2</li>
                                <li className={cx('Arena-stadium-item')}>Loại: Sân 5</li>
                                <div className={cx('Arena-stadium-link')}>
                                    <button  className={cx('Stadium-link-button')}><a href="/yarddetails">Đặt Sân</a></button>
                                </div>
                            </ul>
                        </div>
                        <div className={cx('Arena-stadium-content')}>
                            <img className={cx('Arena-avata-img')} src={avata2} alt=''/>
                            <ul  className={cx('Arena-stadium-list')}> Sân bóng đá mini Song Nam
                                <li className={cx('Arena-stadium-item')}>Sân: 4</li>
                                <li className={cx('Arena-stadium-item')}>Loại: Sân 5,Sân 7</li>
                                <div className={cx('Arena-stadium-link')}>
                                    <button  className={cx('Stadium-link-button')}><a href="/yarddetails">Đặt Sân</a></button>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('Arena-stadium')}>
                        <div className={cx('Arena-stadium-content')}>
                            <img className={cx('Arena-avata-img')} src={avata2} alt=''/>
                            <ul  className={cx('Arena-stadium-list')}> Sân bóng đá mini Thế Cường
                                <li className={cx('Arena-stadium-item')}>Sân: 2</li>
                                <li className={cx('Arena-stadium-item')}>Loại: Sân 5</li>
                                <div className={cx('Arena-stadium-link')}>
                                    <button  className={cx('Stadium-link-button')}><a href="/yarddetails">Đặt Sân</a></button>
                                </div>
                            </ul>
                        </div>
                        <div className={cx('Arena-stadium-content')}>
                            <img className={cx('Arena-avata-img')} src={avata2} alt=''/>
                            <ul  className={cx('Arena-stadium-list')}> Sân bóng đá mini Song Nam
                                <li className={cx('Arena-stadium-item')}>Sân: 4</li>
                                <li className={cx('Arena-stadium-item')}>Loại: Sân 5,Sân 7</li>
                                <div className={cx('Arena-stadium-link')}>
                                    <button  className={cx('Stadium-link-button')}><a href="/yarddetails">Đặt Sân</a></button>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <ul className={cx('Arena-stadium-pagination')}>
                            <li className={cx('Arena-pagination-item')}>
                                <a href="#a" className={cx('Arena-pagination-link')}>
                                    <FaAngleLeft/>
                                </a>
                            </li>
                            <li className={cx('Arena-pagination-item')}>
                                <a href="#a" className={cx('Arena-pagination-link')}>1</a>
                            </li>
                            <li className={cx('Arena-pagination-item')}>
                                <a href="#a" className={cx('Arena-pagination-link')}>2</a>
                            </li>
                            <li className={cx('Arena-pagination-item')}>
                                <a href="#a" className={cx('Arena-pagination-link')}>3</a>
                            </li>
                            <li className={cx('Arena-pagination-item')}>
                                <a href="#a" className={cx('Arena-pagination-link')}>4</a>
                            </li>
                            <li className={cx('Arena-pagination-item')}>
                                <a href="#a" className={cx('Arena-pagination-link')}>5</a>
                            </li>
                            <li className={cx('Arena-pagination-item')}>
                                <a href="#a" className={cx('Arena-pagination-link')}>
                                    <FaAngleRight/>
                                </a>
                            </li>
                    </ul>
            </div>
            </div>
            <div className={cx('Arena-History')}>
                <div className={cx('Arena-stadium')}>
                    <div className={cx('Arena-stadium-content')}>
                        <img className={cx('Arena-avata-img')} src={avata2} alt=''/>
                        <ul  className={cx('Arena-stadium-list')}> Sân bóng đá mini Thế Cường
                            <li className={cx('Arena-stadium-item')}>Sân: 2</li>
                            <li className={cx('Arena-stadium-item')}>Loại: Sân 5</li>
                            <div className={cx('Arena-stadium-link')}>
                                <button  className={cx('Stadium-link-button')}><a href="/yarddetails">Đặt Sân</a></button>
                            </div>
                        </ul>
                    </div>    
                </div>
                <div className={cx('Arena-stadium')}>
                    <div className={cx('Arena-stadium-content')}>
                        <img className={cx('Arena-avata-img')} src={avata2} alt=''/>
                        <ul  className={cx('Arena-stadium-list')}> Sân bóng đá mini Thế Cường
                            <li className={cx('Arena-stadium-item')}>Sân: 2</li>
                            <li className={cx('Arena-stadium-item')}>Loại: Sân 5</li>
                            <div className={cx('Arena-stadium-link')}>
                                <button  className={cx('Stadium-link-button')}><a href="/yarddetails">Đặt Sân</a></button>
                            </div>
                        </ul>
                    </div>    
                </div>
                <div className={cx('Arena-stadium')}>
                    <div className={cx('Arena-stadium-content')}>
                        <img className={cx('Arena-avata-img')} src={avata2} alt=''/>
                        <ul  className={cx('Arena-stadium-list')}> Sân bóng đá mini Thế Cường
                            <li className={cx('Arena-stadium-item')}>Sân: 2</li>
                            <li className={cx('Arena-stadium-item')}>Loại: Sân 5</li>
                            <div className={cx('Arena-stadium-link')}>
                                <button  className={cx('Stadium-link-button')}><a href="/yarddetails">Đặt Sân</a></button>
                            </div>
                        </ul>
                    </div>    
                </div>
                <div className={cx('Arena-stadium')}>
                    <div className={cx('Arena-stadium-content')}>
                        <img className={cx('Arena-avata-img')} src={avata2} alt=''/>
                        <ul  className={cx('Arena-stadium-list')}> Sân bóng đá mini Thế Cường
                            <li className={cx('Arena-stadium-item')}>Sân: 2</li>
                            <li className={cx('Arena-stadium-item')}>Loại: Sân 5</li>
                            <div className={cx('Arena-stadium-link')}>
                                <button  className={cx('Stadium-link-button')}><a href="/yarddetails">Đặt Sân</a></button>
                            </div>
                        </ul>
                    </div>    
                </div>
                <div className={cx('Arena-stadium')}>
                    <div className={cx('Arena-stadium-content')}>
                        <img className={cx('Arena-avata-img')} src={avata2} alt=''/>
                        <ul  className={cx('Arena-stadium-list')}> Sân bóng đá mini Thế Cường
                            <li className={cx('Arena-stadium-item')}>Sân: 2</li>
                            <li className={cx('Arena-stadium-item')}>Loại: Sân 5</li>
                            <div className={cx('Arena-stadium-link')}>
                                <button  className={cx('Stadium-link-button')}><a href="/yarddetails">Đặt Sân</a></button>
                            </div>
                        </ul>
                    </div>    
                </div>
            </div>
        </div>
    </div>
};
export default Arena;