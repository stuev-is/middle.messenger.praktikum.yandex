import compileBlock from '../compileBlock';
// import insertBlock from '../insertBlock';
import Block from '../../lib/Block';

import chatsTemplate from './chats.tmpl';
import chatsList from './chatsList/chatsList';
// import messages from './messages/messages';
// import chatForm from './chatForm/chatForm';
import chatAddButton from './chatAddButton/chatAddButton';
import chatSettingsButton from './chatSettingsButton/chatSettingsButton';
import chatSettingsItem from './chatSettingsItem/chatSettingsItem';

import chatsController from './chatsController';

const chatsControllerInstance = new chatsController();

const CHATS_LIST_ID = 'chats-list'
const MESSAGES_ID = 'messages';
const FORM_ID = 'form';
const ADD_BUTTON_ID = 'add-button';
const SETTINGS_BUTTON_ID = 'settings-button';
const SETTINGS_POPUP_ID = 'settings-popup-id';


export type Message = {
    text: string;
    photo?: string;
    date: string;
    isMe: boolean;
    unread: boolean;
}

export type Chat = {
    title: string;
    avatar?: string;
    last_message?: string;
    unread_count?: number;
    id: string;
}

type Props = Record<string, any>;

export default class Chats extends Block {
      constructor(props: Props, elementToReplaceId: string) {
        super(props, elementToReplaceId, true);
      }

      _mapStateToProps(state: Record<string, any>): Record<string, any> | null {
          const props = {
              chats: state.chats,
              currentChatId: state.currentChatId,
              pending: state.chatsPending,
              settingsPopupVisible: state.chatSettingsPopupVisible,
            };
          return props;
      }

      componentDidMount(oldProps?: { [x: string]: any; }): void {
        chatsControllerInstance.checkUser();
        chatsControllerInstance.getChats();
      }
  
      render() {
        return compileBlock(chatsTemplate, {
            chatsListId: CHATS_LIST_ID,
            messagesId: MESSAGES_ID,
            formId: FORM_ID,
            addButtonId: ADD_BUTTON_ID,
            settingsButtonId: SETTINGS_BUTTON_ID,
            settingsPopupId: SETTINGS_POPUP_ID,
            settingsPopupVisible: Boolean(this.props.settingsPopupVisible),
        });
      }
  
      afterRender() {
        // const message1 = {
        //     text: `получил твоё письмо и сразу понял, что оно от тебя. Сначала подумал,
        //         что оно вдруг не от тебя, но как только распечатал, сразу понял, что от
        //         тебя, а то было подумал, что оно не от тебя.`,
        //     date: 'Вчера',
        //     isMe: true,
        //     unread: false,
        // }
        
        // const message2 = {
        //     text: `Привет`,
        //     date: 'Вчера',
        //     isMe: false,
        //     unread: false,
        // }
        
        // const message3 = {
        //     text: `Я рад, что ты давно женился,
        //         потому что  когда  человек  женится на  том, на ком  он  хотел жениться,  то
        //         значит, что он добился того, чего хотел. И  я вот очень рад, что ты женился,
        //         потому  что,  когда человек  женится на  том, на  ком хотел,  то  значит, он
        //         добился того,  чего хотел.`,
        //     date: 'Вчера',
        //     isMe: false,
        //     unread: false,
        // }
        
        // const chat = {
        //     title: 'Вася',
        //     id: '1',
        //     unread_count: 6,
        //     messages: [message1, message2, message3],
        // }

        const onChatClick = (id: string) => chatsControllerInstance.goToChat(id);
        chatsList(this.props.chats, this.props.pending, onChatClick, CHATS_LIST_ID);
        const addChat = () => chatsControllerInstance.addChat();
        new chatAddButton({events: {click: addChat}}, ADD_BUTTON_ID);
        const showSettingsPopup = () => chatsControllerInstance.setSettingsPopupVisible(!this.props.settingsPopupVisible);
        new chatSettingsButton({visible: Boolean(this.props.currentChatId), events: {click: showSettingsPopup}}, SETTINGS_BUTTON_ID);
        const popup = document.getElementById(SETTINGS_POPUP_ID);
        // TODO: сделать форму для ввода логина юзера, которого будем добавлять/удалять
        const popupItems = [
            {id: 'addUser', text: 'добавить пользователя', onClick: () => chatsControllerInstance.addChatUser(this.props.currentChatId, 'IgorStuev')},
            {id: 'deleteUser', text: 'удалить пользователя', onClick: () => chatsControllerInstance.deleteChatUser(this.props.currentChatId, 'IgorStuev')}
        ]
        popupItems.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.setAttribute('id', `settings-popup-item-${item.id}`)
            popup?.appendChild(itemDiv);
            new chatSettingsItem({itemText: item.text, events: {click: item.onClick}}, `settings-popup-item-${item.id}`)
        })
        // new chatSettingsButton({events: {click: showSettingsPopup}}, SETTINGS_BUTTON_ID);
        // messages(chat, MESSAGES_ID);
        // insertBlock(chatForm('Привет!'), FORM_ID);  
      }
  }
