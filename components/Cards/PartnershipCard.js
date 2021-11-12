import Button from "components/Button";

function PartnershipCard(props) {
  const { req, accept, loading } = props;
  return (
    <div className="flex justify-between items-center bg-platinum p-3 rounded-lg ">
      <div className="flex space-x-4">
        <div>
          <div className="flex space-x-2 font-bold text-lg">
            <div>{req.firstName}</div>
            <div>{req.lastName}</div>
          </div>
          <div className="text-xs">{req.email}</div>
          <div className="text-xs">{req.phone}</div>
        </div>
        <div className="space-y-2 text-sm">
          <div>Starting Year: {req.startingYear}</div>
          <div>NPWP: {req.npwp}</div>
        </div>
      </div>

      <div className="space-y-2 flex flex-col justify-center items-center">
        <Button width="w-full">
          <a href={req.cv.url}>CV</a>
        </Button>
        {req.accepted ? null : (
          <Button width="w-full" onClick={accept} loading={loading}>
            Accept
          </Button>
        )}
      </div>
    </div>
  );
}

export default PartnershipCard;
