import regApi from './regApi';
import Router from '../../lib/Router';
import Store from '../../lib/Store';
import getUser from '../../lib/api/getUser';

const regApiInstanse = new regApi();

export default class LoginController {
    _router: any;
    _store: Record<string, any>;

    constructor() {
        this._router = new Router('app');
        this._store = new Store({})
    }
    public async signup(data: any) {
      return regApiInstanse.request(data).then(() => {
        this.goToMessages();
      }).catch(error => {
        const message =  JSON.parse(error.message);
        this._store.setState('registrationError', message.reason);
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