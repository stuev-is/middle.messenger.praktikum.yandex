import compileBlock from '../compileBlock';
import insertBlock from '../insertBlock';
import loginTemplate from './login.tmpl';

const result = compileBlock(loginTemplate, {'login': 'iss', password: '1234567890'})
insertBlock(result, 'result');
