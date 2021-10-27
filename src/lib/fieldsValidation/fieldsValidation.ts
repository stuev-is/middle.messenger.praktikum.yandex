export default function(value: string, fieldName: string): boolean {
    switch (fieldName) {
        case 'login': 
            console.log('aaa', (/[\W]/).test(value));
            return value.length >=3 && value.length <=20 && (/[\D]/).test(value) && !(/[^\-\w]/).test(value);
        case 'password':
            return value.length >=8 && value.length <=40 && (/[A-Z,А-Я]/).test(value);
        case 'first_name':
        case 'second_name': 
            return (/^[A-Z, А-Я]/).test(value) && !(/[^\-,A-Z,a-z,А-Я,а-я]/).test(value) && !(/[\d]/).test(value);
        case 'phone': 
            return value.length >=10 && value.length <=15 && (/^[+]?\d+$/).test(value);
        case 'email': 
            return (/^[\w+-]+(\.[\w+-]+)*@[\w-]+(\.[\w-]+)+$/).test(value);
        case 'message': 
            return Boolean(value);
        default:
            return true;
    }
}