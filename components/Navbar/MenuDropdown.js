import { Menu, Transition } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useLogout } from "hooks/user/useAuth";
import Cookie from "js-cookie";

function MenuDropdown() {
  let logged;
  if (typeof window !== undefined) {
    logged = Cookie.get("logged");
  }
  const { logout } = useLogout();

  return (
    <Menu>
      <Menu.Button>
        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
      </Menu.Button>

      {/* Use the Transition component. */}
      <Transition
        enter="transition ease-in duration-100"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100 "
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 "
        leaveTo="transform opacity-0 "
      >
        <Menu.Items className="origin-top-right absolute right-8 mt-2 w-48 rounded-md bg-white shadow px-4 py-2">
          <Menu.Item>
            {({ active }) => (
              <Link href="/">
                <a
                  className={`${
                    active ? "text-orangeWeb cursor-pointer" : "text-black"
                  } group flex justify-end rounded-md items-center w-full py-1`}
                >
                  Home
                </a>
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link href="/consultants">
                <a
                  className={`${
                    active ? "text-orangeWeb cursor-pointer" : "text-black"
                  } group flex justify-end rounded-md items-center w-full py-1`}
                >
                  Consultants
                </a>
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link href="/article">
                <a
                  className={`${
                    active ? "text-orangeWeb cursor-pointer" : "text-black"
                  } group flex justify-end rounded-md items-center w-full py-1`}
                >
                  Article
                </a>
              </Link>
            )}
          </Menu.Item>
          {logged ? (
            <div>
              <Menu.Item>
                {({ active }) => (
                  <Link href="/profile/user">
                    <a
                      className={`${
                        active ? "text-orangeWeb cursor-pointer" : "text-black"
                      } group flex justify-end rounded-md items-center w-full py-1`}
                    >
                      Profile
                    </a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={logout}
                    className={`${
                      active ? "text-orangeWeb cursor-pointer" : "text-black"
                    } group flex justify-end rounded-md items-center w-full py-1`}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          ) : (
            <div>
              <Menu.Item>
                {({ active }) => (
                  <Link href="/sign-in">
                    <a
                      className={`${
                        active ? "text-orangeWeb cursor-pointer" : "text-black"
                      } group flex justify-end rounded-md items-center w-full py-1`}
                    >
                      Sign In
                    </a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href="/sign-up">
                    <a
                      className={`${
                        active ? "text-orangeWeb cursor-pointer" : "text-black"
                      } group flex justify-end rounded-md items-center w-full py-1`}
                    >
                      Sign Up
                    </a>
                  </Link>
                )}
              </Menu.Item>
            </div>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default MenuDropdown;
