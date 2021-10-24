import Handlebars from 'handlebars';

import messageTemplate from './message.tmpl';

import type { Chat } from '../chats';

export default function(chat: Chat) {
    let result = '';
    chat.messages.forEach(msg => {
        result += Handlebars.compile(messageTemplate)(msg)
    });
    return result;
} 
