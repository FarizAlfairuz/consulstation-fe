import Button from "components/Button";
import ArticleCard from "components/Cards/ArticleCard";
import useArticle from "hooks/admin/useArticle";
import Link from "next/link";

function ArticleAdminPage() {
  const { state } = useArticle();
  console.log(state);

  return (
    <div className="space-y-4">
      <Link href="/admin/dashboard/article/new">
        <a>
          <Button>Create New</Button>
        </a>
      </Link>
      <div>Lastest Post</div>
      <div className="flex gap-5 flex-wrap">
        {/* <div className="bg-floralWhite rounded-lg p-4 space-y-4">
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
        </div> */}
        {state.data.data &&
          state.data.data.map((details, index) => (
            <ArticleCard key={index} details={details} />
          ))}
      </div>
    </div>
  );
}

export default ArticleAdminPage;
