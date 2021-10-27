import compileBlock from '../compileBlock';
import insertBlock from '../insertBlock';
import loginTemplate from './login.tmpl';
import Button from '../../components/button/button';
import Input from '../../components/input/input';

const IDS = {
    loginInputId: 'login-input',
    passwordInputId: 'password-input',
    buttonId: 'button'
}

const result = compileBlock(loginTemplate, { ...IDS })

insertBlock(result, 'result');

const inputEvents = {
  'blur': (e) => console.log('blur', e.target.value),
  'focus': (e) => console.log('focus', e.taget.value),
};

const loginInput = new Input(
  {
    context: {label: 'Логин:', name: 'login', value: 'IgorStuev', maxlength: '70', type: 'text'},
    events: inputEvents,
  }, 
  IDS.loginInputId)
loginInput.insertElement();

const passwordInput = new Input(
  {
    context: {label: 'Пароль:', name: 'password', value: '1234567890', maxlength: '70', type: 'password'},
    events: inputEvents,
  }, 
  IDS.passwordInputId)
passwordInput.insertElement();

const button = new Button({text: 'Войти', events: {click: () => console.log('click')}}, IDS.buttonId);
console.log('button', button.getContent())
button.insertElement();


