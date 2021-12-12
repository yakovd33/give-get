import axios from 'axios';
import AuthHelper from './AuthHelper';

export default class ApiHelper {
    static get (url, callback){
        let headers = {};

        if (AuthHelper.isLogged()) {
            headers.token = AuthHelper.getAccessToken();
            headers.uid = AuthHelper.getUserId();
        }

        axios.get('http://localhost:5000/' + url, { headers: headers }).then((response) => {
            callback(response.data);
        }).catch((error) => {  })
    }
    
    static post (url, params = {}, callback) {
        let headers = {};

        if (AuthHelper.isLogged()) {
            headers.token = AuthHelper.getAccessToken();
            headers.uid = AuthHelper.getUserId();
        }
        
        axios.post('http://localhost:5000/' + url, params, { headers: headers }).then((response) => {
            callback(response.data);
        }).catch((error) => {  })
    }

    static delete (url, callback) {
        let headers = {};

        if (AuthHelper.isLogged()) {
            headers.token = AuthHelper.getAccessToken();
            headers.uid = AuthHelper.getUserId();
        }
        
        axios.delete('http://localhost:5000/' + url, { headers: headers }).then((response) => {
            callback(response.data);
        }).catch((error) => { console.log(error); })
    }
}