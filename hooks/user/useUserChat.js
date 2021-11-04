import ChatAPI from "api/ChatAPI";
import useAPI from "hooks/useAPI";
import createPersistedState from "use-persisted-state";
import { useCallback, useEffect } from "react";

const selectChat = createPersistedState("selected_chat");

function useUserChat() {
  const [initiateState, dispatchInitiate] = useAPI();
  const [chatState, dispatchChat] = useAPI();
  const [sendState, dispatchSend] = useAPI();
  const [roomState, dispatchRoom] = useAPI();

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
        // console.log(res.data.data);
        dispatchChat({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch(() => {
        dispatchChat({ type: "FETCH_FAILED" });
      });
  }, [dispatchChat]);

  const sendChat = (data) => {
    dispatchSend({ type: "REQUEST" });
    console.log(selectedChat);
    ChatAPI.sendChat(selectedChat, data)
      .then((res) => {
        console.log(res.data);
        dispatchSend({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch(() => {
        dispatchSend({ type: "FETCH_FAILED" });
      });
  };

  const getChatroom = useCallback(() => {
    dispatchRoom({ type: "REQUEST" });
    ChatAPI.getChatroom()
      .then((res) => {
        // console.log(res.data);
        dispatchRoom({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch(() => {
        dispatchRoom({ type: "FETCH_FAILED" });
      });
  });

  useEffect(() => {
    getChat(selectedChat);
    // getChatroom()

    return () => {
      dispatchChat({ type: "RESET" });
      // dispatchRoom({ type: "RESET" });
    };
  }, [getChat, dispatchChat, selectedChat]);

  useEffect(() => {
    getChatroom()

    return () => {
      dispatchRoom({ type: "RESET" })
    }
  }, [])

  return {
    initiateState,
    initiateChat,
    selectedChat,
    selectedChat,
    chatState,
    getChat,
    sendChat,
    sendState,
    roomState
  };
}

export default useUserChat;
