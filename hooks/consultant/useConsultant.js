import { useCallback, useEffect } from "react";
import ConsultantAPI from "api/ConsultantAPI";
import useAPI from "../useAPI";

function useConsultant() {
  const [state, dispatch] = useAPI();
  const [profile, dispatchProfile] = useAPI();

  const getConsultantsList = () => {
    dispatch({ type: "REQUEST" });

    ConsultantAPI.getConsultants()
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch(() => {
        dispatch({ type: "FETCH_FAILED" });
      });

    return state
  }

  const getPublicProfile = (id) => {
    dispatchProfile({ type: "REQUEST" });

    ConsultantAPI.getPublicProfile(id)
      .then((res) => {
        dispatchProfile({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch(() => {
        dispatchProfile({ type: "FETCH_FAILED" });
      });
  }

  

  // useEffect(() => {
  //   getConsultantsList()

  //   return () => {
  //     dispatch({ type: "RESET" })
  //   }
  // }, [getConsultantsList, dispatch])

  return { state, getConsultantsList, getPublicProfile, profile };
}

export default useConsultant;
