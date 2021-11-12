import ArticleCard from "components/Cards/ArticleCard";
import useArticle from "hooks/admin/useArticle";
import Link from "next/link";

function DashboardAdmin() {
  const { state } = useArticle();

  return (
    <div className="space-y-4">
      <div className="flex space-x-5">
        <Link href="/admin/dashboard/partnerships">
          <div className="bg-orangeWeb rounded-lg p-4 space-y-4 hover:cursor-pointer">
            <h4 className="text-paragraph-1 text-left text-white font-bold">
              Partnership Approval
            </h4>
            <h2 className="text-heading-2 text-right font-bold font-poppins text-white">
              300
            </h2>
          </div>
        </Link>
      </div>

      <h2 className="text-paragraph-heading  font-bold font-poppins">
        Article
      </h2>
      <div className="flex space-x-5">
        {state.data.data &&
          state.data.data.map((details, index) => (
            <ArticleCard key={index} details={details} color="bg-floralWhite" />
          ))}
      </div>
    </div>
  );
}

export default DashboardAdmin;
