import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/responsive.css";
import AuthHelper from '../helpers/AuthHelper';
import { Provider } from 'react-redux';
import chatStore from '../store/chatStore';
import { getMessage, setSocket } from '../actions';
const io = require("socket.io-client");

function MyApp({ Component, pageProps }) {
	const [ socket, setSock ] = useState(null);

	const updateLastSeen = () => {
		socket.emit('seen', {
			user_id: AuthHelper.getUserId(),
			token: AuthHelper.getAccessToken()
		});
	}

	useEffect(() => {
		if (AuthHelper.isLogged()) {
			if (!socket) {
				setSock(io.connect(process.env.SOCKET_URL, {
					reconnectionDelay: 1000,
					reconnection: true,
					reconnectionAttemps: 10,
					transports: ['websocket'],
					agent: false,
					upgrade: false,
					rejectUnauthorized: false
				}));
			}

			if (socket) {
				socket.on("connect", () => {
					socket.emit('register', {
						user_id: AuthHelper.getUserId(),
						token: AuthHelper.getAccessToken()
					});

					// Last seen update
					updateLastSeen()
					setInterval(updateLastSeen, 20000)
				});

				socket.on('message', (message) => {
					console.log(message);
					chatStore.dispatch(getMessage(message.text, message.from_id, message.fullname))
				});

				chatStore.dispatch(setSocket(socket));
			}
		}
	}, [ socket ]);

	return (
		<>
			<Head>
				<title>GIVE&GET - פרויקט</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<Provider store={ chatStore }>
				<Layout>
					<Component { ...pageProps }/>
				</Layout>
			</Provider>
		</>
	);
}

export default MyApp;