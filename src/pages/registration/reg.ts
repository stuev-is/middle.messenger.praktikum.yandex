import compileBlock from '../compileBlock';
import insertBlock from '../insertBlock';
import regTemplate from './reg.tmpl';
import Form from '../../lib/form';

const IDS = {
    login: 'login-input',
    password: 'password-input',
    password2: 'password-input-2',
    email: 'email-input',
    phone: 'phone-input',
    first_name: 'first-name-input',
    second_name: 'second-name-input',
    button: 'button-id',
}

const result = compileBlock(regTemplate, { ...IDS })
insertBlock(result, 'result');

const formData = {
    login: 'iss',
    password: '1234567890',
    password2: '',
    email: 'iss@ie.ru',
    phone: '+7223322223322',
    first_name: 'Игорь',
    second_name: 'Стуев',
}

const formErrors = {
  login: false,
  password: false,
  password2: false,
  email: false,
  phone: false,
  first_name: false,
  second_name: false,
}

type Field = 'login' | 'password' | 'password2' | 'email' | 'phone' | 'first_name' | 'second_name';

const inputsData = [
  {name: 'login' as Field, context: {name: 'login', maxlength: '20', type: 'text', id: IDS.login}, id: IDS.login},
  {name: 'password' as Field, context: {name: 'password', maxlength: '40', type: 'password', id: IDS.password}, id: IDS.password},
  {name: 'password2' as Field, context: {name: 'password', maxlength: '40', type: 'password', id: IDS.password2}, id: IDS.password2},
  {name: 'email' as Field, context: {name: 'email', maxlength: '100', type: 'email', id: IDS.email}, id: IDS.email},
  {name: 'first_name' as Field, context: {name: 'first_name', maxlength: '40', type: 'text', id: IDS.first_name}, id: IDS.first_name},
  {name: 'second_name' as Field, context: {name: 'second_name', maxlength: '40', type: 'text', id: IDS.second_name}, id: IDS.second_name},
  {name: 'phone' as Field, context: {name: 'phone', maxlength: '15', type: 'tel', id: IDS.phone}, id: IDS.phone},

]

const buttonData = {
  text: 'Зарегистрироваться',
  id: IDS.button,
}
class RegForm extends Form<Field> {}
const form = new RegForm(inputsData, buttonData, formData, formErrors);
form.fillForm();
