import Button from "components/Button";

function NavbarAdmin(props) {
  const { logout } = props;
  return (
    <div className="sticky top-0">
      <div className="flex items-center w-full justify-between px-12 pb-2 pt-8">
        {/* <Button onClick={toggle}>
            <MenuIcon className="w-5 h-5" />
          </Button> */}
        <h1 className="text-heading-2 font-bold font-poppins">Dashboard</h1>
        <div className="space-x-4 items-center flex">
          <Button onClick={logout}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NavbarAdmin;
