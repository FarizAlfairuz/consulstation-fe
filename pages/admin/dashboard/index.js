import ArticleCard from "components/Cards/ArticleCard";
// import useArticle from "hooks/admin/useArticle";
import useDashboard from "hooks/admin/useDashboard";
import Link from "next/link";

function DashboardAdmin() {
  // const { state } = useArticle();
  const { dashboard } = useDashboard();

  // console.log(dashboard.data.data)

  return (
    <div className="space-y-4">
      <div className="flex space-x-5">
        <Link href="/admin/dashboard/partnerships">
          <div className="bg-orangeWeb rounded-lg p-4 space-y-4 hover:cursor-pointer">
            <h4 className="text-paragraph-1 text-left text-white font-bold">
              Partnership Approval
            </h4>
            <h2 className="text-heading-2 text-right font-bold font-poppins text-white">
              {dashboard.data.data && dashboard.data.data.partnershipRequests}
            </h2>
          </div>
        </Link>
        <div className="bg-blue-300 rounded-lg p-4 space-y-4 hover:cursor-pointer">
          <h4 className="text-paragraph-1 text-left text-white font-bold">
            Total Consultants
          </h4>
          <h2 className="text-heading-2 text-right font-bold font-poppins text-white">
            {dashboard.data.data && dashboard.data.data.totalConsultant}
          </h2>
        </div>
        <div className="bg-blue-600  rounded-lg p-4 space-y-4 hover:cursor-pointer">
          <h4 className="text-paragraph-1 text-left text-white font-bold">
            Total Users
          </h4>
          <h2 className="text-heading-2 text-right font-bold font-poppins text-white">
            {dashboard.data.data && dashboard.data.data.totalUser}
          </h2>
        </div>
      </div>

      <h2 className="text-paragraph-heading  font-bold font-poppins">
        Article
      </h2>
      <div className="flex space-x-5">
        {dashboard.data.data &&
          dashboard.data.data.latestArticle.map((details, index) => (
            <ArticleCard key={index} details={details} color="bg-floralWhite" />
          ))}
      </div>
    </div>
  );
}

export default DashboardAdmin;
