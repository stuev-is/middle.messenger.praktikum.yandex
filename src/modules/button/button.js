import Handlebars from 'handlebars';
import buttonTemplate from './button.tmpl.js';

export default function(text) {
    return Handlebars.compile(buttonTemplate, {noEscape: true})({text});
}
