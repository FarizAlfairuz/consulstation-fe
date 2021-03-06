import AuthAPI from "api/AuthAPI";
import useAPI from "hooks/useAPI";
import Cookie from "js-cookie";
import { useRouter } from "next/dist/client/router";
import createPersistedState from "use-persisted-state";
import Swal from "sweetalert2";
import { useSockets } from "utils/socket";
import useSocket from "hooks/useSocket";

const useUsername = createPersistedState("username");

function useRegister() {
  const [state, dispatch] = useAPI();
  const router = useRouter();

  const registerSubmit = (data) => {
    dispatch({ type: "REQUEST" });
    AuthAPI.register(data)
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
        // console.log(res)
        Swal.fire({
          icon: "success",
          title: "Akun berhasil terdaftar",
        }).then(() => {
          router.replace("/sign-in");
        });
      })
      .catch(() => {
        dispatch({ type: "FETCH_FAILED" });
      });
  };

  return { state, dispatch, registerSubmit };
}

function useLogin(role) {
  const router = useRouter();
  const [state, dispatch] = useAPI();
  const [username, setUsername] = useUsername("");

  const socket = useSocket()

  const loginSubmit = (data) => {
    
    dispatch({ type: "REQUEST" });
    if (role === "user") {
      AuthAPI.login(data)
        .then((res) => {
          if (res.data.success) {
            dispatch({ type: "FETCH_SUCCESS", payload: res.data });
            Cookie.set("logged", true);
            Cookie.set("role", res.data.data.role);
            Cookie.set("token", res.data.data.token);
            Cookie.set("refreshToken", res.data.data.refreshToken);
            
            setUsername(data.username);

            socket.auth = { username: data.username }
            socket.connect()
            console.log(socket)
            router.replace("/");
          } else {
            Swal.fire({
              icon: "error",
              title: res.data.message,
              text: res.data.errors,
            }).then(() => {
              dispatch({ type: "FETCH_FAILED" });
            });
          }
        })
        .catch((err) => {
          console.log(err);
          dispatch({ type: "FETCH_FAILED" });
        });
    } else {
      AuthAPI.loginAdmin(data)
        .then((res) => {
          dispatch({ type: "FETCH_SUCCESS", payload: res.data });
          Cookie.set("logged", true);
          Cookie.set("role", res.data.data.role);
          Cookie.set("token", res.data.data.token);
          Cookie.set("refreshToken", res.data.data.refreshToken);
          // console.log(res)
          router.replace("/admin/dashboard");
        })
        .catch(() => {
          dispatch({ type: "FETCH_FAILED" });
        });
    }
  };

  return { state, dispatch, loginSubmit, username };
}

function useLogout() {
  const router = useRouter();
  const [state, dispatch] = useAPI();
  const refreshToken = Cookie.get("refreshToken");

  const logout = () => {
    dispatch({ type: "REQUEST" });

    AuthAPI.logout({ refreshToken })
      .then(() => {
        localStorage.removeItem("selected_chat");
        Cookie.remove("token");
        Cookie.remove("refreshToken");
        Cookie.remove("logged");
        Cookie.remove("role");
        router.push("/");
      })
      .catch(() => {
        dispatch({ type: "FETCH_FAILED" });
      });
  };

  return { state, logout };
}

export { useRegister, useLogin, useLogout };
