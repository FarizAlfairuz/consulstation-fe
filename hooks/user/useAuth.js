import AuthAPI from "api/AuthAPI";
import useAPI from "hooks/useAPI";
import { useRouter } from "next/dist/client/router";

function useRegister() {
  const [state, dispatch] = useAPI();

  const registerSubmit = (data) => {
    dispatch({ type: "REQUEST" })
    AuthAPI.register(data)
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data })
        console.log(state.data)
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
    console.log(data)
    dispatch({ type: "REQUEST" })
    AuthAPI.login(data)
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data })
        // router.push("/")
        console.log(state.data)
      })
      .catch(() => {
        dispatch({ type: "FETCH_FAILED" })
      })
  }

  return { state, dispatch, loginSubmit }
}

export { useRegister, useLogin };