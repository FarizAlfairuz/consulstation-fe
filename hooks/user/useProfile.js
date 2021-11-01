import { useCallback, useEffect, useState } from "react";
import ProfileAPI from "api/ProfileAPI";
import useAPI from "hooks/useAPI";
import usePersistentState from "hooks/usePersistentState";

function useProfile() {
  const [state, dispatch] = useAPI();
  const [editState, dispatchEdit] = useAPI();
  const [photoState, dispatchPhoto] = useAPI();
  // const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = usePersistentState("username", null);

  const getProfile = useCallback(() => {
    dispatch({ type: "REQUEST" });
    ProfileAPI.getUserProfile()
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
        setUsername(res.data.data.username);
      })
      .catch(() => {
        dispatch({ type: "FETCH_FAILED" });
      });
  }, [dispatch, setUsername]);

  const editProfile = (data) => {
    // console.log(data);
    

    dispatchEdit({ type: "REQUEST" });
    ProfileAPI.editUserProfile(data)
      .then((res) => {
        setUsername(data.username);
        dispatchEdit({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch(() => {
        dispatchEdit({ type: "FETCH_FAILED" });
      });
  };

  const uploadPhoto = (data) => {
    console.log(data)
    const photo = new FormData();
    photo.append("profilePicture", data.pp[0]);

    dispatchPhoto({ type: "REQUEST" });
    console.log("foto");
    ProfileAPI.uploadPhotoProfile(photo)
      .then((response) => {
        dispatchPhoto({ type: "FETCH_SUCCESS", payload: response.data });
        console.log(response);
      })
      .catch(() => {
        dispatchPhoto({ type: "FETCH_FAILED" });
      });
  };

  useEffect(() => {
    getProfile();

    return () => {
      dispatch({ type: "RESET" });
    };
  }, [getProfile, dispatch]);

  return { state, editState, photoState, getProfile, editProfile, uploadPhoto, username };
}

export default useProfile;
