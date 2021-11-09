import compileBlock from '../compileBlock';
import insertBlock from '../insertBlock';
import loginTemplate from './login.tmpl';
import Form from '../../lib/form';

const IDS = {
    login: 'login-input',
    password: 'password-input',
    button: 'button'
}

const result = compileBlock(loginTemplate, { ...IDS })

insertBlock(result, 'result');

const formData = {
  login: 'IgorStuev',
  password: '1234567890',
}

const formErrors = {
  login: '',
  password: '',
}

type Field = 'login' | 'password';

const inputsData = [
  {name: 'login' as Field, context: {name: 'login', maxlength: '20', type: 'text', id: IDS.login}, id: IDS.login},
  {name: 'password' as Field, context: {name: 'password', maxlength: '40', type: 'password', id: IDS.password}, id: IDS.password}
]

const buttonData = {
  text: 'Войти',
  id: IDS.button,
}
class LoginForm extends Form<Field> {}
const form = new LoginForm(inputsData, buttonData, formData, formErrors);
form.fillForm();

