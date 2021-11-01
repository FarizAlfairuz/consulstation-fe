import Button from "components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useProfile from "hooks/user/useProfile";
import { useEffect, useState } from "react";

// const FILE_SIZE = 2000000;
// const SUPPORTED_FORMATS = ["image/png", "image/jpg", "image/jpeg"];

// const photoSchema = yup.object().shape({
//   profilePicture: yup
//     .mixed()
//     .required()
//     .test({
//       message: "No file selected",
//       test: (arr) => arr.length > 0,
//     })
//     .test(
//       "fileFormat",
//       "Invalid format",
//       (value) => value[0] && SUPPORTED_FORMATS.includes(value[0].type)
//     )
//     .test(
//       "fileSize",
//       "Size too big. Max 2MB",
//       (value) => value[0] && value[0].size <= FILE_SIZE
//     ),
// });

function PhotoForm(props) {
  const { setUpload } = props;
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    // resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const { photoState, uploadPhoto } = useProfile();
  const foto = watch("pp");

  useEffect(() => {
    setUpload(foto);
  }, [setUpload, foto]);

  return (
    <form onSubmit={handleSubmit(uploadPhoto)}>
      <div className="space-y-2">
        <p className="font-nunito text-base">Profile Picture</p>
        {!isEditing ? (
          <div className="flex space-x-2">
            <Button
              onClick={() => {
                document.getElementById("uploadFile").click();
                setIsEditing(true);
              }}
              color="bg-white"
              textColor="text-black"
            >
              Change Picture
            </Button>
            <Button color="bg-white" textColor="text-black">
              Delete Picture
            </Button>
          </div>
        ) : (
          <div className="flex space-x-2">
            <Button
              type="submit"
            //   onClick={() => setIsEditing(false)}
              color="bg-white"
              textColor="text-black"
              disabled={photoState.disabled}
            >
              Save Picture
            </Button>
            <Button
              onClick={() => setIsEditing(false)}
              color="bg-white"
              textColor="text-black"
            >
              Cancel
            </Button>
          </div>
        )}

        <input
          id="uploadFile"
          type="file"
          className="hidden"
          accept="image/*"
          name="pp"
          {...register("pp", { required: true })}
        />
      </div>
    </form>
  );
}

export default PhotoForm;
