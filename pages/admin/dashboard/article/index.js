import Button from "components/Button";
import ArticleCard from "components/Cards/ArticleCard";
import useArticle from "hooks/admin/useArticle";
import Link from "next/link";

function ArticleAdminPage() {
  const { state } = useArticle();
  // console.log(state);

  return (
    <div className="space-y-4">
      <Link href="/admin/dashboard/article/new">
        <a>
          <Button>Create New</Button>
        </a>
      </Link>
      <div>Lastest Post</div>
      <div className="flex gap-5 flex-wrap">
        {state.data.data &&
          state.data.data.map((details, index) => (
            <ArticleCard key={index} details={details} color="bg-floralWhite" />
          ))}
      </div>
    </div>
  );
}

export default ArticleAdminPage;
