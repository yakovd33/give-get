import axios from 'axios';
import AuthHelper from './AuthHelper';

const API_URL = process.env.API_URL;

export default class ApiHelper {
    static get (url, callback){
        let headers = {};

        if (AuthHelper.isLogged()) {
            headers.token = AuthHelper.getAccessToken();
            headers.uid = AuthHelper.getUserId();
        }

        axios.get(API_URL + url, { headers: headers }).then((response) => {
            callback(response.data);
        }).catch((error) => { console.log(error) })
    }

    
    static async getResult (url, callback){
        let headers = {};

        if (AuthHelper.isLogged()) {
            headers.token = AuthHelper.getAccessToken();
            headers.uid = AuthHelper.getUserId();
        }

        let result = await axios.get(API_URL + url, { headers: headers });

        return result;
    }
    
    
    static post (url, params = {}, callback) {
        let headers = {};

        if (AuthHelper.isLogged()) {
            headers.token = AuthHelper.getAccessToken();
            headers.uid = AuthHelper.getUserId();
        }
        
        axios.post(API_URL + url, params, { headers: headers }).then((response) => {
            callback(response.data);
        }).catch((error) => { console.log(error) })
    }

    static delete (url, callback) {
        let headers = {};

        if (AuthHelper.isLogged()) {
            headers.token = AuthHelper.getAccessToken();
            headers.uid = AuthHelper.getUserId();
        }
        
        axios.delete(API_URL + url, { headers: headers }).then((response) => {
            callback(response.data);
        }).catch((error) => { console.log(error); })
    }
}