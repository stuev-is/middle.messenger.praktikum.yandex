import './errorPage.css';

import Block from '../../lib/Block';

export default class Page500 extends Block {  
      render() {
        return `<div class="title errorPage__title">500</div>
        <div class="errorPage__text">Уже фиксим</div>
        <a class="link" href="/messenger">Назад к чатам</div>`;
      }
}