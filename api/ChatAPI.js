import API from "./API";
import Cookie from "js-cookie";

const ChatAPI = {
  initiate(consultantId) {
    return API.post("/chat/initiate", { consultantId }, {
      headers: { Authorization: "Bearer " + Cookie.get("token") },
      withCredentials: true,
    });
  },

  sendChat(id, data) {
    return API.post(`/chat/${id}/message`, data, {
      headers: { Authorization: "Bearer " + Cookie.get("token") },
      withCredentials: true,
    });
  },

  getChats(id, page, limit) {
    return API.get(`/chat/${id}?page=${page}&limit=${limit}`, {
      headers: { Authorization: "Bearer " + Cookie.get("token") },
      withCredentials: true,
    });
  },

  getChatroom() {
    return API.get("/chatrooms", {
      headers: { Authorization: "Bearer " + Cookie.get("token") },
      withCredentials: true,
    })
  }
};

export default ChatAPI;
