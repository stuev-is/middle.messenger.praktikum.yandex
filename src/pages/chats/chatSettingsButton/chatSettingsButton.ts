import Block from '../../../lib/Block';

export default class Button extends Block {
    render() {
        return `<div class="chats__settings-button chats__settings-button_visible-${this.props.visible}"></div>`;
    }
}
