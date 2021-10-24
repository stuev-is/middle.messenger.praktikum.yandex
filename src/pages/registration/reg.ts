import compileBlock from '../compileBlock';
import insertBlock from '../insertBlock';

import regTemplate from './reg.tmpl';

const context = {
    login: 'iss',
    password: '1234567890',
    password2: '',
    email: 'iss@ie.ru',
    phone: '+7223322223322',
    first_name: 'Игорь',
    second_name: 'Стуев',
};

const result = compileBlock(regTemplate, context)
insertBlock(result, 'result');
