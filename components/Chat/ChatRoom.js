import { PaperAirplaneIcon } from "@heroicons/react/solid";
import SenderChat from "./SenderChat";
import ReceiverChat from "./ReceiverChat";
import useUserChat from "hooks/user/useUserChat";
// import { useEffect } from "react";
import { useForm } from "react-hook-form";
import usePersistentState from "hooks/usePersistentState";
import Button from "components/Button";
import useTransaction from "hooks/user/useTransaction";

function ChatRoom(props) {
  const { isPaid } = props;
  // console.log(isPaid)
  const { chatState, sendChat, selectedChat } = useUserChat("chat");
  const [username] = usePersistentState("username", null);

  const { state, createTransaction } = useTransaction();
  console.log(state);

  const { register, handleSubmit, reset } = useForm({
    mode: "onTouched",
  });


  const submit = (data) => {
    sendChat(data);
    setTimeout(() => {
      reset();
    }, 500);
  };

  return isPaid === false ? (
    <div className="relative bg-white rounded-tr-lg rounded-br-lg flex flex-col h-full">
      {/* <div className="bg-platinum py-2 px-4">hehe</div> */}
      <div className="bg-white rounded-tr-lg h-full max-h-75-screen overflow-scroll  p-6 space-y-3 flex flex-col-reverse scrollbar-thin scrollbar-thumb-gray-500 hover:scrollbar-thumb-gray-700 scrollbar-track-transparent hover:scrollbar-track-gray-200 overflow-y-scroll scrollbar-thumb-rounded-full">
        {chatState.data.data &&
          chatState.data.data.map((chat, index) =>
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
          className="bg-gray-200 py-2 px-4 sm:py-3 sm:px-5 md:py-5 md:px-6 rounded-l-full w-full focus:outline-none"
          placeholder="Enter"
          name="message"
          {...register("message")}
        />
        <button
          type="submit"
          className="bg-gray-300 rounded-r-full py-3 px-6 flex justify-center items-center"
        >
          <PaperAirplaneIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-9 md:h-9 text-white rotate-90" />
        </button>
      </form>
    </div>
  ) : (
    <div className="relative h-full flex flex-col space-y-8 justify-center items-center bg-white rounded-tr-lg rounded-br-lg">
      <div>Please continue to payment to start a chat with this consultant</div>
      <Button
        color="bg-orangeWeb"
        onClick={() => createTransaction(selectedChat)}
        disabled={state.disabled}
      >
        Continue to Payment
      </Button>
    </div>
  );
}

export default ChatRoom;
