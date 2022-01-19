import React from 'react';
import ChatHelper from '../../helpers/ChatHelper';

const ConnectedUser = ({ id, fullname, last_message }) => {
    const handleClick = () => {
        ChatHelper.openChatbox(id, fullname);
    }

    return (
        <div className="item chatbox-trigger" onClick={ handleClick }>
            <div className="pic">
                <img
                    src="http://localhost/AlphaDate/uploads/profile-pics/776b33b2fdbe47e64481d78d1c13d2b1d427dbd4ae56937615a6605d4303b497.jpg"
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
