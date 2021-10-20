import AuthAPI from "api/AuthAPI";
import useAPI from "hooks/useAPI";
import Cookie from "js-cookie"
import { useRouter } from "next/dist/client/router";

function useRegister() {
  const [state, dispatch] = useAPI();

  const registerSubmit = (data) => {
    dispatch({ type: "REQUEST" })
    AuthAPI.register(data)
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data })
        // console.log(res)
      })
      .catch(() => {
        dispatch({ type: "FETCH_FAILED" })
      })
  }

  return { state, dispatch, registerSubmit }
}

function useLogin() {
  const router = useRouter()
  const [state, dispatch] = useAPI();

  const loginSubmit = (data) => {
    // console.log(data)
    dispatch({ type: "REQUEST" })
    AuthAPI.login(data)
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data })
        // console.log(res.data)
        // Cookie.set("token", res.data.token)
        // Cookie.set("refreshToken", res.data.refreshToken)
        Cookie.set("logged", true)
        router.push("/profile/user")
      })
      .catch(() => {
        dispatch({ type: "FETCH_FAILED" })
      })
  }

  return { state, dispatch, loginSubmit }
}

export { useRegister, useLogin };