import API from "./API";
import Cookie from "js-cookie";

const TransactionAPI = {
  createTransaction(chatRoomId) {
    return API.post("/transaction", {chatRoomId}, {
      headers: { Authorization: "Bearer " + Cookie.get("token") },
      withCredentials: true,
    });
  },

  midtransHandler(data) {
    return API.post("/transaction/notification", data, {
        headers: { Authorization: "Bearer " + Cookie.get("token") },
        withCredentials: true,
      });
  }
};

export default TransactionAPI;
