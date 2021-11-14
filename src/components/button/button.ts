import Handlebars from 'handlebars';
import buttonTemplate from './button.tmpl';

import Block from '../../lib/Block';

export default class Button extends Block {
    render() {
        return Handlebars.compile(buttonTemplate, {noEscape: true})({text: this.props.text});
    }
}
