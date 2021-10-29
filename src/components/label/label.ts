import Handlebars from 'handlebars';

import tmpl from './label.tmpl';

type Context = {
    label: string;
    id: string;
}

export default function({label, id}: Context): string {
    return Handlebars.compile(tmpl, {noEscape: true})({label, id}, {})
}
