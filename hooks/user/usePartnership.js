import partnershipAPI from "api/PartnershipAPI";
import useAPI from "hooks/useAPI";
import { useRouter } from "next/router";

function usePartnership() {
  const [state, dispatch] = useAPI();
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
    partnershipAPI
      .request(reqData)
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
        // console.log(res);
        router.replace("/")
      })
      .catch(() => {
        dispatch({ type: "FETCH_FAILED" });
      });
  };

  return { state, partnershipRequest };
}

export default usePartnership;
