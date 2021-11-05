import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

function Dropdown(props) {
  const { username, logout } = props;
  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button className="focus:outline-none px-1 mr-3 py-2 inline-flex justify-center align-middle">
        <div className="font-bold">Hi, {username !== null && username}</div>
      </Menu.Button>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md bg-white shadow-md pl-4 py-2">
          <Menu.Item>
            {({ active }) => (
              <Link href="/profile/user">
                <a
                  className={`${
                    active ? "text-orangeWeb cursor-pointer" : "text-black"
                  } group flex rounded-md items-center w-full px-1 py-1`}
                >
                  Profile
                </a>
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <div
                className={`${
                  active ? "text-orangeWeb cursor-pointer" : "text-black"
                } group flex rounded-md items-center w-full px-1 py-1`}
                onClick={logout}
              >
                Logout
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Dropdown;
