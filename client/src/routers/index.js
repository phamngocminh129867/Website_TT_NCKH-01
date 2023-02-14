import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Arena from '~/pages/Arena';
import Login from '../pages/login';
import Register from '../pages/register/register';
import Admin from '../pages/admin/admin';
import Arenachusan from '~/pages/Arena-chusan';
import yarddetails from '~/pages/Yard-details';

const publicRouters = [
    {path: '/', component: Home},
    {path: '/Arena', component: Arena, layout: HeaderOnly},
    {path: '/login', component: Login, layout: null},
    {path: '/register', component: Register, layout: null},
    {path: '/admin_update', component: Admin, layout: null},
    {path: '/yarddetails',component: yarddetails,layout: HeaderOnly},
    {path: '/Arena-chusan',component: Arenachusan,layout: HeaderOnly}
]

const privateRouters = [
]

export {publicRouters,privateRouters}