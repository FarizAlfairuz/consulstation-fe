import Button from "components/Button";
import Cookie from "js-cookie";
import Link from "next/link";
import { useLogout } from "hooks/user/useAuth";

function LogStatus() {
  let logged;
  if (typeof window !== undefined) {
    logged = Cookie.get("logged");
  }
  const { logout } = useLogout()

  return logged ? (
    <div className="flex">  
      <Link href="/profile/user">
        <a className="font-bold">Hi, profile</a>
      </Link>
      <Button onClick={logout} >Logout</Button>
    </div>
  ) : (
    <div className="flex w-2/6 justify-end items-center space-x-2">
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
