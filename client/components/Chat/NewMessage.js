import React, { useState } from 'react';
import chatStore from '../../store/chatStore';
import { addMessage } from '../../actions';
import ChatHelper from '../../helpers/ChatHelper';
import AuthHelper from '../../helpers/AuthHelper';
import ChatSocketHelper from '../../helpers/ChatSocketHelper';

const NewMessage = ({ chatBox }) => {
    const [ messageInput, setMessageInput ] = useState('');
    const [ socket, setSocket ] = useState(chatStore.getState().socket);

    const handleOnKeyUp = (e) => {
		if (e.keyCode == 13) {
			e.preventDefault(); // Prevent line break
			setMessageInput('');

            // Add message to the DB
			ChatHelper.sendMessage(chatBox.user_id, messageInput);

            // Add message to messages list
            chatStore.dispatch(addMessage(messageInput, chatBox.user_id));

            // Send message to socket of other user
            ChatSocketHelper.sendMessage(chatStore.getState().socket, chatBox.user_id, messageInput, AuthHelper.getUserId(), AuthHelper.getUser().fullname);
        }
	}

    return (
        <div className="new-message">
            <input
                contentEditable="plaintext-only"
                className="new-message-input"
                placeholder="הקלד הודעה..."
                value={ messageInput }
                onChange={ (e) => setMessageInput(e.target.value) }
                onKeyDown={ handleOnKeyUp }
            />
        </div>
    )
}

export default NewMessage
