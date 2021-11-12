import dynamic from "next/dynamic";
import { ActiveChatCard, ChatListCard } from "components/Cards/ChatCard";
import Layout from "components/Layout";
import useUserChat from "hooks/user/useUserChat";
import Button from "components/Button";
import useTransaction from "hooks/user/useTransaction";

function ChatPage() {
  const ChatRoom = dynamic(() => import("components/Chat/ChatRoom"));

  const { initiateChat, selectedChat, roomState, isPaid } = useUserChat("chat");
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
                  consultantId={cons.consultantId}
                  name={cons.otherUser.username}
                  picture={cons.otherUser.profilePicture.url}
                  isPaid={cons.isPaid}
                  onClick={() => initiateChat(cons.consultantId)}
                />
              ))}
          </div>
        </div>

        {/* Chat Room */}

        <div className="col-span-1 md:col-span-2 bg-gray-300 rounded-tr-lg rounded-br-lg p-6">
          <ChatRoom isPaid={isPaid} />
          {/* {isPaid ? (
          ) : (
            <div className="relative h-full flex flex-col space-y-8 justify-center items-center bg-white rounded-tr-lg rounded-br-lg">
              <div>
                Please continue to payment to start a chat with this consultant
              </div>
              <Button
                color="bg-orangeWeb"
                onClick={() => createTransaction(selectedChat)}
                disabled={state.disabled}
              >
                Continue to Payment
              </Button>
            </div>
          )} */}
        </div>
      </div>
    </Layout>
  );
}

export default ChatPage;
