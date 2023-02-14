import React, { useState,useEffect } from 'react';
import axios from 'axios';
import styles from "./admin.moudule.scss";
import classNames from "classnames/bind";
import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';
const cx = classNames.bind(styles);
    const token = Cookies.get('token');
    if (token===undefined)  {
        window.location.href = "http://localhost:3001/login";
        // var decoded = ("text");
    }
    if (token!==undefined)  {
        var tokenValue = Cookies.get('token');
        var decoded = jwt_decode(tokenValue);
        // console.log(decoded);
    }
const UpdateInfo = () => {
    const [loaisan, setLoaisan] = useState([]);
    useEffect(() => {
        axios
        .get("http://localhost:3000/loaisan")
        .then(response => {
            setLoaisan(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);
    // const [setIdUser] = useState(decoded.idUser);
    // const [setNameUser] = useState(decoded.nameUser);
    const [name, setName] = useState('');
    // const [name, setName] = useState('');
    const [san, setSan] = useState('');
    const [image, setImage] = useState('');
    const [tenLoaisan, setTenloaisan] = useState(''); 
    const [bomon, setBomon] = useState(''); 
    const [giathue, setGiathue] = useState('');
    const upDateloaisan = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('tenloaisan', tenLoaisan);
        formData.append('nameuser', decoded.nameUser);
        formData.append('bomon', bomon);
        formData.append('tensan', name);
        formData.append('giathue', giathue);
        try {
        const response = await axios.get('http://localhost:3000/uploadloaisan', formData);
        console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };
const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('iduser', decoded.idUser);
    formData.append('nameuser', decoded.nameUser);
    formData.append('idsan', san);
    formData.append('tensan', name);
    formData.append('image', image);
    try {
    const response = await axios.post('http://localhost:3000/uploadadmin', formData);
    console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};

return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" className={cx('Login')}>
        <div className="login" >
            <h1 className={cx('Login-heading')} >Create Cụm Sân</h1>
                <div className={cx('Login-from')}>
                    <input
                    type="text"
                    defaultValue={decoded.idUser}
                    // onLoad={(e) => setIdUser(e.target.value)}
                    className={cx('blind')}
                    placeholder="idUser"
                    />
                    <input
                    type="text"
                    defaultValue={decoded.nameUser}
                    // onLoad={(e) => setNameUser(e.target.value)}
                    className={cx('blind')}
                    placeholder="nameUser"
                    />
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tên Sân"
                    />
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tên Cụm Sân"
                    />
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tên"
                    /> 
                    <button type="submit">Cập nhật</button>
                    </div>
            </div>
            <div className="login" >
            <h1 className={cx('Login-heading')} >Create loại sân</h1>
                <div className={cx('Login-from')}>
                    <input
                    type="text"
                    value={tenLoaisan}
                    onChange={(e) => setTenloaisan(e.target.value)}
                    placeholder="Tên loại sân"
                    />
                    <input
                    type="text"
                    value={bomon}
                    onChange={(e) => setBomon(e.target.value)}
                    placeholder="Bộ Môn"
                    />
                    <input
                    type="text"
                    value={giathue}
                    onChange={(e) => setGiathue(e.target.value)}
                    placeholder="Giá tiền thuê"
                    /> 
                    <button type="submit" onClick={upDateloaisan}>Cập nhật</button>
                    </div>
            </div>
            <div className="login" >
            <h1 className={cx('Login-heading')} >Create Sân</h1>
                <div className={cx('Login-from')}>
                    <input
                    type="text"
                    defaultValue={decoded.idUser}
                    // onLoad={(e) => setIdUser(e.target.value)}
                    className={cx('blind')}
                    placeholder="idUser"
                    />
                    <input
                    type="text"
                    defaultValue={decoded.nameUser}
                    // onLoad={(e) => setNameUser(e.target.value)}
                    className={cx('blind')}
                    placeholder="nameUser"
                    />
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tên Sân"
                    />
                    {loaisan.map(loaisan => (
                        <div ></div>
                    ))}
                {loaisan.map(student => (
                    <tr key={student.MaLoaiSan}>
                    <td>{loaisan.TenLoaiSan}</td>
                    </tr>
                ))}
                    <input
                        type="radio"
                        name="gender"
                        value="3"
                        checked={san === '3'}
                        onChange={(e) => setSan(e.target.value)}
                    /> Sân 5vs5 Bóng Rổ
                    <input
                        type="radio"
                        name="gender"
                        value="4"
                        checked={san === '4'}
                        onChange={(e) => setSan(e.target.value)}
                    /> Sân 3vs3 Bóng Rổ
                    <input
                        type="radio"
                        name="gender"
                        value="1"
                        checked={san === '1'}
                        onChange={(e) => setSan(e.target.value)}
                    /> Sân 5 Bóng Đá
                    <input
                        type="radio"
                        name="gender"
                        value="2"
                        checked={san === '2'}
                        onChange={(e) => setSan(e.target.value)}
                    /> Sân 7 Bóng Đá
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tên Cụm Sân"
                    />
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tên"
                    /> 
                    <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    />
                    <button type="submit">Cập nhật</button>
                    </div>
            </div>
    </form>
    );
};

export default UpdateInfo;