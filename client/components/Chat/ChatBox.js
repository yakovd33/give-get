import React, { useState, useEffect } from 'react';
import MessageItem from "./MessageItem";
import { FaTimes } from 'react-icons/fa';
import ApiHelper from '../../helpers/ApiHelper';
import PropTypes from 'prop-types';
import NewMessage from './NewMessage';
import chatStore from '../../store/chatStore';
import { removeUser } from '../../actions';

const ChatBox = ({ chatBox }) => {
	const [ isOpen, setIsOpen ] = useState(true);

	const handleClose = () => {
		ApiHelper.delete(`chat/open_chatbox/${ chatBox.user_id }`, (res) => {
			chatStore.dispatch(removeUser(chatBox.user_id));
		})
	}

	return (
		<div className="chat-box">
			<div className="name-options" onClick={ () => setIsOpen(!isOpen) }>
				<div className="chat-name">
					{ chatBox.fullname }
				</div>

				<div className="chatbox-options">
					<div className="option-menu"></div>

					<div
						className="close-chatbox"
						onClick={ handleClose }
					>
						<FaTimes/>
					</div>
				</div>
			</div>

			<div className="chatbox-meeting-section">
				
			</div>

			{ isOpen && 
				<div className="chatbox-wrap">
					<div className="chat-content-container">
						<div className="chat-content-wrap">
							<div className="messages">
								{ chatBox.messages && chatBox.messages.map((message) => (
									<MessageItem message={ message } />
								)) }
							</div>
						</div>

						<NewMessage chatBox={ chatBox }/>
					</div>
				</div>
		 	}
		</div>
	);
};

ChatBox.propTypes = {
	messages: PropTypes.arrayOf(
	  PropTypes.shape({
		id: PropTypes.number.isRequired,
		text: PropTypes.string.isRequired,
		fullname: PropTypes.string.isRequired
	  }).isRequired
	).isRequired
  }

export default ChatBox;
