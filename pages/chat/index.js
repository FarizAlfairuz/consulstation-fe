import dynamic from "next/dynamic";
import { ActiveChatCard, ChatListCard } from "components/Cards/ChatCard";
import Layout from "components/Layout";
import useConsultant from "hooks/useConsultant";
import useUserChat from "hooks/user/useUserChat";

function ChatPage() {
  const { state } = useConsultant();
  // console.log(state.data.data);
  const ChatRoom = dynamic(() => import("components/Chat/ChatRoom"));


  const { initiateChat, selectedChat } = useUserChat();
  // console.log(selectedChat);

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
            {state.data.data &&
              state.data.data.map((cons, index) => (
                <ChatListCard
                  key={index}
                  consultantId={cons._id}
                  name={cons.username}
                  picture={cons.profilePicture.url}
                  onClick={() => initiateChat(cons._id)}
                />
              ))}
          </div>
        </div>

        {/* Chat Room */}

        <div className="col-span-2 bg-gray-300 rounded-tr-lg rounded-br-lg p-6">
          {selectedChat !== undefined ? (
            <ChatRoom />
          ) : (
            <div className="relative h-full flex justify-center items-center bg-white rounded-tr-lg rounded-br-lg">
              Click on consultant to start a chat
            </div>
          )}
        </div >
      </div>
    </Layout>
  );
}

export default ChatPage;
