import { useCallback, useEffect } from "react";
import ConsultantAPI from "api/ConsultantAPI";
import useAPI from "./useAPI";

function useConsultant() {
  const [state, dispatch] = useAPI();

  const getConsultantsList = useCallback(() => {
    dispatch({ type: "REQUEST" });

    ConsultantAPI.getConsultants()
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch(() => {
        dispatch({ type: "FETCH_FAILED" });
      });
  }, [dispatch])

  useEffect(() => {
    getConsultantsList()

    return () => {
      dispatch({ type: "RESET" })
    }
  }, [getConsultantsList, dispatch])

  return { state, getConsultantsList };
}

export default useConsultant;
