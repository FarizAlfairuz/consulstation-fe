import Button from "components/Button";
import useUserChat from "hooks/user/useUserChat";
import Link from "next/link";

function ConsultantCard(props) {
  const { year, id, photo, firstName, lastName } = props;
  const { initiateChat } = useUserChat("consultant");

  const date = new Date()
  const thisYear = date.getFullYear()
  const work = thisYear - year

  // console.log(id)

  return (
    <Link href="/consultants/[id]" as={`/consultants/${id}`} >
      <div className="bg-gray-200 p-6 rounded-lg space-y-2 transition ease-out duration-500 hover:cursor-pointer flex flex-col justify-between">
        <div className="space-y-2">
          <img
            className="h-14 w-14 rounded-full"
            src={photo}
            alt="magnifying"
          />
          <h5 className="text-2xl font-bold">{firstName + " " +  lastName}</h5>
          <h6 className="text-base">Bussiness Consultant</h6>
          <h6 className="text-base font-bold">{work} years</h6>
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
