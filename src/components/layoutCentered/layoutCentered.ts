import Handlebars from 'handlebars';

import tmpl from './layoutCentered.tmpl';

export default function(content: string): string {
    return Handlebars.compile(tmpl, {noEscape: true})({content}, {})
}
