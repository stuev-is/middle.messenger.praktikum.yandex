import Router from '../../lib/Router';
import Store from '../../lib/Store';
import getUser from '../../lib/api/getUser';
import chatsApi from './chatsApi';

const chatsApiInstanse = new chatsApi();

export default class ChatsController {
    _router: any;
    _store: Record<string, any>;

    constructor() {
        this._router = new Router('app');
        this._store = new Store({})
    }

    checkUser() {
      return getUser().then((id: string) => {
        if(!id) {
          this._router.go('/');
        }
      });
    }

    getChats() {
      this._store.setState('chatsPending', true)
      chatsApiInstanse.getChats().then(response => {
        const chats = JSON.parse(response.response);
        this._store.setState('chats', chats);
        this._store.setState('chatsPending', false)
      })
    }

    addChat() {
      chatsApiInstanse.addChat().then(() => {
        this.getChats();
      })
    }

    goToChat(id: string) {
      this._store.setState('currentChatId', id);
    }

    setSettingsPopupVisible(visible: boolean) {
      this._store.setState('chatSettingsPopupVisible', visible)
    }

    addChatUser(chatId: string, userLogin: string) {
      chatsApiInstanse.getUsersByLogin(userLogin).then(response => {
        const users = JSON.parse(response.response);
        if(users && users.length) { 
          const userId = users[0].id;
          chatsApiInstanse.addChatUser(chatId, userId);
        } else {
          throw new Error('no users found');
        }
      });
    }

    deleteChatUser(chatId: string, userLogin: string) {
      chatsApiInstanse.getUsersByLogin(userLogin).then(response => {
        const users = JSON.parse(response.response);
        if(users && users.length) { 
          const userId = users[0].id;
          chatsApiInstanse.deleteChatUser(chatId, userId);
        } else {
          throw new Error('no users found');
        }
      });
    }
  } 