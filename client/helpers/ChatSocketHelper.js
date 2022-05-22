export default class ChatSocketHelper {
    static sendMessage (socket, user_id, message, from_id, fullname, token) {
        socket.emit('message', {
            token,
            user_id,
            message,
            from_id,
            fullname
        })
    }
}