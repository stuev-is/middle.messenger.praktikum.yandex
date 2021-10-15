import Handlebars from 'Handlebars';

import loginTemplate from './login.tmpl';

const resultHTML = Handlebars.compile(loginTemplate)({'login': 'iss', password: '1234567890'});
const resultElem = document.getElementById('result');
resultElem.innerHTML = resultHTML;
