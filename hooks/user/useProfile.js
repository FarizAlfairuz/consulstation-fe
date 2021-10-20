import { useCallback, useEffect } from "react";
import ProfileAPI from "api/ProfileAPI";
import useAPI from "hooks/useAPI";

function useProfile() {
  const [state, dispatch] = useAPI();

  const getProfile = useCallback(() => {
    dispatch({ type: "REQUEST" });
    ProfileAPI.getUserProfile()
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
        // console.log(res);
      })
      .catch(() => {
        dispatch({ type: "FETCH_FAILED" });
      });
  }, [dispatch]);

  useEffect(() => {
    getProfile()

    return () => {
      dispatch({ type: "RESET" })
    }
  }, [getProfile, dispatch])

  return { state, getProfile };
}

export default useProfile;
