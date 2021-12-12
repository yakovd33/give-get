import React, { useState, useEffect } from 'react';
import ChatBox from './ChatBox';
import FloatingChat from './FloatingChat';
import chatStore from '../../store/chatStore';
import ApiHelper from '../../helpers/ApiHelper';
import { SetChatboxes } from '../../actions';
import { animateScroll } from "react-scroll";

const Chat = () => {
	const [ chatOpen, setChatOpen ] = useState(false);

	const [ chat, setChat ] = useState(chatStore.getState());

	chatStore.subscribe((e) => {
		setChat(Object.assign({}, chatStore.getState()));
	});

    useEffect(() => {
        // Get open chatboxes from DB
        ApiHelper.get('chat/open_chatboxes', (chat) => {
            chatStore.dispatch(SetChatboxes(chat))
        })
    }, []);
    
    return (
        <div className={ `container ${ chatOpen ? 'open' : '' }` } id="chat-wrap">
            <FloatingChat chatOpen={ chatOpen } setChatOpen={ setChatOpen }/>

            <div id="chat-boxes">
                { chat && chat.users && chat.users.map((item) => (
                    <ChatBox chatBox={ item }/>
                )) }
            </div>
        </div>
    )
}

export default Chat
