import { useEffect, useState } from "react";
import ProfileForm from "components/Forms/ProfileForm";
import Layout from "components/Layout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "components/Button";
import useProfile from "hooks/user/useProfile";
import withAuth from "HOC/withAuth";
import Link from "next/link";
import { MoonLoader } from "react-spinners";
import PhotoForm from "components/Forms/PhotoForm";
import Cookie from "js-cookie"

const schema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  phone: yup.string().required(),
});

const profileForm = [
  { type: "text", label: "Username", name: "username" },
  { type: "email", label: "Email", name: "email" },
  { type: "tel", label: "Phone Number", name: "phone" },
];


function UserProfilePage() {
  const role = Cookie.get("role")
  // console.log(role)
  const { state, editProfile } = useProfile(role);
  const [isEditing, setIsEditing] = useState(false);
  const [upload, setUpload] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  // const upload = watch("pp");
  // const photo = URL.createObjectURL(upload[0])
  // console.log(state.data.data)

  useEffect(() => {
    reset(state.data.data);
  }, [reset, state]);

  return (
    <Layout width="w-3/5">
      <h1 className="text-heading-2 font-poppins font-extrabold">My Account</h1>
      <div className="flex flex-col justify-center items-center space-y-6 mt-4">
        <div className="w-36 h-36 rounded-full bg-gray-100 overflow-hidden flex justify-center items-center">
          {state.loading ? (
            <MoonLoader size={60} color="gray" />
          ) : (
            state.data.data && (
              <img
                className="object-center object-cover h-full w-full"
                src={
                  upload && upload.length > 0
                    ? URL.createObjectURL(upload[0])
                    : state.data.data.profilePicture.url
                }
                alt={state.data.data.firstName + " " + state.data.data.lastName}
              />
            )
          )}
        </div>

        {state.loading ? (
          <div className="animate-pulse w-full flex flex-col justify-center items-center space-y-2">
            <div className="h-6 bg-gray-300 w-1/4 rounded"></div>
            <div className="h-6 bg-gray-300 w-1/5 rounded"></div>
          </div>
        ) : (
          state.data.data && (
            <div className="text-center space-y-2">
              <h4 className="text-heading-3 font-bold">
                {state.data.data.firstName + " " + state.data.data.lastName}
              </h4>
              <h5 className="text-paragraph-heading ">Personal Account</h5>
            </div>
          )
        )}
      </div>
      <div className="space-y-5">
        <div className="bg-gray-300 p-6 rounded-lg">
          <form onSubmit={handleSubmit(editProfile)}>
            <div className="flex justify-between items-center space-x-3 ">
              <div className="flex space-x-3 ">
                <ProfileForm
                  type="text"
                  label="First Name"
                  name="firstName"
                  disabled={!isEditing}
                  error={errors}
                  register={register}
                />
                <ProfileForm
                  type="text"
                  label="Last Name"
                  name="lastName"
                  disabled={!isEditing}
                  error={errors}
                  register={register}
                />
              </div>
              <div>
                {isEditing ? (
                  <Button
                    color="bg-white"
                    textColor="text-black"
                    onClick={() => setIsEditing(false)}
                  >
                    Save
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    color="bg-white"
                    textColor="text-black"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit Profile
                  </Button>
                )}
              </div>
            </div>
            {profileForm.map((profile, index) => (
              <ProfileForm
                key={index}
                type={profile.type}
                label={profile.label}
                name={profile.name}
                disabled={!isEditing}
                error={errors}
                register={register}
              />
            ))}
          </form>
          <PhotoForm setUpload={setUpload} />
        </div>
        <div className="flex justify-between items-center bg-gray-300 p-6 rounded-lg">
          <div className="space-y-1">
            <p className="font-nunito text-base">Change Password</p>
            <p className="font-nunito text-base font-bold">
              Changing your password will make you have to logging again
            </p>
          </div>
          <div>
            <Button color="bg-white" textColor="text-black">
              Change
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center bg-gray-300 p-6 rounded-lg">
          <div className="space-y-1">
            <p className="font-nunito text-base">Become a consultant</p>
            <p className="font-nunito text-base font-bold">
              Are you a bussines consultant? Register now!
            </p>
          </div>
          <div>
            <Button color="bg-white" textColor="text-black">
              <Link href="/contract/registration">
                <a>Register</a>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default withAuth(UserProfilePage);
