import Handlebars from 'handlebars';
import tmpl from './input.tmpl';

import Block from '../../lib/block';

type Context = {
    name: string;
    value: string;
    maxlength: string;
    type: string;
}


export default class Input extends Block {
    constructor(props: Record<string, any>, elementToReplaceId: string) {
      super(props, elementToReplaceId);
    }

    render() {
        const context = this.props.context as Context;
        return Handlebars.compile(tmpl, {noEscape: true})({...context});
    }
}