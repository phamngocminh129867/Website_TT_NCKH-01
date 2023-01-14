import classNames from "classnames/bind";
import styles from "./Login.moudule.scss";
import {FaUserAlt} from "react-icons/fa";
// import DataLogin from "./loginData";
import {FaLock} from "react-icons/fa";

const cx = classNames.bind(styles);
function Login(){
    return <div className={cx('Login')}>
    <div class="login">
        <h1 className={cx('Login-heading')} >Login</h1>
            <form className={cx('Login-from')} action="/localhost:3000/getdata_withQuery" method="post">
                <div className={cx('Login-username-password')}>
                <label for="username" className={cx('Login-label')}>
                    <FaUserAlt/>
                </label>
                <input className={cx('Login-input')} type={"text"} name="username" placeholder="Username" id="username" required></input>
                </div>
                <div className={cx('Login-username-password')}>
                <label for="password" className={cx('Login-label')}>
                    <FaLock/>
                </label>
                <input className={cx('Login-input')} type="password" name="password" placeholder="Password" id="username" required></input>
                </div>
                <input className={cx('Login-input')} type="submit" value="Login" id="button"></input>
            </form>
        </div>
    </div> 
}
export default Login;