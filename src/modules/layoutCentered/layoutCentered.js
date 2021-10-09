import Handlebars from 'handlebars';

import tmpl from './layoutCentered.tmpl.js';

export default function(content) {
    return Handlebars.compile(tmpl, {noEscape: true})({content}, {})
}
