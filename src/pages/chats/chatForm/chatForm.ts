import Handlebars from 'handlebars';

import chatFormTemplate from './chatForm.tmpl';

export default function(message: string) {
    return Handlebars.compile(chatFormTemplate)({ message });
}
