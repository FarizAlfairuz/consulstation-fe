function SenderChat() {
  return (
    <div className="flex justify-end items-baseline space-x-3">
      <div className="space-y-1">
        <div className="bg-gray-300 p-3 rounded-md text-base font-nunito">
          Hey
        </div>
        <p className="text-sm font-nunito text-right">Read</p>
      </div>
      <img
        className="h-6 w-6 rounded-full"
        src="https://media.istockphoto.com/vectors/search-magnifying-glass-icon-symbol-vector-id1221635138"
        alt="magnifying"
      />
    </div>
  );
}

export default SenderChat;
