import Handlebars from 'handlebars';
import tmpl from './input.tmpl';

type Context = {
    label: string,
    name: string,
    value: string,
    maxlength: string;
    type: string;
}

export default function({label, name, value, maxlength, type}: Context): string {
    return Handlebars.compile(tmpl, {noEscape: true})({label, name, value, maxlength, type});
}
