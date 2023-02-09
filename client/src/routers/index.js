import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Arena from '~/pages/Arena';
import Login from '../pages/login';
import Register from '../pages/register/register';
import Admin from '../pages/admin/admin';

const publicRouters = [
    {path: '/', component: Home},
    {path: '/Arena', component: Arena, layout: HeaderOnly},
    {path: '/login', component: Login, layout: null},
    {path: '/register', component: Register, layout: null},
    {path: '/admin_update', component: Admin, layout: null},
]

const privateRouters = [
]

export {publicRouters,privateRouters}