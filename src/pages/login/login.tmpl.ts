import button from '../../modules/button/button';
import input from '../../modules/input/input';
import layoutCentered from '../../modules/layoutCentered/layoutCentered';

import './login.css';
import '../common.css';

const content = `
    <div class="title login__title">Вход</div>
    <form action="" method="post" class="login__form">
        ${input({label: 'Логин:', name: 'login', value: '{{login}}', maxlength: '70', type: 'text'})}
        ${input({label: 'Пароль:', name: 'password', value: '{{password}}', maxlength: '70', type: 'password'})}
        <div class="login__button">
            ${button('Войти')}
        </div>
    </form>
    <a class='link' href="../registration/reg.html">Зарегистрироваться</a>
`;

const tmpl = layoutCentered(content);

export default tmpl;