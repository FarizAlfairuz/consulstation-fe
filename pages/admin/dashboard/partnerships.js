import PartnershipCard from "components/Cards/PartnershipCard";
import usePartnerships from "hooks/admin/usePartnerships";

function partnerships() {
  const { state, acc, accPartership } = usePartnerships();

  // console.log(state);
  // console.log(acc)

  return (
    <div className="space-y-3">
      <h6>Partnership Request</h6>
      {state.data.data &&
        state.data.data.map((req, index) => (
          <PartnershipCard key={index} req={req} accept={() => accPartership(req._id)} loading={acc.loading} />
        ))}
    </div>
  );
}

export default partnerships;
