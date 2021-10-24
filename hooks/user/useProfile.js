import { useCallback, useEffect, useState } from "react";
import ProfileAPI from "api/ProfileAPI";
import useAPI from "hooks/useAPI";

function useProfile() {
  const [state, dispatch] = useAPI();
  const [editState, dispatchEdit] = useAPI();
  // const [isEditing, setIsEditing] = useState(false);

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

  const editProfile = (data) => {
    console.log(data)
    dispatchEdit({ type: "REQUEST" });
    ProfileAPI.editUserProfile(data)
    .then((res) => {
      dispatchEdit({ type: "FETCH_SUCCESS", payload: res.data });
      console.log(res)
    })
    .catch(() => {
      dispatchEdit({ type: "FETCH_FAILED" });
    });
  }

  useEffect(() => {
    getProfile()

    return () => {
      dispatch({ type: "RESET" })
    }
  }, [getProfile, dispatch])

  return { state, editState, getProfile, editProfile };
}

export default useProfile;
