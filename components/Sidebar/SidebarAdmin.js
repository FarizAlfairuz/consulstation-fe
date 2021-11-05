import { Transition } from "@headlessui/react";
import { DocumentDuplicateIcon } from "@heroicons/react/solid";

function SidebarAdmin(props) {
    const { show } = props
  return (
    <Transition
      show={show}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <div className="no-scrollbar overflow-y-auto bg-cultured w-80 h-full space-y-8 sticky top-0 left-0 font-nunito select-none pt-8 pl-20 pr-14">
        <div className="font-bold text-2xl">Consulstation</div>
        <div className="text-paragraph-1 text-white space-y-4 pt-16">
          <div className="flex items-center p-3 bg-orangeWeb rounded-lg space-x-2">
            <div className="p-1 rounded-md bg-white">
              <DocumentDuplicateIcon className="h-6 w-6 text-goldCrayola" />
            </div>
            <p>Menu</p>
          </div>
        </div>
      </div>
    </Transition>
  );
}

export default SidebarAdmin;
