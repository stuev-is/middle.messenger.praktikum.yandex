import './chats.css';
import '../common.css';

// chats = [ chat ]
// chat = { user: '', avatar: '', messages: [ message ]}
// message = { text: '', photo: '', date: '', author: '', unread: true/false }

const tmpl = `
    <div class="chats">
        <div class="chats__list" id={{ chatsListId }}></div>
        <div class="chats__message-container">
            <div class="chats__messages" id={{ messagesId }}></div>
            <div class="chats__form" id={{ formId }}></div>
        </div>
    </div>
`;

export default tmpl;