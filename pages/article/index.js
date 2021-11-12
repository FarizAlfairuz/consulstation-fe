import ArticleAPI from "api/ArticleAPI";
import Button from "components/Button";
import ArticleCard from "components/Cards/ArticleCard";
import Layout from "components/Layout";

export const getServerSideProps = async () => {
  const articles = await ArticleAPI.getArticle().then((res) => res.data.data);

  return {
    props: {
      articles: articles,
    },
  };
};

function ArticlePage(props) {
  const { articles } = props;

  console.log(articles);


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
        {articles.map((article, index) => (
          <ArticleCard key={index} details={article} />
        ))}
      </div>
    </Layout>
  );
}

export default ArticlePage;
