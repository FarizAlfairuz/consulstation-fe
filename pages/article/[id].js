import ArticleAPI from "api/ArticleAPI";
import Layout from "components/Layout";

// export const getStaticPaths = async () => {
//   const articles = await ArticleAPI.getArticle().then((res) => res.data.data);

//   const paths = articles.map((article) => {
//     return {
//       params: { id: article._id },
//     };
//   });

//   return {
//     paths: paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {
//   const id = context.params.id;

//   const response = await ArticleAPI.getById(id).then((res) => res.data.data);
//   return {
//     props: {
//       article: response,
//     },
//   };
// };

export const getServerSideProps = async (context) => {
  const id = context.params.id;

  const response = await ArticleAPI.getById(id).then((res) => res.data.data);

  return {
    props:{
      article: response,
    }
  }
}

function ArticleDetailPage(props) {
  const { article } = props;
  console.log(article);

  const date = new Date(article.createdAt);
  const publishDate = date.toLocaleDateString();

  return (
    <Layout>
      <div className="space-y-2">
        <h1 className="text-heading-1">{article.title}</h1>
        <div className="flex space-x-8">
          <h6 className="text-paragraph-2 text-gray-400">
            Published at: {publishDate}
          </h6>
          <h6 className="text-paragraph-2 text-gray-400">Writer: Admin</h6>
        </div>
      </div>
      <div className="text-justify"><p>{article.content}</p></div>
    </Layout>
  );
}

export default ArticleDetailPage;
