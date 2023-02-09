import classNames from "classnames/bind";
import styles from "./admin.moudule.scss";
import {FaUserAlt,FaLock} from "react-icons/fa";
import Cookies from 'js-cookie';
// import getUser from './loginshow-admin.js';
import jwt_decode from "jwt-decode";
const cx = classNames.bind(styles);
function Admin(){
    var tokenValue = Cookies.get('token');
    var decoded = jwt_decode(tokenValue);
    const token = Cookies.get('token');
    if (token===undefined)  {
        window.location.href = "http://localhost:3001/login";
    }
    console.log(decoded);
    return <div className={cx('Login')} >
    <form className="login">
        <h1 className={cx('Login-heading')} >Create Sân</h1>
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
                <select>
                <option   id="select_opp" value="1">Sân 5 (Bóng Đá)</option>
                <option  id="select_opp"  value="2">Sân 7 (Bóng Đá)</option>
                <option  id="select_opp"  value="3">Sân 5vs5 (Bóng Rổ)</option>
                <option  id="select_opp"  value="4">Sân 3vs3 (Bóng Rổ)</option>
                </select>
                </div>

                <div className={cx('Login-username-password')}>
                <label htmlFor="username" className={cx('Login-label')}>
                    <FaUserAlt/>
                </label>
                <input className={cx('Login-input')} type={"text"}  placeholder="Username" id="username" required></input>
                </div>

                <div className={cx('Login-username-password')}>
                <label htmlFor="username" className={cx('Login-label')}>
                    <FaUserAlt/>
                </label>
                <input className={cx('Login-input')} type={"text"}  placeholder="Username" id="username1" required></input>
                </div>

                <div className={cx('Login-username-password')}>
                <label htmlFor="password" className={cx('Login-label')}>
                    <FaLock/>
                </label>
                <input className={cx('Login-input')} type="password" placeholder="Password" id="password" required></input>
                </div>
                <form>
                    <div className={cx('Login-username-password')}>
                    <label htmlFor="password" className={cx('Login-label')}>Ảnh</label>
                    <input type="file" multiple="multiple" 
                        className={cx('Login-input')} name="" id="" aria-describedby="helpId" placeholder=""></input>
                    </div>
                </form>
                <button className={cx('Login-input')}  id="button"
                onClick={() => {
                    const username = decoded.nameUser;
                    const iduser= decoded.idUser;
                    const select_opp=document.getElementById("select_opp");
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
                            username:username,
                            iduser :iduser,
                            name: nameAdmin.value,
                            idcumsan:select_opp.value,   
                            pass: passAdmin.value,
                            cccd:cccd.value,
                            sdt:sdt.value,
                            nganhang:nganhang.value,
                            ten:ten.value,
                            ngaysinh:ngaysinh.value,
                            diachi:diachi.value,
                            motabanthan:motabanthan.value,
                        };
                        console.log(obj);
                        async function getUser(obj) {
                            try {
                                const requestOptions = {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify(obj)
                                }
                                await fetch("http://localhost:3000/g",requestOptions )
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
                            }}
                >ok</button>
            </div>
        </form>
    </div> 
}
export default Admin;