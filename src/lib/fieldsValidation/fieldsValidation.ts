export default function(value: string, fieldName: string): string {
    const errors = [];
    switch (fieldName) {
        case 'login': 
            if (!(value.length >=3 && value.length <=20)) {
                errors.push('можно от 3 до 20 символов')
            }
            if (!(/[\D]/).test(value)) {
                errors.push('используй не только цифры')
            }
            if((/[^\-\w]/).test(value)) {
                errors.push('не стоит использовать кириллицу, спецсимволы или пробелы')
            }
            break;
            // return value.length >=3 && value.length <=20 && (/[\D]/).test(value) && !(/[^\-\w]/).test(value);
        case 'password':
        case 'password2':
            if (!(value.length >=8 && value.length <=40)) {
                errors.push('можно от 8 до 40 символов')
            }
            if (!(/[A-Z,А-Я]/).test(value)) {
                errors.push('должна быть заглавная буква')
            }
            // return value.length >=8 && value.length <=40 && (/[A-Z,А-Я]/).test(value);
            break;
        case 'first_name':
        case 'second_name': 
            if (!(/^[A-Z, А-Я]/).test(value)) {
                errors.push('напиши имя с заглавной буквы')
            }
            if ((/[^\-,A-Z,a-z,А-Я,а-я]/).test(value) || (/[\d]/).test(value)) {
                errors.push('не стоит использовать спецсимволы, цифры и пробелы')
            }
            break;
            // return (/^[A-Z, А-Я]/).test(value) && !(/[^\-,A-Z,a-z,А-Я,а-я]/).test(value) && !(/[\d]/).test(value);
        case 'phone': 
            if (!(value.length >=10 && value.length <=15)) {
                errors.push('можно от 10 до 15 символов')
            }
            if (!(/^[+]?\d+$/).test(value)) {
                errors.push('ты используешь недопустимые символы')
            }
            // return value.length >=10 && value.length <=15 && (/^[+]?\d+$/).test(value);
            break;
        case 'email': 
            if(!(/^[\w+-]+(\.[\w+-]+)*@[\w-]+(\.[\w-]+)+$/).test(value)) {
                errors.push('неправильный формат email')
            }
            break;
            // return (/^[\w+-]+(\.[\w+-]+)*@[\w-]+(\.[\w-]+)+$/).test(value);
        case 'message': 
            // return !Boolean(value);
                if(!Boolean(value)) {
                    errors.push('поле не может быть пустым')
                }
    }
    return errors.join(', ');
}