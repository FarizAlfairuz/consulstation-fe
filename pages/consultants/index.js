import { useState } from "react";
import Button from "components/Button";
import ConsultantCard from "components/Cards/ConsultantCard";
import Layout from "components/Layout";
import useConsultant from "hooks/useConsultant";

function ConsultantsPage() {
  const { state } = useConsultant();
  const [clicked, setClicked] = useState(false)

  return (
    <Layout>
      <div className="max-w-3xl flex flex-col space-y-4">
        <h1 className="font-poppins text-4xl font-bold">
          Our Consultants
        </h1>
        <h4 className="font-nunito text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
          quam duis consequat etiam ornare pulvinar.
        </h4>
      </div>
      <div className="flex bg-gray-300 px-4 py-2 rounded-lg">
        <input
          type="text"
          className="w-full bg-transparent focus:outline-none"
          placeholder="Search..."
        />
        <Button color="bg-yellow-600">Search</Button>
      </div>
      <div className="grid grid-cols-4 grid-flow-row-dense gap-4">
        {state.data.data &&
          state.data.data.map((consultant, index) => (
            <ConsultantCard key={index} id={index} username={consultant.username} clicked={clicked} setClicked={setClicked} />
          ))}
          {/* <ConsultantCard id="4" username="joe mama1" clicked={clicked} setClicked={setClicked} />
          <ConsultantCard id="5" username="joe mama2" clicked={clicked} setClicked={setClicked} />
          <ConsultantCard id="6" username="joe mama3" clicked={clicked} setClicked={setClicked} />
          <ConsultantCard id="7" username="joe mama4" clicked={clicked} setClicked={setClicked} />
          <ConsultantCard id="8" username="joe mama5" clicked={clicked} setClicked={setClicked} />
          <ConsultantCard id="9" username="joe mama6" clicked={clicked} setClicked={setClicked} /> */}
      </div>
    </Layout>
  );
}

export default ConsultantsPage;
