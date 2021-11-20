function SenderChat(props) {
  const { chat } = props

  const sent = new Date(chat.createdAt)
  const hour = sent.toLocaleTimeString()

  return (
    <div id="chat" className="flex justify-end items-baseline space-x-3">
      <div className="space-y-1">
        <div className="bg-gray-300 p-3 rounded-md text-base font-nunito">
          {chat.message}
        </div>
        <p className="text-sm font-nunito text-right">{hour}</p>  
      </div>
      <img
        className="h-6 w-6 rounded-full"
        src={chat.sender.profilePicture.url}
        alt="magnifying"
      />
    </div>
  );
}

export default SenderChat;
