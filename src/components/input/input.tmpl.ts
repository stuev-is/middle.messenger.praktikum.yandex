import './input.css';

const tmpl =  `<input class="input input_error-{{hasError}}" id="{{id}}" type="{{type}}" name="{{name}}" value="{{ value }}" maxlength="{{maxlength}}">
    <div class="input__error">{{error}}</div>`;

export default tmpl;