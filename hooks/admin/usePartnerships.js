import PartnershipAPI from "api/PartnershipAPI";
import useAPI from "hooks/useAPI";
import { useCallback, useEffect } from "react";

function usePartnerships() {
  const [state, dispatch] = useAPI();
  const [acc, dispatchAcc] = useAPI();

  const getPartnerships = useCallback(() => {
    dispatch({ type: "REQUEST" });
    PartnershipAPI.getPartnerships()
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch(() => {
        dispatch({ type: "FETCH_FAILED" });
      });
  }, [dispatch]);

  const accPartership = (id) => {
    dispatchAcc({ type: "REQUEST" });
    PartnershipAPI.acc(id)
      .then((res) => {
        dispatchAcc({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch(() => {
        dispatchAcc({ type: "FETCH_FAILED" });
      });
  };

  useEffect(() => {
    getPartnerships();

    return () => {
      dispatch({ type: "RESET" });
    };
  }, [getPartnerships, dispatch]);

  return { state, getPartnerships, acc, accPartership };
}

export default usePartnerships;
