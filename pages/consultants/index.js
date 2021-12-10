import { useState } from "react";
import Button from "components/Button";
import ConsultantCard from "components/Cards/ConsultantCard";
import Layout from "components/Layout";
import useConsultant from "hooks/consultant/useConsultant";
import ConsultantAPI from "api/ConsultantAPI";

export const getServerSideProps = async () => {
  const cons = await ConsultantAPI.getConsultants().then(
    (res) => res.data.data
  );

  return {
    props: {
      cons: cons,
    },
  };
};

function ConsultantsPage(props) {
  const { cons } = props;
  const [search, setSearch] = useState("")
  // console.log(cons)

  const { state, searchConsultant } = useConsultant();
  // const [clicked, setClicked] = useState(false)
  const submitSearch = (e) => {
    e.preventDefault()
    searchConsultant(search)
  }

  // console.log(state.data.data)

  return (
    <Layout>
      <div className="max-w-3xl flex flex-col space-y-4">
        <h1 className="font-poppins text-4xl font-bold">Our Consultants</h1>
        <h4 className="font-nunito text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
          quam duis consequat etiam ornare pulvinar.
        </h4>
      </div>
      <form onSubmit={(e) => submitSearch(e)} className="flex bg-gray-300 px-4 py-2 rounded-lg">
        <input
          type="text"
          className="w-full bg-transparent focus:outline-none"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button type="submit" color="bg-orangeWeb">Search</Button>
      </form>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-flow-row-dense gap-4">
        {/* {state.data.data &&
          state.data.data.map((consultant, index) => (
            <ConsultantCard key={index} id={consultant._id} username={consultant.username} />
          ))} */}

        {state.data.data ? state.data.data.map((c, index) => (
          <ConsultantCard key={index} id={c._id} year={c.startingYear} photo={c.profilePicture.url} firstName={c.firstName} lastName={c.lastName} />
        )) : cons.map((c, index) => (
          <ConsultantCard key={index} id={c._id} year={c.startingYear} photo={c.profilePicture.url} firstName={c.firstName} lastName={c.lastName} />
          ))}
      </div>
    </Layout>
  );
}

export default ConsultantsPage;
