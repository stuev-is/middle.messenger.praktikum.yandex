import compileBlock from '../compileBlock';
import regTemplate from './reg.tmpl';
import Form from '../../lib/Form';
import Block from '../../lib/Block';
import regController from './regController'

const regControllerInstanse = new regController();

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

type Props = Record<string, any>;

export default class Reg extends Block {
    constructor(props: Props, elementToReplaceId: string) {
      super(props, elementToReplaceId, true);
    }

    _mapStateToProps(state: Record<string, any>) {
      const props = { error: state.registrationError };
      return props;
    }

    componentDidMount() {
      // если авторизован, то кидаем сразу в сообщения
      regControllerInstanse.checkUser();
    }

    render() {
        return compileBlock(regTemplate, { ...IDS, ...this.props })
    }

    afterRender() {
      const formData = {
        login: 'iss',
        password: '1234567890A',
        password2: '1234567890A',
        email: 'iss@ie.ru',
        phone: '+7223322223322',
        first_name: 'Игорь',
        second_name: 'Стуев',
    }
    
    const formErrors = {
      login: '',
      password: '',
      password2: '',
      email: '',
      phone: '',
      first_name: '',
      second_name: '',
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
      onClick: (data: any) => this._regControllerInstanse.signup(data),
    }
    class RegForm extends Form<Field> {}
    const form = new RegForm(inputsData, buttonData, formData, formErrors);
    form.fillForm();
    }
}