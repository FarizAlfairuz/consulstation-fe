import Button from "./Button";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-20  py-8 bg-white shadow-md">
      <div className="w-4/5 mx-auto flex justify-between items-center">
        <div className="font-nunito font-bold text-2xl">
          <Link href="/">
            <a>Consulstation</a>
          </Link>
        </div>
        <div className="w-5/6  flex justify-center items-center">
          <ul className="flex justify-around font-nunito text-base w-5/6 ">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>Consultant</li>
            <li>Contact Us</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="w-2/6 flex justify-center items-center space-x-2">
          <Button
            color="bg-white"
            textColor="text-black"
            border="border border-black"
          >
            <Link href="/sign-in">
              <a>Sign In</a>
            </Link>
          </Button>
          <Button>
            <Link href="/sign-up">
              <a>Sign Up</a>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
