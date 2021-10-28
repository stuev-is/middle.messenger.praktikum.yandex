import label from '../../components/label/label';
import layoutCentered from '../../components/layoutCentered/layoutCentered';

import './reg.css';
import '../common.css';

const content = `
    <div class="title registration__title">Регистрация</div>
    <form action="" method="post" class="registration__form">
        ${label({label: 'Почта', name: 'email'})}
        <div id={{email}}></div>
        ${label({label: 'Логин', name: 'login'})}
        <div id={{login}}></div>
        ${label({label: 'Имя', name: 'first_name'})}
        <div id={{first_name}}></div>
        ${label({label: 'Фамилия', name: 'second_name'})}
        <div id={{second_name}}></div>
        ${label({label: 'Телефон', name: 'phone'})}
        <div id={{phone}}></div>
        ${label({label: 'Пароль', name: 'login'})}
        <div id={{password}}></div>
        ${label({label: 'Пароль (ещё раз)', name: 'password2'})}
        <div id={{password2}}></div>
        <div class="registration__button">
            <div id={{button}}>
        </div>
    </form>
    <a class='link' href="../login/login.html">Войти</a>
`;

const tmpl = layoutCentered(content);

export default tmpl;