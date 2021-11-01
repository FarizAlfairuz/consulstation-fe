import API from "./API";

const ChatAPI = {
  initiate(data) {
    return API.post("/chat/initiate", data);
  },

  sendChat(data, id) {
    return API.post(`/chat/${id}/message`, data);
  },

  getRoomId(id) {
    return API.get(`/chat/${id}`);
  }
};

export default ChatAPI;
