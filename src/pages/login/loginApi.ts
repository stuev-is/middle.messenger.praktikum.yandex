import fetchClass from '../../lib/Fetch';

const fetchInstase = new fetchClass();

export default class Login {
    public request(data: any) {
        return fetchInstase.post('/auth/signin', {
            data: JSON.stringify(data),
            headers: {
              'content-type': 'application/json', // Данные отправляем в формате JSON
            },
            withCredentials: true,
        }).then((response: any) => {
            if(response.status !== 200) {
                throw new Error(response.responseText)
            }
        });
    }
}