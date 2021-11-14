import Router from './lib/Router';
import Store from './lib/Store';

new Store({});

const router = new Router('app');

import Login from './pages/login/login';
import Reg from './pages/registration/reg';
import Chats from './pages/chats/chats'
import profile from './pages/profile/profile'
import Page404 from './pages/errorPages/page404';
import Page500 from './pages/errorPages/page500';


router.use('/', Login);
router.use('/sign-up', Reg);
router.use('/messenger', Chats);
router.use('/settings', profile);
router.use('/error-404', Page404);
router.use('/error-500', Page500);
router.start();
