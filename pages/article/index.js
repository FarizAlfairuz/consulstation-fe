import Button from "components/Button";
import Layout from "components/Layout";

function ArticlePage() {
  return (
    <Layout>
      <div className="max-w-3xl flex flex-col space-y-4">
        <h1 className="font-poppins text-4xl font-bold">Article</h1>
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
        <Button color="bg-orangeWeb">Search</Button>
      </div>

      <div className="flex space-x-5">
        <div className="bg-floralWhite rounded-lg p-4 space-y-4">
          <h4 className="text-paragraph-heading font-bold">
            How to Money Management
          </h4>
          <div className="flex justify-between">
              <div className="space-y-2">
                  <p className="text-xs">Publish Date</p>
                  <h6 className="text-paragraph-2 font-bold">September, 24 2021</h6>
              </div>
              <div className="space-y-2">
                  <p className="text-xs">Writer</p>
                  <h6 className="text-paragraph-2 font-bold">John Doe</h6>
              </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ArticlePage;
