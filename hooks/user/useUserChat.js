import ChatAPI from "api/ChatAPI";
import useAPI from "hooks/useAPI";
import createPersistedState from "use-persisted-state";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import usePersistentState from "hooks/usePersistentState";
import Cookie from "js-cookie";
import { io } from "socket.io-client";

const selectChat = createPersistedState("selected_chat");
const selectConsId = createPersistedState("selected_cons_id");
const selectIsPaid = createPersistedState("is_paid");

const baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

function useUserChat(page) {
  const [initiateState, dispatchInitiate] = useAPI();
  const [chatState, dispatchChat] = useAPI();
  const [sendState, dispatchSend] = useAPI();
  const [roomState, dispatchRoom] = useAPI();

  const [selectedChat, setSelectedChat] = selectChat("");
  const [selectedId, setSelectedId] = selectConsId("");
  const [isPaid, setIsPaid] = selectIsPaid(true);

  const [messages, setMessages] = useState([]);
  // const [message, setMessage] = useState({});

  // const socket = io('http://localhost:8000')
  // console.log(socket)
  // console.log(baseURL + `/chat/${20}?page=${0}&limit=${30}`)

  const router = useRouter();

  // const [username] = usePersistentState("username", null);

  let chats;
  if (typeof document !== "undefined") {
    chats = window.document.getElementById("chats");
  }

  const scrollToBottom = () => {
    chats.scrollTop = chats.scrollHeight;
  };

  const initiateChat = (id) => {
    // console.log(id);
    setSelectedId(id);

    dispatchInitiate({ type: "REQUEST" });
    ChatAPI.initiate(id)
      .then((res) => {
        // console.log(res.data.data);
        dispatchInitiate({ type: "FETCH_SUCCESS", payload: res.data });
        setSelectedChat(res.data.data.chatRoomId);
        router.push("/chat");
      })
      .catch(() => {
        dispatchInitiate({ type: "FETCH_FAILED" });
      });
  };

  const getChat = useCallback(() => {
    // console.log(id)
    // console.log("get chat list");
    dispatchChat({ type: "REQUEST" });
    ChatAPI.getChats(selectedChat, 0, 30)
      .then((res) => {
        // console.log(res.data.data);
        dispatchChat({ type: "FETCH_SUCCESS", payload: res.data });
        setMessages(res.data.data);
        scrollToBottom();
      })
      .catch(() => {
        dispatchChat({ type: "FETCH_FAILED" });
      });
  }, [dispatchChat]);

  // const addChat = () => {
  //   console.log(message)
  //   setMessages([...messages, message])
  // }

  const sendChat = (data) => {
    dispatchSend({ type: "REQUEST" });
    // console.log("send chat");
    ChatAPI.sendChat(selectedChat, data)
      .then((res) => {
        // console.log(res.data.data);
        dispatchSend({ type: "FETCH_SUCCESS", payload: res.data });
        // getChat()
        // setMessage(res.data.data);
        // console.log(message)
        // addChat()
        setMessages([res.data.data, ...messages]);
        scrollToBottom();
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
  }, [dispatchRoom]);

  const getIsPaid = useCallback(
    (id, paid) => {
      if (id === selectedChat) {
        // console.log(id + " " + selectedChat);
        // console.log(paid);
        setIsPaid(paid);
        // window.location.reload();
      }
    },
    [setIsPaid]
  );

  const changeChat = (id) => {
    setSelectedChat(id);
    window.location.reload();
  };

  if (page === "chat") {
    useEffect(() => {
      getChat();

      return () => {
        dispatchChat({ type: "RESET" });
      };
    }, [getChat, dispatchChat]);

    useEffect(() => {
      getChatroom();

      return () => {
        dispatchRoom({ type: "RESET" });
      };
    }, [getChatroom, dispatchRoom]);

    // useEffect(() => {
    //   ChatAPI.getChats(selectedChat, 0, 30)
    //     .then((res) => {
    //       setMessages(res.data.data);
    //       console.log(res.data.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }, [setMessages]);
  }

  return {
    initiateState,
    initiateChat,
    selectedChat,
    selectedChat,
    chatState,
    getChat,
    sendChat,
    sendState,
    roomState,
    getIsPaid,
    setIsPaid,
    isPaid,
    messages,
    setSelectedChat,
    selectedId,
    changeChat,
    setIsPaid
  };
}

export default useUserChat;
