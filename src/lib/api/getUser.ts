import fetchClass from '../../lib/Fetch';

const fetchInstase = new fetchClass();

export default async function getUser() {
    return new Promise((resolve, reject) => {
        fetchInstase.get('/auth/user', {withCredentials: true}).then((response: any) => {
            if(response.status !== 200) {
                reject(response.responseText)
            } else {
                // TODO: надо бы достать id, но пока мне тут нужен сам факт, что что-то пришло
                resolve('1')
            }
        });
    }
}