import './chats.css';
import '../common.css';

const tmpl = `
    <div class="chats">
        <div class="chats__list" id="{{ chatsListId }}"></div>
        <div class="chats__message-container">
            <div class="chats__messages" id="{{ messagesId }}"></div>
            <div class="chats__form" id="{{ formId }}"></div>
        </div>
    </div>
`;

export default tmpl;