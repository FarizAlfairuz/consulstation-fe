import { useEffect, useState } from "react";
import ProfileForm from "components/Forms/ProfileForm";
import Layout from "components/Layout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "components/Button";
import useProfile from "hooks/user/useProfile";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
  confirmPassword: yup
    .string()
    .required()
    .min(8)
    .oneOf([yup.ref("password"), null], "Password not same"),
  username: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});

const profileForm = [
  { type: "text", label: "Username", name: "username" },
  { type: "email", label: "Email", name: "email" },
];

function UserProfilePage() {
  const { state } = useProfile();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  useEffect(() => {
    reset(state.data.data);
  }, [reset, state]);

  return (
    <Layout width="w-3/5">
      <h1 className="text-heading-2 font-poppins font-extrabold">My Account</h1>
      <div className="flex flex-col justify-center items-center space-y-6 mt-4">
        <div className="w-36 h-36 md:w-48 md:h-48 2xl:w-56 2xl:h-56 rounded-full bg-gray-100 overflow-hidden flex justify-center items-center">
          <img
            className="object-center object-cover h-full w-full"
            src="https://upload.wikimedia.org/wikipedia/commons/8/85/John_Lennon_1969_%28cropped%29.jpg"
            alt="profile"
          />
        </div>
        <div className="text-center space-y-2">
          <h4 className="text-heading-3 font-bold">John Die</h4>
          <h5 className="text-paragraph-heading ">Personal Account</h5>
        </div>
      </div>
      <div className="space-y-5 mt-10">
        <form className="bg-gray-300 p-6 rounded-lg">
          <div className="flex justify-between items-center space-x-3 ">
            <div className="flex space-x-3 ">
              <ProfileForm
                type="text"
                label="First Name"
                name="firstName"
                error={errors}
                register={register}
              />
              <ProfileForm
                type="text"
                label="Last Name"
                name="lastName"
                error={errors}
                register={register}
              />
            </div>
            <div>
              <Button color="bg-white" textColor="text-black">
                Edit Profile
              </Button>
            </div>
          </div>
          {profileForm.map((profile, index) => (
            <ProfileForm
              key={index}
              type={profile.type}
              label={profile.label}
              name={profile.name}
              error={errors}
              register={register}
            />
          ))}
          <div className="space-y-2">
            <p className="font-nunito text-base">Profile Picture</p>
            <div className="flex space-x-2">
              <Button color="bg-white" textColor="text-black">
                Change Picture
              </Button>
              <Button color="bg-white" textColor="text-black">
                Delete Picture
              </Button>
            </div>
          </div>
        </form>
        <div className="flex justify-between items-center bg-gray-300 p-6 rounded-lg mt-2">
          <div className="space-y-1">
            <p className="font-nunito text-base">Profile Picture</p>
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
        <div className="flex justify-between items-center bg-gray-300 p-6 rounded-lg mt-2">
          <div className="space-y-1">
            <p className="font-nunito text-base">Become a consultant</p>
            <p className="font-nunito text-base font-bold">
              Are you a bussines consultant? Register now!
            </p>
          </div>
          <div>
            <Button color="bg-white" textColor="text-black">
              Register
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UserProfilePage;
