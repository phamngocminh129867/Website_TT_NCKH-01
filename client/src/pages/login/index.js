import classNames from "classnames/bind";
import styles from "./Login.moudule.scss";
import {FaUserAlt} from "react-icons/fa";
import {FaLock} from "react-icons/fa";
import Cookies from 'js-cookie';
const cx = classNames.bind(styles);
function Login(){
    return <div className={cx('Login')}>
    <div className="login">
        <h1 className={cx('Login-heading')} >Login</h1>
            <div className={cx('Login-from')}>
                <div className={cx('Login-username-password')}>
                <label htmlFor="username" className={cx('Login-label')}>
                    <FaUserAlt/>
                </label>
                <input className={cx('Login-input')} type={"text"} name="username" placeholder="Username" id="username" required></input>
                </div>
                <div className={cx('Login-username-password')}>
                <label htmlFor="password" className={cx('Login-label')}>
                    <FaLock/>
                </label>
                <input className={cx('Login-input')} type="password" name="password" placeholder="Password" id="password" required></input>
                </div><br/>
                <button className={cx('Login-input')}  id="button"
                onClick={() => {
                    const nameAdmin = document.getElementById("username");
                    const passAdmin = document.getElementById("password");
                            const obj = {
                            name: nameAdmin.value,   
                            pass: passAdmin.value,
                        };
                        console.log(obj);
                        async function getUser() {
                            try {
                                await fetch("http://localhost:3000/getdata_withQuery", {
                                    method: "POST",
                                    headers: {
                                    "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify(obj),
                                })
                                    .then((res) => res.json())
                                    .then((data) => {
                                    if (data.text === "success") {
                                        window.location.href = "http://localhost:3001";
                                        alert("Successfully logged in ");
                                        console.log(data.token);
                                        Cookies.set("token",data.token,{
                                            expires:1,
                                        });
                                    }
                                    // console.log(data);
                                    if (data.text === "fail") {
                                        alert("Failed");
                                    }
                                    });
                            } catch (err){console.log(err);}}
                        getUser();
                            }}>ok</button>
            </div>
        </div>
    </div> 
}
export default Login;