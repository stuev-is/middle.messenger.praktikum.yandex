import fieldsValidation from "./fieldsValidation";

const TEST_CASES_LOGIN = [
    {
        value: 'abc',
        result: '',
    },
    {
        value: '1234567890qwertyuiop',
        result: '',
    },
    {
        value: 'ab',
        result: 'можно от 3 до 20 символов',
    },
    {
        value: '1234567890qwertyuiopa',
        result: "можно от 3 до 20 символов",
    },
    {
        value: 'ab12',
        result: '',
    },
    {
        value: '1234',
        result: 'используй не только цифры',
    },
    {
        value: 'ab c',
        result: 'не стоит использовать кириллицу, спецсимволы или пробелы',
    },
    {
        value: 'ab-c',
        result: '',
    },
    {
        value: 'ab_c',
        result: '',
    },
    {
        value: 'ab%c',
        result: 'не стоит использовать кириллицу, спецсимволы или пробелы',
    },
    {
        value: 'ab-&c',
        result: 'не стоит использовать кириллицу, спецсимволы или пробелы',
    },
    {
        value: 'привет',
        result: 'не стоит использовать кириллицу, спецсимволы или пробелы',
    },
    {
        value: '11',
        result: 'можно от 3 до 20 символов, используй не только цифры',
    }
]

describe('login', () => {
    TEST_CASES_LOGIN.forEach(test => {
        it(`должен вернуть текст ошибки для ${test.value}`, () => {
            expect(fieldsValidation(test.value, 'login')).toBe(test.result);
        })
    })
})

const TEST_CASES_PASSWORD = [
    {
        value: '123456A',
        result: 'можно от 8 до 40 символов',
    },
    {
        value: '1234567A',
        result: '',
    },
    {
        value: '123456789012345678901234567890123456789A',
        result: '',
    },
    {
        value: '1234567890123456789012345678901234567890A',
        result: "можно от 8 до 40 символов",
    },
    {
        value: 'asdfghjkl',
        result: 'должна быть заглавная буква',
    },
    {
        value: 'asdfghjkL',
        result: '',
    },
    {
        value: 'приветПривет',
        result: '',
    },
]

describe('password', () => {
    TEST_CASES_PASSWORD.forEach(test => {
        it(`должен вернуть текст ошибки для ${test.value}`, () => {
            expect(fieldsValidation(test.value, 'password')).toBe(test.result);
        })
    })
})

const TEST_CASES_NAMES = [
    {
        value: '123456A',
        result: 'напиши имя с заглавной буквы, не стоит использовать спецсимволы, цифры и пробелы',
    },
    {
        value: 'Игорь',
        result: '',
    },
    {
        value: 'Стуев-Задунайский',
        result: '',
    },
    {
        value: 'Игорь Стуев',
        result: 'не стоит использовать спецсимволы, цифры и пробелы',
    },
    {
        value: 'Igor',
        result: '',
    },
    {
        value: 'igor',
        result:  'напиши имя с заглавной буквы',
    },
    {
        value: 'Иг&рь',
        result: 'не стоит использовать спецсимволы, цифры и пробелы',
    },
]

describe('name', () => {
    TEST_CASES_NAMES.forEach(test => {
        it(`должен вернуть текст ошибки для ${test.value}`, () => {
            expect(fieldsValidation(test.value, 'first_name')).toBe(test.result);
        })
    })
})

const TEST_CASES_PHONES = [
    {
        value: '1234567890',
        result: '',
    },
    {
        value: '123456789012345',
        result: '',
    },
    {
        value: '123456789',
        result: 'можно от 10 до 15 символов',
    },
    {
        value: '1234567890123456',
        result: 'можно от 10 до 15 символов',
    },
    {
        value: '+1234567890',
        result: '',
    },
    {
        value: '1234567890+',
        result: 'ты используешь недопустимые символы',
    },
    {
        value: 'aaaaaaaaaaaaa',
        result: 'ты используешь недопустимые символы',
    },
    {
        value: '+1aaaaaaaaaaa',
        result: 'ты используешь недопустимые символы',
    },
]

describe('phone', () => {
    TEST_CASES_PHONES.forEach(test => {
        it(`должен вернуть ${test.result} для ${test.value}`, () => {
            expect(fieldsValidation(test.value, 'phone')).toBe(test.result);
        })
    })
});

const TEST_CASES_EMAIL = [
    {
        value: 'is@ya.ru',
        result: '',
    },
    {
        value: 'is@ya.ru.com',
        result: '',
    },
    {
        value: 'is-stuev@ya.ru',
        result: '',
    },
    {
        value: 'is.stuev@ya.ru',
        result: '',
    },
    {
        value: 'is.ya.ru',
        result: 'неправильный формат email',
    },
    {
        value: 'privet',
        result: 'неправильный формат email',
    },
    {
        value: 'привет@ya.ru',
        result: 'неправильный формат email',
    },
    {
        value: 'is@ya.ru u',
        result: 'неправильный формат email',
    },
    {
        value: 'i%s@ya.ru',
        result: 'неправильный формат email',
    },
]

describe('email', () => {
    TEST_CASES_EMAIL.forEach(test => {
        it(`должен вернуть ${test.result} для ${test.value}`, () => {
            expect(fieldsValidation(test.value, 'email')).toBe(test.result);
        })
    })
})