import dynamic from "next/dynamic";
import { ActiveChatCard, ChatListCard } from "components/Cards/ChatCard";
import Layout from "components/Layout";
import useUserChat from "hooks/user/useUserChat";
import Button from "components/Button";
import useTransaction from "hooks/user/useTransaction";
import withAuth from "HOC/user/withAuth";
import Cookie from "js-cookie";

function ChatPage() {
  const ChatRoom = dynamic(() => import("components/Chat/ChatRoom"));

  const { selectedChat, roomState, isPaid, changeChat } =
    useUserChat("chat");
  // console.log(roomState.data.data);
  // console.log(isPaid)

  return (
    <Layout>
      <h1 className="font-poppins text-4xl font-bold">Chat</h1>
      <h4 className="font-nunito text-2xl">
        Let’s have a chat with your consultant!
      </h4>

      <div className="bg-gray-200 grid grid-cols-1 md:grid-cols-3 rounded-lg min-h-half-screen ">
        <div className="hidden md:block md:col-span-1 p-6 space-y-4">
          {/* <h6 className="text-paragraph-1 font-bold mb-4">Active Consultant</h6>
          <ActiveChatCard /> */}
          <h6 className="text-paragraph-1 font-bold mb-4">Other Consultants</h6>
          <div className="flex flex-col space-y-4">
            {roomState.data.data &&
              roomState.data.data.map((cons, index) => (
                <ChatListCard
                  key={index}
                  id={cons._id}
                  selectedChat={selectedChat}
                  firstName={cons.otherUser.firstName}
                  lastName={cons.otherUser.lastName}
                  picture={cons.otherUser.profilePicture.url}
                  isPaid={cons.isPaid}
                  onClick={() => {
                    changeChat(cons._id)
                  }}
                />
              ))}
          </div>
        </div>

        {/* Chat Room */}

        <div className="col-span-1 md:col-span-2 bg-gray-300 rounded-tr-lg rounded-br-lg p-6">
          <ChatRoom isPaid={isPaid} />
        </div>
      </div>
    </Layout>
  );
}

export default withAuth(ChatPage);
