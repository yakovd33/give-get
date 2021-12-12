import { combineReducers } from "redux"
import socket from "./socket"
import users from "./chatBoxes"

const chatReducer = combineReducers({
  socket,
  users
});

export default chatReducer