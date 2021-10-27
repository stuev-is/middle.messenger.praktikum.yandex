import button from '../../components/button/button';
import label from '../../components/label/label';
import layoutCentered from '../../components/layoutCentered/layoutCentered';

import './login.css';
import '../common.css';

const content = `
    <div class="title login__title">Вход</div>
    <form action="" method="post" class="login__form" id="login-form">
        ${label({label: 'Логин', name: 'login'})}
        <div id={{ loginInputId }}></div>
        ${label({label: 'Пароль', name: 'password'})}
        <div id={{ passwordInputId }}></div>
        <div class="login__button">
            <div id={{ buttonId }}></div>
        </div>
    </form>
    <a class='link' href="../registration/reg.html">Зарегистрироваться</a>
`;

const tmpl = layoutCentered(content);

export default tmpl;