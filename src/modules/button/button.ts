import Handlebars from 'handlebars';
import buttonTemplate from './button.tmpl';

import Block from '../../lib/block';

type Props = Record<string, any>;

export default class Button extends Block {
    constructor(props: Props, elementToReplaceId: string) {
      super(props, elementToReplaceId);
    }

    render() {
      console.log('render button', this.props);
        return Handlebars.compile(buttonTemplate, {noEscape: true})({text: this.props.text});
    }
}
