import Link from "next/link";

function DashboardAdmin() {
  return (
    <div className="space-y-4">
      <div className="flex space-x-5">
        <Link href="/admin/dashboard/partnerships">
          <div className="bg-floralWhite rounded-lg p-4 space-y-4">
            <h4 className="text-paragraph-1 text-left">Partnership Approval</h4>
            <h2 className="text-heading-2 text-right font-bold font-poppins">
              300
            </h2>
          </div>
        </Link>
      </div>

      <h2 className="text-paragraph-heading  font-bold font-poppins">
        Article
      </h2>
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
    </div>
  );
}

export default DashboardAdmin;
