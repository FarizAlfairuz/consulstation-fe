function ReceiverChat(props) {
  const { chat } = props;
  const sent = new Date(chat.createdAt)
  const hour = sent.toLocaleTimeString()

  return (
    <div id="chat" className="flex justify-start items-baseline space-x-3">
      <img
        className="h-6 w-6 rounded-full"
        src={chat.receiver.profilePicture.url}
        alt="magnifying"
      />
      <div className="space-y-1">
        <div className="bg-gray-300 p-3 rounded-md text-base font-nunito">
          {chat.message}
        </div>
        <p className="text-sm font-nunito text-left">{hour}</p>
      </div>
    </div>
  );
}

export default ReceiverChat;
