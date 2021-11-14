import './chats.css';
import '../common.css';

const tmpl = `
    <div class="chats">
        <div class="chats__list">
            <div class="chats__list-container" id="{{ chatsListId }}"></div>
            <div class="chats__add-button" id="{{ addButtonId }}"></div>
        </div>
        <div class="chats__message-container">
            <div class="chats__top-panel">
                <div id="{{ settingsButtonId }}"></div>
                <div class="chats__settings-popup chats__settings-popup_visible-{{ settingsPopupVisible }}" id="{{ settingsPopupId }}">
                </div>
            </div>
            <div class="chats__messages" id="{{ messagesId }}"></div>
            <div class="chats__form" id="{{ formId }}"></div>
        </div>
    </div>
`;

export default tmpl;