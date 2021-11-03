import { PaperAirplaneIcon } from "@heroicons/react/solid";
import ReceiverChat from "components/Chat/ReceiverChat";
import SenderChat from "components/Chat/SenderChat";

function ChatListCard(props) {
  const { name, picture, onClick } = props;

  return (
    <div
      onClick={onClick}
      className="flex items-center space-x-3 bg-gray-300 rounded-lg p-5"
    >
      <img className="h-14 w-14 rounded-full" src={picture} alt="Consultant" />
      <div>
        <h6 className="text-paragraph-1 font-bold">{name}</h6>
        <h6 className="text-paragraph-1">Available</h6>
        {/* <h6 className="text-paragraph-1">{id}</h6> */}
      </div>
    </div>
  );
}

function ActiveChatCard() {
  return (
    <div className="bg-gray-400 p-5 rounded-lg flex flex-col justify-start items-center space-y-4">
      <img
        className="h-14 w-14 rounded-full"
        src="https://media.istockphoto.com/vectors/search-magnifying-glass-icon-symbol-vector-id1221635138"
        alt="magnifying"
      />
      <div className="space-y-2 text-center">
        <h6 className="text-paragraph-1 font-bold">John Doe</h6>
        <h6 className="text-paragraph-1">Bussiness Consultant</h6>
      </div>
    </div>
  );
}

// function ChatRoom() {
//   return (
//     <div className="relative bg-white rounded-tr-lg rounded-br-lg flex flex-col h-full">
//       <div className="bg-red-300 rounded-tr-lg h-full max-h-75-screen overflow-scroll  p-6 space-y-3 flex flex-col scrollbar-thin scrollbar-thumb-gray-500 hover:scrollbar-thumb-gray-700 scrollbar-track-transparent hover:scrollbar-track-gray-200 overflow-y-scroll scrollbar-thumb-rounded-full">
//         <SenderChat />
//         <SenderChat />
//       </div>
//       <div className="flex p-3">
//         <input
//           className="bg-gray-200 py-5 px-6 rounded-l-full w-full focus:outline-none"
//           placeholder="Enter"
//         />
//         <div className="bg-gray-300 rounded-r-full py-3 px-6 flex justify-center items-center">
//           <PaperAirplaneIcon className="w-9 h-9 text-white rotate-90" />
//         </div>
//       </div>
//     </div>
//   )
// }

export { ChatListCard, ActiveChatCard };
