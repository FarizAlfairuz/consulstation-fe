import { Transition } from "@headlessui/react";
import {
  ColorSwatchIcon,
  DocumentDuplicateIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import Button from "components/Button";
import { useState } from "react";

function AdminTemplate(props) {
    const { children } = props
  const [isShowing, setIsShowing] = useState(true);

  const toggle = () => {
    setIsShowing(!isShowing);
  };
  return (
    <div className="flex w-screen h-screen overflow-hidden ">
      <Transition
        show={isShowing}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <div className="no-scrollbar overflow-y-auto bg-gray-300 w-80 h-full space-y-8 sticky top-0 left-0 font-nunito select-none pt-8 pl-20 pr-14">
          <div className="font-bold text-2xl">Consulstation</div>
          <div className="text-paragraph-1 text-white space-y-4 pt-16">
            <div className="flex items-center p-3 bg-yellow-300 rounded-lg space-x-2">
              <div className="p-1 rounded-md bg-white">
                <DocumentDuplicateIcon className="h-6 w-6 text-yellow-300" />
              </div>
              <p>Menu</p>
            </div>
          </div>
        </div>
      </Transition>
      <div className="flex-1 h-screen overflow-scroll scrollbar-thin scrollbar-thumb-gray-500 hover:scrollbar-thumb-gray-700 scrollbar-track-gray-300 hover:scrollbar-track-gray-400 overflow-y-scroll scrollbar-thumb-rounded-full">
        <div className="sticky top-0">
          <div className="flex items-center justify-between px-12 pb-2 pt-8">
            {/* <Button onClick={toggle}>
              <MenuIcon className="w-5 h-5" />
            </Button> */}
            <h1 className="text-heading-2 font-bold font-poppins">Dashboard</h1>
            <div className="space-x-4 items-center flex">
              <Button>
                <div className="px-10 font-extrabold text-admin-orange">
                  Logout
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="pt-8 px-12 min-w-min">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AdminTemplate;
