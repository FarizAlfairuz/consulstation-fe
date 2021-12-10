// import Button from "../Button";
import Link from "next/link";
// import Cookie from "js-cookie";
import dynamic from "next/dynamic";
// import { MenuIcon } from "@heroicons/react/solid";
// import MenuDropdown from "./MenuDropdown";

function Navbar() {
  const LogStatus = dynamic(() => import("components/Navbar/LogStatus"));
  const MenuDropdown = dynamic(() => import("components/Navbar/MenuDropdown"))
  // const logged = Cookie.get("logged");
  return (
    <nav className="w-full sticky top-0 z-20  py-8 bg-white shadow-md">
      <div className="w-11/12 md:w-4/5 mx-auto flex justify-between items-center">
        <div className="font-nunito font-bold text-xl md:text-2xl">
          <Link href="/">
            <a>Consulstation</a>
          </Link>
        </div>

        <div className="hidden w-5/6 md:flex justify-center items-center">
          <ul className="flex justify-around font-nunito text-base w-5/6 ">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/consultants">
                <a>Consultants</a>
              </Link>
            </li>
            <li>
              <Link href="/article">
                <a>Article</a>
              </Link>
            </li>
            {/* <li>Help</li> */}
          </ul>
        </div>
        <div className="hidden md:block w-2/6 ">
          <LogStatus />
        </div>
        <div className="block md:hidden">
          <MenuDropdown />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
