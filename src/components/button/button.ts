import Handlebars from 'handlebars';
import buttonTemplate from './button.tmpl';

import Block from '../../lib/block';

type Props = Record<string, any>;

export default class Button extends Block {
    constructor(props: Props, elementToReplaceId: string) {
      super(props, elementToReplaceId);
    }

    render() {
        return Handlebars.compile(buttonTemplate, {noEscape: true})({text: this.props.text});
    }
}
