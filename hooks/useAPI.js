import { useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  data: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        data: action.payload,
      };
    case "FETCH_FAILED":
      return {
        loading: false,
        error: "Something went wrong!",
        data: {},
      };
    case "RESET":
      return initialState;

    default:
      return state;
  }
};

function useAPI() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch];
}

export default useAPI;
