import TransactionAPI from "api/TransactionAPI";
import useAPI from "hooks/useAPI";

function useTransaction() {
  const [state, dispatch] = useAPI();

  const createTransaction = (data) => {
    dispatch({ type: "REQUEST" });

    TransactionAPI.createTransaction(data)
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
        console.log(res)
      })
      .catch(() => {
        dispatch({ type: "FETCH_FAILED" });
      });
  };

  return { state, createTransaction };
}

export default useTransaction;
