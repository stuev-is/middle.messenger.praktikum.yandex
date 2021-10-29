import fieldsValidation from "./fieldsValidation";

const TEST_CASES_LOGIN = [
    {
        value: 'abc',
        result: true,
    },
    {
        value: '1234567890qwertyuiop',
        result: true,
    },
    {
        value: 'ab',
        result: false,
    },
    {
        value: '1234567890qwertyuiopa',
        result: false,
    },
    {
        value: 'ab12',
        result: true,
    },
    {
        value: '1234',
        result: false,
    },
    {
        value: 'ab c',
        result: false,
    },
    {
        value: 'ab-c',
        result: true,
    },
    {
        value: 'ab_c',
        result: true,
    },
    {
        value: 'ab%c',
        result: false,
    },
    {
        value: 'ab-&c',
        result: false,
    },
    {
        value: 'привет',
        result: false,
    },
]

describe('login', () => {
    TEST_CASES_LOGIN.forEach(test => {
        it(`должен вернуть ${test.result} для ${test.value}`, () => {
            expect(fieldsValidation(test.value, 'login')).toBe(test.result);
        })
    })
})

const TEST_CASES_PASSWORD = [
    {
        value: '123456A',
        result: false,
    },
    {
        value: '1234567A',
        result: true,
    },
    {
        value: '123456789012345678901234567890123456789A',
        result: true,
    },
    {
        value: '1234567890123456789012345678901234567890A',
        result: false,
    },
    {
        value: 'asdfghjkl',
        result: false,
    },
    {
        value: 'asdfghjkL',
        result: true,
    },
    {
        value: 'приветПривет',
        result: true,
    },
]

describe('password', () => {
    TEST_CASES_PASSWORD.forEach(test => {
        it(`должен вернуть ${test.result} для ${test.value}`, () => {
            expect(fieldsValidation(test.value, 'password')).toBe(test.result);
        })
    })
})

const TEST_CASES_NAMES = [
    {
        value: '123456A',
        result: false,
    },
    {
        value: 'Игорь',
        result: true,
    },
    {
        value: 'Стуев-Задунайский',
        result: true,
    },
    {
        value: 'Игорь Стуев',
        result: false,
    },
    {
        value: 'Igor',
        result: true,
    },
    {
        value: 'igor',
        result: false,
    },
    {
        value: 'Иг&рь',
        result: false,
    },
]

describe('name', () => {
    TEST_CASES_NAMES.forEach(test => {
        it(`должен вернуть ${test.result} для ${test.value}`, () => {
            expect(fieldsValidation(test.value, 'first_name')).toBe(test.result);
        })
    })
})

const TEST_CASES_PHONES = [
    {
        value: '1234567890',
        result: true,
    },
    {
        value: '123456789012345',
        result: true,
    },
    {
        value: '123456789',
        result: false,
    },
    {
        value: '1234567890123456',
        result: false,
    },
    {
        value: '+1234567890',
        result: true,
    },
    {
        value: '1234567890+',
        result: false,
    },
    {
        value: 'aaaaaaaaaaaaa',
        result: false,
    },
    {
        value: '+1aaaaaaaaaaa',
        result: false,
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
        result: true,
    },
    {
        value: 'is@ya.ru.com',
        result: true,
    },
    {
        value: 'is-stuev@ya.ru',
        result: true,
    },
    {
        value: 'is.stuev@ya.ru',
        result: true,
    },
    {
        value: 'is.ya.ru',
        result: false,
    },
    {
        value: 'privet',
        result: false,
    },
    {
        value: 'привет@ya.ru',
        result: false,
    },
    {
        value: 'is@ya.ru u',
        result: false,
    },
    {
        value: 'i%s@ya.ru',
        result: false,
    },
]

describe('email', () => {
    TEST_CASES_EMAIL.forEach(test => {
        it(`должен вернуть ${test.result} для ${test.value}`, () => {
            expect(fieldsValidation(test.value, 'email')).toBe(test.result);
        })
    })
})