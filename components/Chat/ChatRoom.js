import { PaperAirplaneIcon } from "@heroicons/react/solid";
import SenderChat from "./SenderChat";
import ReceiverChat from "./ReceiverChat";
import useUserChat from "hooks/user/useUserChat";
// import { useEffect } from "react";
import { useForm } from "react-hook-form";
import usePersistentState from "hooks/usePersistentState";


function ChatRoom() {
  const { chatState, sendChat } = useUserChat();
  const [username] = usePersistentState("username", null);


  // console.log(chatState.data.data);

  const { register, handleSubmit, reset } = useForm({
    mode: "onTouched",
  });

  // useEffect(() => {
  //   reset({ message: ''})
  // },[reset])

  const submit = (data) => {
    sendChat(data)
    setTimeout(() => { reset() }, 1000)
  }

  return (
    <div className="relative bg-white rounded-tr-lg rounded-br-lg flex flex-col h-full">
      <div className="bg-white rounded-tr-lg h-full max-h-75-screen overflow-scroll  p-6 space-y-3 flex flex-col-reverse scrollbar-thin scrollbar-thumb-gray-500 hover:scrollbar-thumb-gray-700 scrollbar-track-transparent hover:scrollbar-track-gray-200 overflow-y-scroll scrollbar-thumb-rounded-full">
        {/* <SenderChat />
        <SenderChat /> */}
        {chatState.data.data && chatState.data.data.map((chat, index) => 
          chat.sender.username === username ? (
            <SenderChat key={index} chat={chat} />
          ) : (
            <ReceiverChat key={index} chat={chat} />
          )
        )}
      </div>
      <form className="flex p-3" onSubmit={handleSubmit(submit)}>
        <input
          type="text"
          className="bg-gray-200 py-5 px-6 rounded-l-full w-full focus:outline-none"
          placeholder="Enter"
          name="message"
          {...register("message")}
        />
        <button
          type="submit"
          className="bg-gray-300 rounded-r-full py-3 px-6 flex justify-center items-center"
        >
          <PaperAirplaneIcon className="w-9 h-9 text-white rotate-90" />
        </button>
      </form>
    </div>
  );
}

export default ChatRoom;
