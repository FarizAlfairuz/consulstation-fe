import { useCallback, useEffect, useState } from "react";
import ProfileAPI from "api/ProfileAPI";
import useAPI from "hooks/useAPI";
import usePersistentState from "hooks/usePersistentState";
import ConsultantAPI from "api/ConsultantAPI";
import Cookie from "js-cookie";

function useProfile(role) {
  const [state, dispatch] = useAPI();
  const [editState, dispatchEdit] = useAPI();
  const [photoState, dispatchPhoto] = useAPI();
  const [deleteState, dispatchDelete] = useAPI();
  const [passState, dispatchPass] = useAPI();
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = usePersistentState("username", null);

  const getProfile = useCallback(() => {
    // console.log(role)
    dispatch({ type: "REQUEST" });
    if (role === "user") {
      ProfileAPI.getUserProfile()
        .then((res) => {
          dispatch({ type: "FETCH_SUCCESS", payload: res.data });
          setUsername(res.data.data.username);
          // console.log(res.data.data)
          Cookie.set("role", res.data.data.role);
        })
        .catch(() => {
          dispatch({ type: "FETCH_FAILED" });
        });
    } else if (role === "consultant") {
      ConsultantAPI.getConsProfile()
        .then((res) => {
          dispatch({ type: "FETCH_SUCCESS", payload: res.data });
          setUsername(res.data.data.username);
        })
        .catch(() => {
          dispatch({ type: "FETCH_FAILED" });
        });
    }
  }, [dispatch, setUsername]);

  const editProfile = (data) => {
    // console.log(data);
    dispatchEdit({ type: "REQUEST" });
    if (role === "user") {
      ProfileAPI.editUserProfile(data)
        .then((res) => {
          setUsername(data.username);
          dispatchEdit({ type: "FETCH_SUCCESS", payload: res.data });
        })
        .catch(() => {
          dispatchEdit({ type: "FETCH_FAILED" });
        });
    } else {
      ProfileAPI.editConsProfile(data)
        .then((res) => {
          setUsername(data.username);
          dispatchEdit({ type: "FETCH_SUCCESS", payload: res.data });
        })
        .catch(() => {
          dispatchEdit({ type: "FETCH_FAILED" });
        });
    }
  };

  const uploadPhoto = (data) => {
    console.log(data);
    const photo = new FormData();
    photo.append("profilePicture", data.pp[0]);

    dispatchPhoto({ type: "REQUEST" });
    if (role === "user") {
      ProfileAPI.uploadPhotoProfile(photo)
        .then((response) => {
          dispatchPhoto({ type: "FETCH_SUCCESS", payload: response.data });
          console.log(response);
          setIsEditing(false);
        })
        .catch(() => {
          dispatchPhoto({ type: "FETCH_FAILED" });
        });
    } else {
      ProfileAPI.uploadConsProfile(photo)
        .then((response) => {
          dispatchPhoto({ type: "FETCH_SUCCESS", payload: response.data });
          console.log(response);
          setIsEditing(false);
        })
        .catch(() => {
          dispatchPhoto({ type: "FETCH_FAILED" });
        });
    }
  };

  const deletePhoto = () => {
    dispatchDelete({ type: "REQUEST" });
    if (role === "user") {
      ProfileAPI.deletePhotoProfile()
        .then((response) => {
          dispatchDelete({ type: "FETCH_SUCCESS", payload: response.data });
          console.log(response);
          setIsEditing(false);
          window.location.reload();
        })
        .catch(() => {
          dispatchDelete({ type: "FETCH_FAILED" });
        });
    } else {
      ProfileAPI.deleteConsProfile()
        .then((response) => {
          dispatchDelete({ type: "FETCH_SUCCESS", payload: response.data });
          console.log(response);
          setIsEditing(false);
          window.location.reload();
        })
        .catch(() => {
          dispatchDelete({ type: "FETCH_FAILED" });
        });
    }
  };

  const changePassword = (data) => {
    dispatchPass({ type: "REQUEST" });
    if(role === "user") {
      ProfileAPI.changePassUser(data)
        .then((response) => {
          dispatchPass({ type: "FETCH_SUCCESS", payload: response.data });
        })
        .catch(() => {
          dispatchPass({ type: "FETCH_FAILED" });
        });
    } else {
      ProfileAPI.changePassCons(data)
        .then((response) => {
          dispatchPass({ type: "FETCH_SUCCESS", payload: response.data });
        })
        .catch(() => {
          dispatchPass({ type: "FETCH_FAILED" });
        });
    }
  }

  useEffect(() => {
    getProfile();

    return () => {
      dispatch({ type: "RESET" });
    };
  }, [getProfile, dispatch]);

  return {
    state,
    editState,
    photoState,
    getProfile,
    editProfile,
    uploadPhoto,
    username,
    deletePhoto,
    deleteState,
    isEditing,
    setIsEditing,
    changePassword
  };
}

export default useProfile;
