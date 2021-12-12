const socket = (state = [], action) => {
    switch (action.type) {
      case 'SET_SOCKET':
        return action.socket
      case 'GET_SOCKET':
        return state
      default:
        return state
    }
}
  
export default socket