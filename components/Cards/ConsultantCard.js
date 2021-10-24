import Button from "components/Button";

function ConsultantCard(props) {
  const { username, email, id, clicked, setClicked } = props;
  const click = () => {
    if (clicked === true) {
      setClicked(false);
    } else {
      document
        .getElementById(`consultant-card${id}`)
        .classList.toggle("col-span-2");
      document
        .getElementById(`consultant-card${id}`)
        .classList.toggle("row-span-2");
    }
    // if (id % 4 === 0 && id !== 0) {
    //   document.getElementById(`consultant-card${id}`).classList.toggle("invisible")
    // }
  };
  return (
    <div
      onClick={click}
      id={`consultant-card${id}`}
      className="bg-gray-200 p-6 rounded-lg space-y-2 transition ease-out duration-500 hover:cursor-pointer flex flex-col justify-between"
    >
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
        <Button>Chat</Button>
      </div>
    </div>
  );
}

export default ConsultantCard;
