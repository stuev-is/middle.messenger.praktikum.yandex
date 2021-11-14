// chats = [ chat ]
// chat = { user: '', avatar: '', messages: [ message ], unreadCount }
// message = { text: '', photo: '', date: '', author: '', unread: true/false }

const tmpl = `<div class="chats__list-item">
        <div class="chats__list-item-avatar">{{ avatar }}</div>
        <div class="chats__list-item-info">
            <div class="chats__list-item-first-row">
                <div class="chats__list-item-name">{{ title }}</div>
                <div class="chats__list-item-date">{{ date }}</div>
            </div>
            <div class="chats__list-item-second-row">
                <div class="chats__list-item-text">{{ text }}</div>
                <div class="chats__list-item-unread-count">{{ unreadCount }}</div>
            </div>
        </div>
    </div>`;

export default tmpl;