enum METHODS {
    GET = 'GET',
    PUT = 'PUT',
    POST = 'POST',
    DELETE = 'DELETE',
};
  
function queryStringify(data = {}) {
    return Object.entries(data).map(([key, value]) => `${key}=${value}`).join('&');
}

type Options = {
    headers?: Record<string, string>;
    data?: Document | XMLHttpRequestBodyInit;
    timeout?: number;
    method?: string;
    credentials?: string;
    mode?: string;
    withCredentials?: boolean;
}
  
export default class HTTPTransport {
    _baseUrl = 'https://ya-praktikum.tech/api/v2';
    get = (url: string, options: Options = {}) => {
        const query = queryStringify(options.data);
        const urlWithParams = query ? `${url}?${query}` : url;
    
        return this.request(urlWithParams, {...options, method: METHODS.GET}, options.timeout);
    };

    put = (url: string, options: Options = {}) => {
        return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    };

    post = (url: string, options: Options = {}) => {
        return this.request(url, {...options, method: METHODS.POST}, options.timeout);
    };

    delete = (url: string, options: Options = {}) => {
        return this.request(url, {...options, method: METHODS.DELETE }, options.timeout);
    };

    request = (url: string, options: Options, timeout = 5000) => {
        const { method, data, headers, withCredentials } = options;
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            method && xhr.open(method, `${this._baseUrl}${url}`, true);

            xhr.timeout = timeout;
            xhr.withCredentials = Boolean(withCredentials);

            if(headers) {
                Object.entries(headers).forEach(([key, value]) => {
                    xhr.setRequestHeader(key, value);
                }) 
            }

            xhr.onload = () => {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            if (method === METHODS.GET || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        }); 

    };
}
  