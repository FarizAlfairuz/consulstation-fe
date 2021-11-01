import { PaperAirplaneIcon } from "@heroicons/react/outline";
import { ActiveChatCard, ChatListCard } from "components/Cards/ChatCard";
import ReceiverChat from "components/Chat/ReceiverChat";
import SenderChat from "components/Chat/SenderChat";
import Layout from "components/Layout";
import useConsultant from "hooks/useConsultant";

function ChatPage() {
  const { state } = useConsultant();
  console.log(state.data.data);
  return (
    <Layout>
      <h1 className="font-poppins text-4xl font-bold">Chat</h1>
      <h4 className="font-nunito text-2xl">
        Let’s have a chat with your consultant!
      </h4>

      <div className="bg-gray-200 grid grid-cols-3 rounded-lg min-h-half-screen ">
        <div className="col-span-1 p-6 space-y-4">
          {/* <h6 className="text-paragraph-1 font-bold mb-4">Active Consultant</h6>
          <ActiveChatCard /> */}
          <h6 className="text-paragraph-1 font-bold mb-4">Other Consultant</h6>
          <div className="flex flex-col space-y-4">
            {state.data.data && state.data.data.map((cons, index) => (
              <ChatListCard key={index} name={cons.username} picture={cons.profilePicture.url} />
            ))}
          </div>
        </div>
        <div className="col-span-2 bg-gray-300 rounded-tr-lg rounded-br-lg p-6">
          <div className="relative  bg-white rounded-tr-lg rounded-br-lg">
            <div className="bg-white rounded-tr-lg  h-full max-h-75-screen overflow-scroll  p-6 space-y-3 flex flex-col justify-between scrollbar-thin scrollbar-thumb-gray-500 hover:scrollbar-thumb-gray-700 scrollbar-track-transparent hover:scrollbar-track-gray-200 overflow-y-scroll scrollbar-thumb-rounded-full">
              <SenderChat />
              <SenderChat />

              <ReceiverChat />
              <ReceiverChat />
              <SenderChat />
              <SenderChat />
            </div>
            <div className="flex p-3">
              <input
                className="bg-gray-200 py-5 px-6 rounded-l-full w-full focus:outline-none"
                placeholder="Enter"
              />
              <div className="bg-gray-300 rounded-r-full py-3 px-6 flex justify-center items-center">
                <PaperAirplaneIcon className="w-9 h-9 text-white rotate-90" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ChatPage;
