import compileBlock from '../compileBlock';
import insertBlock from '../insertBlock';

import chatsTemplate from './chats.tmpl';
import chatsList from './chatsList/chatsList';
import messages from './messages/messages';
import chatForm from './chatForm/chatForm';

const CHATS_LIST_ID = 'chats-list'
const MESSAGES_ID = 'messages';
const FORM_ID = 'form';

const result = compileBlock(chatsTemplate, {
    chatsListId: CHATS_LIST_ID,
    messagesId: MESSAGES_ID,
    formId: FORM_ID,
});

insertBlock(result, 'result');

const message1 = {
    text: `получил твоё письмо и сразу понял, что оно от тебя. Сначала подумал,
        что оно вдруг не от тебя, но как только распечатал, сразу понял, что от
        тебя, а то было подумал, что оно не от тебя.`,
    date: 'Вчера',
    isMe: true,
    unread: false,
}

const message2 = {
    text: `Привет`,
    date: 'Вчера',
    isMe: false,
    unread: false,
}

const message3 = {
    text: `Я рад, что ты давно женился,
        потому что  когда  человек  женится на  том, на ком  он  хотел жениться,  то
        значит, что он добился того, чего хотел. И  я вот очень рад, что ты женился,
        потому  что,  когда человек  женится на  том, на  ком хотел,  то  значит, он
        добился того,  чего хотел.`,
    date: 'Вчера',
    isMe: false,
    unread: false,
}

const chat = {
    userName: 'Вася',
    unreadCount: 6,
    messages: [message1, message2, message3],
}
const chats = [ chat, chat ];

insertBlock(chatsList(chats), CHATS_LIST_ID);
insertBlock(messages(chats[0]), MESSAGES_ID);
insertBlock(chatForm('Привет!'), FORM_ID);

export type Message = {
    text: string;
    photo?: string;
    date: string;
    isMe: boolean;
    unread: boolean;
}

export type Chat = {
    userName: string;
    avatar?: string;
    messages: Array<Message>;
    unreadCount: number;
}

