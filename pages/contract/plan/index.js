import Button from "components/Button";
import Layout from "components/Layout";

function ContractPlanPage() {
  return (
    <Layout>
      <h1 className="font-poppins text-4xl font-bold">Contract Plan</h1>
      <h4 className="font-nunito text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis quam
        duis consequat etiam ornare pulvinar.
      </h4>
      <div className="flex">
        <div className="flex flex-col items-center justify-between bg-gray-300 p-5 rounded-lg w-full ">
          <div className="flex flex-col items-center space-y-6">
            <h2 className="text-heading-3 font-bold font-poppins">
              One-time Chat
            </h2>
            <h6 className="text-paragraph-1">24 Hours Chat time.</h6>
            <h6 className="text-paragraph-1">24 Hours Chat time.</h6>
          </div>
          <Button>Choose Plan</Button>
        </div>
      </div>
    </Layout>
  );
}

export default ContractPlanPage;
