import React from "react";
import { FaCog } from 'react-icons/fa';
import ConnectedUser from "./ConnectedUser";

const FloatingChat = ({ chatOpen, setChatOpen }) => {
	return (
		<div id="floating-chat">
			<div id="floating-chat-toggler" data-num="0" onClick={ () => setChatOpen(!chatOpen) }>
				<span id="chat-toggler-text">צ'אט</span>

				<div id="chat-toggler-options">
					<div className="chat-toggler-option">
						<FaCog/>
					</div>
				</div>
			</div>

			<div id="floating-chat-connected-users">
				<ConnectedUser/>
			</div>
		</div>
	);
};

export default FloatingChat;
