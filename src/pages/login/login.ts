import compileBlock from '../compileBlock';
import loginTemplate from './login.tmpl';
import Form from '../../lib/Form';
import Block from '../../lib/Block';
import loginController from './loginController';

const loginControllerInstance = new loginController();

import './login.css';

type Props = Record<string, any>;

const IDS = {
  login: 'login-input',
  password: 'password-input',
  button: 'button'
}

export default class Login extends Block {
    constructor(props: Props, elementToReplaceId: string) {
      super(props, elementToReplaceId, true);
    }

    _mapStateToProps(state: Record<string, any>) {
      const props = { error: state.loginError };
      return props;
    }

    componentDidMount() {
      // если авторизован, то кидаем сразу в сообщения
      loginControllerInstance.checkUser();
    }

    render() {
        return compileBlock(loginTemplate, { ...IDS, ...this.props })
    }

    afterRender() {
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
        onClick: (data: any) => loginControllerInstance.login(data),
      }
      class LoginForm extends Form<Field> {}
      const form = new LoginForm(inputsData, buttonData, formData, formErrors);
      form.fillForm();
    }
}
