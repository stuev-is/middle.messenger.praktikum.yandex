import './errorPage.css';

import Block from '../../lib/Block';

export default class Page404 extends Block {  
      render() {
        return `<div class="errorPage">
        <div class="title errorPage__title">404</div>
        <div class="errorPage__text">Не туда попали</div>
        <a class="link" href="/messenger">Назад к чатам</div>
    </div>`;
      }
}