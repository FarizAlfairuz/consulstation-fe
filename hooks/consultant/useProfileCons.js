import useAPI from "hooks/useAPI";
import { useCallback, useEffect } from "react";

function useProfileCons() {
  const [state, dispatch] = useAPI();

  const getProfile = useCallback(() => {
    dispatch({ type: "REQUEST" });
    ConsultantAPI.getConsProfile()
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch(() => {
        dispatch({ type: "FETCH_FAILED" });
      });
  }, [dispatch]);

  useEffect(() => {
    getProfile();

    return () => {
      dispatch({ type: "RESET" });
    };
  }, [getProfile, dispatch]);

  return { state };
}

export default useProfileCons;
