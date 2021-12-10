import ArticleAPI from "api/ArticleAPI";
import Button from "components/Button";
import ArticleCard from "components/Cards/ArticleCard";
import Layout from "components/Layout";
import useArticle from "hooks/admin/useArticle";
import { useState } from "react";

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
  const [search, setSearch] = useState("")

  // console.log(articles);
  const { state, searchArticles } = useArticle()

  const submitSearch = (e) => {
    e.preventDefault()
    searchArticles(search)
  }

  return (
    <Layout>
      <div className="max-w-3xl flex flex-col space-y-4">
        <h1 className="font-poppins text-4xl font-bold">Article</h1>
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

      <div className="flex space-x-5">
        {state.data.data ? state.data.data.map((article, index) => (
          <ArticleCard key={index} details={article} />
        )) : articles.map((article, index) => (
          <ArticleCard key={index} details={article} />
        ))}
      </div>
    </Layout>
  );
}

export default ArticlePage;
