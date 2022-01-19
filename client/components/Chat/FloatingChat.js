import React, { useState, useEffect } from 'react';
import { FaCog } from 'react-icons/fa';
import ConnectedUser from "./ConnectedUser";
import ApiHelper from '../../helpers/ApiHelper';



const FloatingChat = ({ chatOpen, setChatOpen }) => {
	const [ users, setUsers ] = useState([]);

	useEffect(() => {
		// Get list of chats
		ApiHelper.get('chat/chat_list', (chats) => {
			setUsers(chats);
		});
	}, []);
	
	return (
		<div id="floating-chat">
			<div id="floating-chat-toggler" data-num={ users.length } onClick={ () => setChatOpen(!chatOpen) }>
				<span id="chat-toggler-text">צ'אט</span>

				<div id="chat-toggler-options">
					<div className="chat-toggler-option">
						<FaCog/>
					</div>
				</div>
			</div>

			<div id="floating-chat-connected-users">
				{ users.map((user) => (
					<ConnectedUser id={ user.id } fullname={ user.fullname } last_message={ user.last_message }/>
				)) }
			</div>
		</div>
	);
};

export default FloatingChat;
