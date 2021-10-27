import Handlebars from 'handlebars';

import tmpl from './label.tmpl';

type Context = {
    label: string;
    name: string;
}

export default function({label, name}: Context): string {
    return Handlebars.compile(tmpl, {noEscape: true})({label, name}, {})
}
