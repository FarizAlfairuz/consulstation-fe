import Button from "components/Button";
import Cookie from "js-cookie";
import Link from "next/link";

function LogStatus() {
  let logged;
  if (typeof window !== undefined) {
    logged = Cookie.get("logged");
  }
  return logged ? (
    <div>
      <Link href="/profile/user">
        <a className="font-bold">Hi, </a>
      </Link>
      <Button onClick={
        () => {
          Cookie.remove("token")
          Cookie.remove("refreshToken")
          Cookie.remove("logged")
        }
      }>Logout</Button>
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
