import PartnershipAPI from "api/PartnershipAPI";
import useAPI from "hooks/useAPI";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

function usePartnership(page) {
  const [state, dispatch] = useAPI();
  const [planState, dispatchPlan] = useAPI();
  const [plans, dispatchPlans] = useAPI();

  const router = useRouter()
  const partnershipRequest = (data) => {
    console.log(data);
    const file = data.cv[0];
    const reqData = new FormData();
    reqData.append("npwp", data.npwp);
    reqData.append("startingYear", data.startingYear);
    reqData.append("phone", data.phone);
    reqData.append("cv", file);
    dispatch({ type: "REQUEST" });
    PartnershipAPI
      .request(reqData)
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
        // console.log(res);
        router.replace("/profile/user")
      })
      .catch(() => {
        dispatch({ type: "FETCH_FAILED" });
      });
  };

  const createPlan = (data) => {
    dispatchPlan({ type: "REQUEST" });
    PartnershipAPI.plan(data)
      .then((res) => {
        dispatchPlan({ type: "FETCH_SUCCESS", payload: res.data });
        // console.log(res);
        // router.replace("/profile/user")
        window.location.reload()
      })
      .catch(() => {
        dispatchPlan({ type: "FETCH_FAILED" });
      });
  }

  const getPlans = useCallback(() => {
    dispatchPlans({ type: "REQUEST" });
    PartnershipAPI.getPlan()
      .then((res) => {
        dispatchPlans({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch(() => {
        dispatchPlans({ type: "FETCH_FAILED" });
      });
  }, [dispatchPlans])

  if (page === "profile") {
    useEffect(() => {
      getPlans()
      return () => {
        dispatchPlans({ type: "RESET" });
      }
    }, [getPlans, dispatchPlans])
  }

  return { state, partnershipRequest, planState, createPlan, plans };
}

export default usePartnership;
