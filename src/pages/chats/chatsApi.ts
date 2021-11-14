import fetchClass from '../../lib/Fetch';

const fetchInstase = new fetchClass();

export default class Chats {
    public getChats() {
        return fetchInstase.get('/chats', {
            headers: {
              'content-type': 'application/json', // Данные отправляем в формате JSON
            },
            withCredentials: true,
        }).then((response: any) => {
            if(response.status !== 200) {
                throw new Error(response.responseText)
            }
            return response;
        });
    }
    public addChat() {
        return fetchInstase.post('/chats', {
            data: JSON.stringify({title: 'title'}),
            headers: {
              'content-type': 'application/json', // Данные отправляем в формате JSON
            },
            withCredentials: true,
        }).then((response: any) => {
            if(response.status !== 200) {
                throw new Error(response.responseText)
            }
            return response;
        });
    }

    public addChatUser(chatId: string, userId: string) {
        return fetchInstase.put('/chats/users', {
            data: JSON.stringify({users: [userId], chatId}),
            headers: {
                'content-type': 'application/json', // Данные отправляем в формате JSON
              },
            withCredentials: true,
        }).then((response: any) => {
            if(response.status !== 200) {
                throw new Error(response.responseText)
            }
            return response;
        });
    }

    public deleteChatUser(chatId: string, userId: string) {
        return fetchInstase.delete('/chats/users', {
            data: JSON.stringify({users: [userId], chatId}),
            headers: {
                'content-type': 'application/json', // Данные отправляем в формате JSON
              },
            withCredentials: true,
        }).then((response: any) => {
            if(response.status !== 200) {
                throw new Error(response.responseText)
            }
            return response;
        });
    }

    public getUsersByLogin(login: string) {
        return fetchInstase.post('/user/search', {
            data: JSON.stringify({login}),
            headers: {
                'content-type': 'application/json', // Данные отправляем в формате JSON
              },
            withCredentials: true,
        }).then((response: any) => {
            if(response.status !== 200) {
                throw new Error(response.responseText)
            }
            return response;
        });
    }
}