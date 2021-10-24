// import Button from "../Button";
import Link from "next/link";
// import Cookie from "js-cookie";
import dynamic from "next/dynamic"

function Navbar() {
  const LogStatus = dynamic(() => import('components/Navbar/LogStatus'))
  // const logged = Cookie.get("logged");
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
            <li>
              <Link href="/consultants">
                <a>Consultants</a>
              </Link>
            </li>
            <li>Contact Us</li>
            <li>Help</li>
          </ul>
        </div>
        <LogStatus />
      </div>
    </nav>
  );
}

export default Navbar;
