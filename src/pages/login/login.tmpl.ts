import label from '../../components/label/label';
import layoutCentered from '../../components/layoutCentered/layoutCentered';

import './login.css';
import '../common.css';

const content = `
    <div class="title login__title">Вход</div>
    <form action="" method="post" class="login__form" id="login-form">
        ${label({label: 'Логин', id: '{{ login }}'})}
        <div id="{{ login }}"></div>
        ${label({label: 'Пароль', id: '{{ password }}'})}
        <div id="{{ password }}"></div>
        <div class="login__button">
            <div class="login__error">{{ error }}</div>
            <div id="{{ button }}"></div>
        </div>
    </form>
    <a class='link' href="/sign-up">Зарегистрироваться</a>
`;

const tmpl = layoutCentered(content);

export default tmpl;