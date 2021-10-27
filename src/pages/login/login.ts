import compileBlock from '../compileBlock';
import insertBlock from '../insertBlock';
import loginTemplate from './login.tmpl';
import Button from '../../components/button/button';
import Input from '../../components/input/input';

import fieldsValidation from '../../lib/fieldsValidation/fieldsValidation';

const IDS = {
    loginInputId: 'login-input',
    passwordInputId: 'password-input',
    buttonId: 'button',
    formId: 'login-form',
}

const result = compileBlock(loginTemplate, { ...IDS })

insertBlock(result, 'result');

const formData = {
  login: 'IgorStuev',
  password: '1234567890',
}

const errors = {
  login: false,
  password: false,
}

const validateField = (inputName: 'login' | 'password', block: any) => {
  const value = formData[inputName];
  errors[inputName] = !fieldsValidation(value, inputName);
  block.setProps({error: errors[inputName], value: formData[inputName]});
}

const getInputEvents = (inputName: 'login' | 'password', block: any) => {
  return {
    'blur': () => {
      validateField(inputName, block);
    },
    'focus': () => console.log('focus'),
    'input': (e: Event) => {
      formData[inputName] = (e.target as HTMLInputElement)?.value;
      console.log('formData', formData);
    },
  }
};

const loginInput = new Input(
  {
    context: {label: 'Логин:', name: 'login', maxlength: '70', type: 'text', error: errors.login},
    value: 'IgorStuev',
  }, 
  IDS.loginInputId)
loginInput.insertElement();
loginInput.setProps({events: getInputEvents('login', loginInput)});

const passwordInput = new Input(
  {
    context: {label: 'Пароль:', name: 'password', maxlength: '70', type: 'password'},
    value: '1234567890',
  }, 
  IDS.passwordInputId)
passwordInput.insertElement();
passwordInput.setProps({events: getInputEvents('password', passwordInput)})

const onButtonClick = () => {
  validateField('login', loginInput)
  validateField('password', passwordInput);
}

const button = new Button({text: 'Войти', events: {click: onButtonClick }}, IDS.buttonId);
button.insertElement();

