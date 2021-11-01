import AuthAPI from "api/AuthAPI";
import useAPI from "hooks/useAPI";
import Cookie from "js-cookie";
import usePersistentState from "hooks/usePersistentState";
import { useRouter } from "next/dist/client/router";

function useRegister() {
  const [state, dispatch] = useAPI();

  const registerSubmit = (data) => {
    dispatch({ type: "REQUEST" });
    AuthAPI.register(data)
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
        // console.log(res)
      })
      .catch(() => {
        dispatch({ type: "FETCH_FAILED" });
      });
  };

  return { state, dispatch, registerSubmit };
}

function useLogin() {
  const router = useRouter();
  const [state, dispatch] = useAPI();
  const [username, setUsername] = usePersistentState('username', null)

  const loginSubmit = (data) => {
    // console.log(data)
    dispatch({ type: "REQUEST" });
    AuthAPI.login(data)
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
        Cookie.set("logged", true);
        Cookie.set("role", res.data.data.role);
        // console.log(res)
        setUsername(data.username)
        router.replace("/");
      })
      .catch(() => {
        dispatch({ type: "FETCH_FAILED" });
      });
  };

  return { state, dispatch, loginSubmit, username };
}

function useLogout() {
  const router = useRouter();
  const [state, dispatch] = useAPI();
  const refreshToken = Cookie.get("refreshToken");

  const logout = () => {
    dispatch({ type: "REQUEST" });

    AuthAPI.logout({refreshToken})
      .then(() => {
        Cookie.remove("token");
        Cookie.remove("refreshToken");
        Cookie.remove("logged");
        router.push("/")
      })
      .catch(() => {
        dispatch({ type: "FETCH_FAILED" });
      });
  };

  return { state, logout };
}

export { useRegister, useLogin, useLogout };
