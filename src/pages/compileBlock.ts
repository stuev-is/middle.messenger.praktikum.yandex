import Handlebars from 'handlebars';

export default function(template: string, context: Record<string, any>) {
    return Handlebars.compile(template)(context);
}