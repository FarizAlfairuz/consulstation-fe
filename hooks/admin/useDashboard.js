import DashboardAPI from "api/DashboardAPI";
import useAPI from "hooks/useAPI";
import { useCallback, useEffect } from "react";

function useDashboard() {
  const [dashboard, dispatch] = useAPI();

  const getDashboardData = useCallback(() => {
    dispatch({ type: "REQUEST" });
    DashboardAPI.getDashboard()
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
        // console.log(res);
      })
      .catch(() => {
        //   console.log(err)
        dispatch({ type: "FETCH_FAILED" });
      });
  }, [dispatch]);

  useEffect(() => {
    getDashboardData();
    return () => {
      dispatch({ type: "RESET" });
    };
  }, [getDashboardData, dispatch]);

  return { dashboard, getDashboardData };
}

export default useDashboard;
