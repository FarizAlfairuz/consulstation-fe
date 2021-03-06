import { useCallback, useEffect, useState } from "react";
import ProfileAPI from "api/ProfileAPI";
import useAPI from "hooks/useAPI";
import usePersistentState from "hooks/usePersistentState";
import ConsultantAPI from "api/ConsultantAPI";
import Cookie from "js-cookie";
import { useLogout } from "hooks/user/useAuth";
import Swal from "sweetalert2";

function useProfile(role) {
  const [state, dispatch] = useAPI();
  const [editState, dispatchEdit] = useAPI();
  const [photoState, dispatchPhoto] = useAPI();
  const [deleteState, dispatchDelete] = useAPI();
  const [passState, dispatchPass] = useAPI();
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = usePersistentState("username", null);

  const { logout } = useLogout();

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
    if (role === "user") {
      ProfileAPI.changePassUser(data)
        .then((response) => {
          if (response.data.success) {
            dispatchPass({ type: "FETCH_SUCCESS", payload: response.data });
            Swal.fire({
              icon: "success",
              title: "Password berhasil diganti, silakan login kembali",
            }).then(() => {
              logout();
              // console.log(response);
            });
          } else {
            Swal.fire({
              icon: "error",
              title: response.data.message,
              text: response.data.errors,
            }).then(() => {
              dispatchPass({ type: "FETCH_FAILED" });
            });
          }
        })
        .catch((err) => {
          // console.log(err.response)
          Swal.fire({
            icon: "error",
            title: err.response.data.message,
            text: err.response.data.error,
          }).then(() => {
            dispatchPass({ type: "FETCH_FAILED" });
          });
        });
    } else {
      ProfileAPI.changePassCons(data)
        .then((response) => {
          if (response.data.success) {
            dispatchPass({ type: "FETCH_SUCCESS", payload: response.data });
            Swal.fire({
              icon: "success",
              title: "Password berhasil diganti, silakan login kembali",
            }).then(() => {
              logout();
              // console.log(response)
            });
          } else {
            Swal.fire({
              icon: "error",
              title: response.data.message,
              text: response.data.errors,
            }).then(() => {
              dispatchPass({ type: "FETCH_FAILED" });
            });
          }
        })
        .catch((err) => {
          dispatchPass({ type: "FETCH_FAILED" });
          Swal.fire({
            icon: "error",
            title: err.response.data.message,
            text: err.response.data.error,
          }).then(() => {
            dispatchPass({ type: "FETCH_FAILED" });
          });
        });
    }
  };

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
    changePassword,
    passState,
  };
}

export default useProfile;
