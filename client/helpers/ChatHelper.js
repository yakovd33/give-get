import ApiHelper from './ApiHelper';
import UsersHelper from './UsersHelper';
import chatStore from '../store/chatStore';
import { addUser } from '../actions';

export default class ChatHelper {
    static isChatboxOpen (chat, user_id) {
        let chatboxes = chatStore.getState().users;

        let found = false;
        chatboxes.map((item) => {
            if (item.user_id == user_id) {
                found = true;
                return;
            }
        });

        return found;
    }

    static openChatbox (chat, setChat, user_id, name) {
        // Check if chatbox already open
        if (!this.isChatboxOpen(chat, user_id)) {
            chatStore.dispatch(addUser(name, user_id));
            
            // Add open chatbox to DB
            ApiHelper.post(`chat/open_chatbox/${ user_id }`, (res) => {
                console.log(res);
            })
        } else {
            // Chatbox already open
            console.log('open');
        }

        return false;
    }

    static sendMessage (user_id, message) {        
        ApiHelper.post(`chat/message/${ user_id }/`, { message }, (res) => {
            console.log(res);
        });
    }
}