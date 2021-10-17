import Handlebars from 'handlebars';
import buttonTemplate from './button.tmpl';

export default function(text: string): string {
    return Handlebars.compile(buttonTemplate, {noEscape: true})({text});
}
