import Handlebars from 'handlebars';

import chatsListItemTemplate from './chatsListItem.tmpl';
import Block from '../../../lib/Block';

export default class ChatListItem extends Block {  
    render() {
        return Handlebars.compile(chatsListItemTemplate, {noEscape: true})({ ...this.props });
    }
}