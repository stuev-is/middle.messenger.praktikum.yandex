import Block from '../../../lib/Block';

export default class Button extends Block {
    render() {
        return `<div class="chats__settings-popup-item">${ this.props.itemText }</div>`;
    }
}
