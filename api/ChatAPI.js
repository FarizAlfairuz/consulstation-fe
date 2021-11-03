import API from "./API";

const ChatAPI = {
  initiate(consultantId) {
    return API.post("/chat/initiate", { consultantId });
  },

  sendChat(id, data) {
    return API.post(`/chat/${id}/message`, data);
  },

  getChats(id, page, limit) {
    return API.get(`/chat/${id}?page=${page}&limit=${limit}`);
  }
};

export default ChatAPI;
