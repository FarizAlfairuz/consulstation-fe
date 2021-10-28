import { Menu, Transition } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/solid";

function MenuDropdown() {
  return (
    <Menu>
      <Menu.Button>
        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
      </Menu.Button>

      {/* Use the Transition component. */}
      <Transition
        enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-8 mt-2 w-48 rounded-md bg-gray-300 ring-2 ring-black px-4 py-2">
          <Menu.Item>
            {({ active }) => (
              <div
                className={`${
                  active ? "text-blue-300 cursor-pointer" : "text-black"
                } group flex justify-end rounded-md items-center w-full py-1`}
              >
                Home
              </div>
            )}
          </Menu.Item>
          
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default MenuDropdown;
