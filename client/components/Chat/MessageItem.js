import React from "react";
import PropTypes from "prop-types";

const MessageItem = ({ message }) => {
	return (
		<div className={ `message ${ message.self }` }>
			<div className="message-content-text">
				<div className="group-user-fullname">
					<a href="#">
						{/* { fullname } */}
					</a>
				</div>
				
				{ message.text }
			</div>

			{/* <div className="sent-date">{ message.fullname }</div> */}
		</div>
	);
};

MessageItem.propTypes = {
	text: PropTypes.string.isRequired,
	fullname: PropTypes.string.isRequired
}

export default MessageItem;
