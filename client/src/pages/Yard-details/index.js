import classNames from "classnames/bind";
import styles from './Details.module.scss';
import avata3 from '../../components/assets/image/san-bong-da-mini-the-cuong-2.jpg';
import {FaStar} from "react-icons/fa";

const cx = classNames.bind(styles)

function yarddetails() {
    return <div className={cx('yarddetails')}>
        <div className={cx('yarddetails-container')}>
            <img className={cx('yarddetails-container-img')} src={avata3} alt="img"/>
            <div className={cx('yarddetails-container-content')}>
                <ul className={cx('yarddetails-container-header')}>Sân Bóng đá mini Thế Cường
                    <li className={cx('yarddetails-container-text')}>Sân: 2</li>
                    <li className={cx('yarddetails-container-text')}>Loại: Sân 5</li>
                    <li className={cx('yarddetails-container-text')}>
                        <div className={cx('yarddetails-container-rating')}>
                            <FaStar className={cx('yarddetails-container-star--gold')}/>
                            <FaStar className={cx('yarddetails-container-star--gold')}/>
                            <FaStar className={cx('yarddetails-container-star--gold')}/>
                            <FaStar className={cx('yarddetails-container-star--gold')}/>
                            <FaStar/>
                        </div>
                    </li>
                    <li className={cx('yarddetails-container-text')}>Số điện thoại</li>
                    <li className={cx('yarddetails-container-text')}>178 Huỳnh Văn Lũy, Phú Lợi, Thủ Dầu Một, Bình Dương, Việt Nam</li>
                </ul>
            </div>
        </div>
        
    </div>
}

export default yarddetails;