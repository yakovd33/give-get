import axios from 'axios';
import ApiHelper from './ApiHelper';

export default class UsersHelper {
    static getUserById (user_id, callback) {
        ApiHelper.get(`users/user/${ user_id }`, callback)
    }

    static getUserProfilePicture(user) {
        console.log('user:');
        console.log(user);
        if (user?.profile_pic_path) return 'https://eropa.co.il/giveget/' + user.profile_pic_path

        return '/images/get-mini.png'
    }
}
