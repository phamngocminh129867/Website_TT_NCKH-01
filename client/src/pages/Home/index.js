import Cookies from 'js-cookie';

function Home() {
    const token = Cookies.get('token');
    if (token===undefined)  {
        window.location.href = "http://localhost:3001/login";
    }
    return <h2>Home Page</h2>
}

export default Home;