import Cookies from 'js-cookie';
// import jwt_decode from "jwt-decode";
function Home() {
    const token = Cookies.get('token');
    // var tokenValue = Cookies.get('token');
    // var decoded = jwt_decode(tokenValue);
    if (token===undefined)  {
        window.location.href = "http://localhost:3001/login";
    }
    // else if (token !== undefined)  {
    //     // window.location.href = "http://localhost:3001";
    //     console.log(decoded.idUser);
    // }
    return <h2>Home Page</h2>
}

export default Home;