import loginApi from './loginApi';
import Router from '../../lib/Router';
import Store from '../../lib/Store';
import getUser from '../../lib/api/getUser';

const loginApiInstanse = new loginApi();

export default class LoginController {
    _router: any;
    _store: Record<string, any>;

    constructor() {
        this._router = new Router('app');
        this._store = new Store({})
    }
    public async login(data: any) {
      return loginApiInstanse.request(data).then(() => {
        this.goToMessages();
      }).catch(error => {
        const message =  JSON.parse(error.message);
        this._store.setState('loginError', message.reason);
      });
    }

    checkUser() {
      return getUser().then((id: string) => {
        if(id) {
          this.goToMessages();
        }
      });
    }

    goToMessages() {
      this._router.go('/messenger');
    }
  } 