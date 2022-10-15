import axios from 'axios';


class APIService {

    constructor() {
        this.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
            
        this.http = axios.create({
            baseURL: process.env.REACT_APP_API_BASE_URL,
            headers: this.headers,
            proxy: false,
        })
    }

    async getQuotes() {
        return await new Promise(resolve =>{
            this.http.get('/quotes')
                .then(response => {
                    console.log(response)
                    resolve(response.data);
                }).catch(error => {
                    console.error('Error: ', error);
                });
        });
    }


    async getQuote(id) {
        return await new Promise(resolve =>{
            this.http.get('/quotes/'+id)
                .then(response => {
                    resolve(response.data);
                }).catch(error => {
                    console.error('Error: ', error);
                });
        });
    }
}

export default new APIService();