import Button from "components/Button";
import useUserChat from "hooks/user/useUserChat";
import Link from "next/link";

function ConsultantCard(props) {
  const { username, id } = props;
  const { initiateChat } = useUserChat("consultant");

  return (
    <Link href={`/consultants/${id}`}>
      <div className="bg-gray-200 p-6 rounded-lg space-y-2 transition ease-out duration-500 hover:cursor-pointer flex flex-col justify-between">
        <div className="space-y-2">
          <img
            className="h-14 w-14 rounded-full"
            src="https://media.istockphoto.com/vectors/search-magnifying-glass-icon-symbol-vector-id1221635138"
            alt="magnifying"
          />
          <h5 className="text-2xl font-bold">{username}</h5>
          <h6 className="text-base">Bussiness Consultant</h6>
          <h6 className="text-base font-bold">5 years</h6>
        </div>
        <div className="flex justify-end">
          <Link href="/chat">
            <a>
              <Button onClick={() => initiateChat(id)}>Chat</Button>
            </a>
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default ConsultantCard;
