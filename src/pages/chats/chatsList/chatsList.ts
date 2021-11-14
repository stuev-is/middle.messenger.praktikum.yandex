import type { Chat } from '../chats';

import ChatListItem from './chatListItem';

export default function(chats: Array<Chat>, pending: boolean, onChatClick: any, chatsListId: string) {
    if(!chats || !chats.length) {
        return pending ? '' : '<div class="chats__list_empty">Нет ни одного чата</div>';

    }

    const parent = document.getElementById(chatsListId);
    if(!parent) {
        return;
    }
    chats.forEach((chat, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.setAttribute('id', `chat-list-${index}`)
        parent.appendChild(itemDiv);
        const props = {
            avatar: chat.avatar,
            text: chat.last_message ? chat.last_message : 'Нет сообщений',
            unreadCount: chat.unread_count ? chat.unread_count : null,
            // date: chat.messages[0].date,
            title: chat.title,
            events: { click: () => onChatClick(chat.id) }
        }
        new ChatListItem(props, `chat-list-${index}`);
    });
} 
