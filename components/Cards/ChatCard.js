import useUserChat from "hooks/user/useUserChat";
import { useEffect } from "react";


function ChatListCard(props) {
  const { name, picture, onClick, isPaid, consultantId } = props;

  const { getIsPaid } = useUserChat();
  
  // console.log(consultantId)
  // console.log("chatcard " + isPaid)
  useEffect(() => {
    getIsPaid(consultantId, isPaid)

    // return () => {
    //   setIsPaid(true)
    // }
  },[consultantId])


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


export { ChatListCard, ActiveChatCard };
