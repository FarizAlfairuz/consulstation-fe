import { Transition } from "@headlessui/react";
import { ColorSwatchIcon, DocumentDuplicateIcon, MenuIcon } from "@heroicons/react/solid";
import Button from "components/Button";
import NavbarAdmin from "components/Navbar/NavbarAdmin";
import SidebarAdmin from "components/Sidebar/SidebarAdmin";
import { useLogout } from "hooks/user/useAuth";
import { useState } from "react";

function AdminTemplate(props) {
  const { children } = props;
  const [isShowing, setIsShowing] = useState(true);

  const { logout } = useLogout()
  const toggle = () => {
    setIsShowing(!isShowing);
  };
  
  return (
    <div className="flex w-screen h-screen overflow-hidden ">
      <SidebarAdmin show={isShowing} />
      <div className="flex-1 w-full h-screen overflow-scroll scrollbar-thin scrollbar-thumb-gray-500 hover:scrollbar-thumb-gray-700 scrollbar-track-gray-300 hover:scrollbar-track-gray-400 overflow-y-scroll scrollbar-thumb-rounded-full">
        <NavbarAdmin logout={() => logout()} />
        <div className="pt-8 px-12 min-w-min">{children}</div>
      </div>
    </div>
  );
}

export default AdminTemplate;
