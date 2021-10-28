// message = { text: '', photo: '', date: '', author: '', unread: true/false }

const tmpl = `
    <div class="chats__message chats__message_my-{{ isMe }}">
        <span class="chats__message-text">{{text}}</span>
        <span class="chats__message-unread{{ unread }}"></span>
        <span class="chats__message-date">{{ date }}</span>
    </div>
`;

export default tmpl;