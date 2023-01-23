import classNames from "classnames/bind";
import styles from "./Login.moudule.scss";
import {FaUserAlt} from "react-icons/fa";
import {FaLock} from "react-icons/fa";
// import Cookies from 'js-cookie';
const cx = classNames.bind(styles);
function Register(){
    return <div className={cx('Login')}>
    <div className="login">
        <h1 className={cx('Login-heading')} >Create Account</h1>
            <div className={cx('Login-from')}>

            <div className={cx('Login-username-password')}>
                <label htmlFor="username" className={cx('Login-label')}>
                    <FaUserAlt/>
                </label>
                <input className={cx('Login-input')} type={"text"}  placeholder="CCCD/CMND" id="cccd" required></input>
                </div>

                <div className={cx('Login-username-date')}>
                <label htmlFor="username" className={cx('Login-label')}>
                    <FaUserAlt/>
                </label>
                <input className={cx('Login-input')} type={"date"}  placeholder="Ngày Sinh" id="ngaysinh" required></input>
                </div>

                <div className={cx('Login-username-password')}>
                <label htmlFor="username" className={cx('Login-label')}>
                    <FaUserAlt/>
                </label>
                <input className={cx('Login-input')} type={"text"}  placeholder="Ngân Hàng" id="nganhang" ></input>
                </div>


                <div className={cx('Login-username-password')}>
                <label htmlFor="username" className={cx('Login-label')}>
                    <FaUserAlt/>
                </label>
                <input className={cx('Login-input')} type={"text"}  placeholder="Mô Tả Bản Thân" id="motabanthan" ></input>
                </div>

                <div className={cx('Login-username-password')}>
                <label htmlFor="username" className={cx('Login-label')}>
                    <FaUserAlt/>
                </label>
                <input className={cx('Login-input')} type={"text"}  placeholder="SDT" id="sdt" ></input>
                </div>

                <div className={cx('Login-username-password')}>
                <label htmlFor="username" className={cx('Login-label')}>
                    <FaUserAlt/>
                </label>
                <input className={cx('Login-input')} type={"text"}  placeholder="Địa chỉ" id="diachi" ></input>
                </div>

                <div className={cx('Login-username-password')}>
                <label htmlFor="username" className={cx('Login-label')}>
                    <FaUserAlt/>
                </label>
                <input className={cx('Login-input')} type={"text"}  placeholder="Tên" id="name" required></input>
                </div>

                <div className={cx('Login-username-password')}>
                <label htmlFor="username" className={cx('Login-label')}>
                    <FaUserAlt/>
                </label>
                <input className={cx('Login-input')} type={"text"}  placeholder="Username" id="username" required></input>
                </div>

                <div className={cx('Login-username-password')}>
                <label htmlFor="password" className={cx('Login-label')}>
                    <FaLock/>
                </label>
                <input className={cx('Login-input')} type="password" placeholder="Password" id="password" required></input>
                </div>
                
                <button className={cx('Login-input')}  id="button"
                onClick={() => {
                    const nameAdmin = document.getElementById("username");
                    const passAdmin = document.getElementById("password");
                    const ten = document.getElementById("name");
                    const cccd = document.getElementById("cccd");
                    const ngaysinh = document.getElementById("ngaysinh");
                    const nganhang = document.getElementById("nganhang");
                    const sdt = document.getElementById("sdt");
                    const diachi = document.getElementById("diachi");
                    const motabanthan = document.getElementById("motabanthan");
                            const obj = {
                            name: nameAdmin.value,   
                            pass: passAdmin.value,
                            cccd:cccd.value,
                            sdt:sdt.value,
                            nganhang:nganhang.value,
                            ten:ten.value,
                            ngaysinh:ngaysinh.value,
                            diachi:diachi.value,
                            motabanthan:motabanthan.value,
                        };
                        async function getUser(obj) {
                            try {
                                const requestOptions = {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify(obj)
                                }
                                await fetch("http://localhost:3000/getdata_register",requestOptions )
                                    .then((res) => res.json())
                                    .then((data) => {
                                    if (data.text === "success") {
                                        alert("Create Successfully");
                                        window.location.href = "http://localhost:3001/login";
                                        // // console.log(data.token);
                                        // Cookies.set("token",data.token,{
                                        //     expires:1,
                                        // });
                                    }
                                    // console.log(data);
                                    if (data.text === "fail") {
                                        alert("Failed");
                                    }
                                    });
                            } catch (err){console.log(err);}}
                        getUser(obj);
                            }}>ok</button>
            </div>
        </div>
    </div> 
}
export default Register;