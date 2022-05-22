import React, { useEffect, useState } from 'react';
import ChatHelper from '../../helpers/ChatHelper';
import UsersHelper from '../../helpers/UsersHelper';

const ConnectedUser = ({ id, fullname, last_message }) => {
    const [ profilePic, setProfilePic ] = useState(null);

    useEffect(() => {
        UsersHelper.getUserById(id, (user) => {
            setProfilePic(UsersHelper.getUserProfilePicture(user))
        })
    }, [])
    
    const handleClick = () => {
        ChatHelper.openChatbox(id, fullname);
    }

    return (
        <div className="item chatbox-trigger" onClick={ handleClick }>
            <div className="pic">
                <img
                    src={ profilePic }
                    alt=""
                />
            </div>

            <div className="textual">
                <div className="fullname">{ fullname }</div>

                <div className="distance">{ last_message }</div>
            </div>
        </div>
    )
}

export default ConnectedUser
