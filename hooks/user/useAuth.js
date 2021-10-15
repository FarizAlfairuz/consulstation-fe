import AuthAPI from "api/AuthAPI";
import useAPI from "hooks/useAPI";

function useRegister() {
  const [state, dispatch] = useAPI();

  const registerSubmit = (data) => {
    console.log(data)
    AuthAPI.register(data)
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data.data })
      })
      .catch(() => {
        dispatch({ type: "FETCH_FAILED" })
      })
  }

  return { state, dispatch, registerSubmit }
}

export { useRegister };
