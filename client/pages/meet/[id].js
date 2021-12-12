import { React, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AuthHelper from '../../helpers/AuthHelper';
import ChatHelper from '../../helpers/ChatHelper';
import UsersHelper from '../../helpers/UsersHelper';

const meet = ({ chat, setChat }) => {
    const router = useRouter();
    const { id } = router.query;
    const [ user, setUser ] = useState(AuthHelper.getUser() );
    const [ meetUser, setMeetUser ] = useState(null);

    useEffect(() => {
        // Get user details
        if (id) {
            UsersHelper.getUserById(id, (user) => setMeetUser(user));
        }
    }, [ id ]);

    const handleSendMessage = () => {
        if (meetUser) {
            let newChat = ChatHelper.openChatbox(chat, setChat, id, meetUser.fullname);

            if (newChat) {
                setChat(newChat)
            }
        }
    }

    return (
        <div className="container">
            {/* { user && user.type == 'getter' && 'getter' } */}

            <div id="meeting-chat">
                <button onClick={ handleSendMessage }>שלח הודעה</button>
            </div>

        </div>
    )
}

export default meet
