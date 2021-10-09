import Handlebars from 'Handlebars';
import loginTemplate from './reg.tmpl.js';

const resultHTML = Handlebars.compile(loginTemplate)({
    login: 'iss',
    password: '1234567890',
    password2: '',
    email: 'iss@ie.ru',
    phone: '+7223322223322',
    first_name: 'Игорь',
    second_name: 'Стуев',
});
const resultElem = document.getElementById('result');
resultElem.innerHTML = resultHTML;
