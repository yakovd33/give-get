import * as types from "../constants/ActionTypes";
import ApiHelper from "../helpers/ApiHelper";
import UsersHelper from "../helpers/UsersHelper";

const users = (state = [], action) => {
	switch (action.type) {
		case types.ADD_USER:
			return state.concat([
				{
					fullname: action.fullname,
					user_id: action.user_id,
					messages: [],
				},
			]);
		case types.USERS_LIST:
			return action.users;
		case types.ADD_MESSAGE:
			let chatbox = state.find(cb => cb.user_id == action.user_id);
            
			if (chatbox) {
				let tmpMessages = chatbox.messages;
				tmpMessages.push({
					text: action.message,
					self: 'self'
				});

				chatbox.messages = tmpMessages;
			}

			return state;
		case types.REMOVE_USER :
			return state.filter(chatbox => chatbox.user_id != action.user_id)
		case types.GET_MESSAGE:
			let chatbox1 = state.find(chatbox => chatbox.user_id == action.user_id);

			if (chatbox1) {
				let tmpMessages1 = chatbox1.messages;
				tmpMessages1.push({
					text: action.message,
					self: ''
				});

				// chatbox1.messages = tmpMessages1;
			} else {
				// Open chatbox
				// TODO: Get the previous messages from API
			}

			return state;
		case types.GET_CHAT_MESSAGES :
			let chatbox3 = state.find(cb1 => cb1.user_id == action.user_id);
            
			if (chatbox3) {
				chatbox3.messages = action.messages;
			}

			return state;
		case types.SET_CHAT :
			return action.chat;
		default:
			return state;
	}
};

export default users;
