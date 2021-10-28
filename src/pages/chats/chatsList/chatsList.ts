import Handlebars from 'handlebars';

import chatsListItemTemplate from './chatsListItem.tmpl';

import type { Chat } from '../chats';

export default function(chats: Array<Chat>) {
    let result = '';
    chats.forEach(chat => {
        result += Handlebars.compile(chatsListItemTemplate)({
            avatar: chat.avatar,
            text: chat.messages[0].text,
            date: chat.messages[0].date,
            unreadCount: chat.unreadCount,
            userName: chat.userName,
        })
    });
    return result;
} 
