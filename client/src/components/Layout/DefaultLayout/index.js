import classNames from "classnames/bind";
import Header from "~/components/Layout/components/Header";
import styles from "./DefaultLayout.module.scss"
import Slidebar from "~/components/Layout/components/slidebar";
import Amount from "~/components/Layout/components/Amount";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return ( 
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
                <Slidebar/>
                <div className={cx('Content')}>{children} </div>
                <Amount/>

            </div>
            
        </div>
    );
}

export default DefaultLayout;