import ApiHelper from './ApiHelper';

export default class ChatSocketHelper {
    static sendMessage (socket, user_id, message, from_id, fullname) {
        socket.emit('message', {
            user_id,
            message,
            from_id,
            fullname
        })
    }
}