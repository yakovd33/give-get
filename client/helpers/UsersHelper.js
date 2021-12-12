import ApiHelper from './ApiHelper';

export default class UsersHelper {
    static getUserById (user_id, callback) {
        ApiHelper.get(`users/user/${ user_id }`, callback)
    }
}