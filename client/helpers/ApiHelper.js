import axios from 'axios';

export default class ApiHelper {
    static get (url, callback){
        URL = 'http://localhost:5000/' + url;

        let headers = {};

        if (localStorage.getItem('token')) {
            let user = JSON.parse(localStorage.getItem('user'));

            if (user.accessToken) {
                headers.token = 'Bearer ' + user.accessToken;
                headers.uid = user._id;
            }
        }

        axios.get(URL, { headers: headers }).then((response) => {
            callback(response.data);
        }).catch((error) => {  })
    }
    
    static post (url, params = {}, callback) {
        URL = 'http://localhost:5000/' + url;

        let headers = {};

        if (localStorage.getItem('token')) {
            let user = JSON.parse(localStorage.getItem('user'));

            if (user.accessToken) {
                headers.token = 'Bearer ' + user.accessToken;
                headers.uid = user._id;
            }
        }
        
        axios.post(URL, params, { headers: headers }).then((response) => {
            callback(response.data);
        }).catch((error) => {  })
    }

    static delete (url, callback) {
        URL = 'http://localhost:5000/' + url;
        console.log('eeeeee');

        let headers = {};

        if (localStorage.getItem('token')) {
            let user = JSON.parse(localStorage.getItem('user'));

            if (user.accessToken) {
                headers.token = 'Bearer ' + user.accessToken;
                headers.uid = user._id;
            }
        }
        
        axios.delete(URL, { headers: headers }).then((response) => {
            callback(response.data);
            console.log(response);
        }).catch((error) => { console.log(error); })
    }
}