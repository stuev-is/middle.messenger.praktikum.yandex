import button from '../../modules/button/button.js'
import input from '../../modules/input/input.js';
import layoutCentered from '../../modules/layoutCentered/layoutCentered.js';

import './reg.css';
import '../common.css';

const content = `
    <div class="title registration__title">Регистрация</div>
    <form action="" method="post" class="registration__form">
        ${input({label: 'Почта:', name: 'email', value: '{{email}}', maxlength: '100', type: 'email'})}
        ${input({label: 'Логин:', name: 'login', value: '{{login}}', maxlength: '70', type: 'text'})}
        ${input({label: 'Имя:', name: 'first_name', value: '{{first_name}}', maxlength: '40', type: 'text'})}
        ${input({label: 'Фамилия:', name: 'second_name', value: '{{second_name}}', maxlength: '40', type: 'text'})}
        ${input({label: 'Телефон:', name: 'phone', value: '{{phone}}', maxlength: '15', type: 'tel'})}
        ${input({label: 'Пароль:', name: 'password', value: '{{password}}', maxlength: '70', type: 'password'})}
        ${input({label: 'Пароль (ещё раз):', name: 'password2', value: '{{password2}}', maxlength: '25', type: 'password'})}
        <div class="registration__button">
            ${button('Зарегистрироваться')}
        </div>
    </form>
    <a class='link' href="src/pages/login/login.html">Войти</a>
`;

const tmpl = layoutCentered(content);

export default tmpl;