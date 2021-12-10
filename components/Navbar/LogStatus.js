import Button from "components/Button";
import Cookie from "js-cookie";
import Link from "next/link";
import usePersistentState from "hooks/usePersistentState";
import { useLogout } from "hooks/user/useAuth";
import Dropdown from "./Dropdown";

function LogStatus() {
  let logged;
  if (typeof window !== undefined) {
    logged = Cookie.get("logged");
  }
  const [username] = usePersistentState("username", null);
  const { logout } = useLogout();

  return logged ? (
    <div className="flex justify-end space-x-6 items-center">
      <Dropdown username={username} logout={logout} />
    </div>
  ) : (
    <div className="flex justify-end items-center space-x-2">
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
  );
}

export default LogStatus;
