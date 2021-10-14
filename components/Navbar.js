import Button from "./Button";

function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-20 flex justify-between py-8 px-40 bg-white shadow-md">
      <div>
        <h1 className="font-nunito font-bold text-2xl">Consulstation</h1>
      </div>
      <div className="w-5/6  flex justify-center items-center">
        <ul className="flex justify-around font-nunito text-base w-5/6 ">
          <li>Home</li>
          <li>Consultant</li>
          <li>Contact Us</li>
          <li>Help</li>
        </ul>
      </div>
      <div className="w-2/6 flex justify-center items-center space-x-2">
        <Button color="bg-white" textColor="text-black" border="border border-black">Sign In</Button>
        <Button>Sign Up</Button>
      </div>
    </nav>
  );
}

export default Navbar;
