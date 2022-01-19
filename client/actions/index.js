import * as types from '../constants/ActionTypes'

let nextMessageId = 0;
const nextUserId = 0;

export const SetChatboxes = (chat) => ({
  type: types.SET_CHAT,
  id: 0,
  chat
})

export const addMessage = (message, user_id) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  user_id
});

export const getMessage = (message, user_id, fullname) => ({
  type: types.GET_MESSAGE,
  id: nextMessageId++,
  message,
  user_id,
  fullname
})

export const addUser = (fullname, user_id) => ({
  type: types.ADD_USER,
  id: nextUserId++,
  fullname,
  user_id
});

export const getChatMessages = (user_id, messages) => ({
  type: types.GET_CHAT_MESSAGES,
  id: 0,
  user_id,
  messages
});

export const removeUser = (user_id) => ({
  type: types.REMOVE_USER,
  user_id
});

export const setSocket = socket => ({
  type: types.SET_SOCKET,
  id: 0,
  socket
});