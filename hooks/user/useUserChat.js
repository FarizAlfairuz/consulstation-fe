import ChatAPI from "api/ChatAPI";
import useAPI from "hooks/useAPI";
import createPersistedState from "use-persisted-state";
import { useCallback, useEffect } from "react";

const selectChat = createPersistedState("selected_chat");

function useUserChat() {
  const [initiateState, dispatchInitiate] = useAPI();
  const [chatState, dispatchChat] = useAPI();
  const [sendState, dispatchSend] = useAPI();

  const [selectedChat, setSelectedChat] = selectChat("");

  const initiateChat = (id) => {
    // console.log(id);
    dispatchInitiate({ type: "REQUEST" });
    ChatAPI.initiate(id)
      .then((res) => {
        // console.log(res.data.data);
        dispatchInitiate({ type: "FETCH_SUCCESS", payload: res.data });
        setSelectedChat(res.data.data.chatRoomId);
      })
      .catch(() => {
        dispatchInitiate({ type: "FETCH_FAILED" });
      });
  };

  const getChat = useCallback(() => {
    // console.log(id)
    dispatchChat({ type: "REQUEST" });
    ChatAPI.getChats(selectedChat, 0, 30)
      .then((res) => {
        console.log(res.data.data);
        dispatchChat({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch(() => {
        dispatchChat({ type: "FETCH_FAILED" });
      });
  }, [dispatchChat])

  const sendChat = (data) => {
    dispatchSend({ type: "REQUEST" });
    console.log(selectedChat)
    ChatAPI.sendChat(selectedChat, data)
      .then((res) => {
        console.log(res.data);
        dispatchSend({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch(() => {
        dispatchSend({ type: "FETCH_FAILED" });
      });
  }

  useEffect(() => {
    getChat(selectedChat)
    return () => {
      dispatchChat({ type: "RESET" })
    }
  }, [getChat, dispatchChat, selectedChat])

  return { initiateState, initiateChat, selectedChat, selectedChat, chatState, getChat, sendChat, sendState };
}

export default useUserChat;
