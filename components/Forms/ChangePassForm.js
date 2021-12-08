import Button from "components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useProfile from "hooks/user/useProfile";

const schema = yup.object().shape({
  oldPassword: yup.string().required().min(8),
  newPassword: yup.string().required().min(8),
  confirmNewPassword: yup
    .string()
    .required()
    .min(8)
    .oneOf([yup.ref("newPassword"), null], "Password not same"),
});

function ChangePassForm(props) {
  const { cancel } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const { changePassword } = useProfile();

  return (
    <form
      onSubmit={handleSubmit(changePassword)}
      className="flex flex-col w-2/3 space-y-2"
    >
      <div>Change Password</div>
      <input
        type="password"
        placeholder="Old Password"
        name="oldPassword"
        className="font-nunito text-paragraph-1  bg-gray-200 font-bold text-black py-2 px-3 rounded-lg focus:outline-none"
        {...register("oldPassword", { required: true })}
      />
      <div className="h-1 px-1">
        {errors["oldPassword"] && (
          <p className="text-xs text-red-600 break-words">
            {errors["oldPassword"].message}
          </p>
        )}
      </div>

      <input
        type="password"
        placeholder="New Password"
        name="newPassword"
        className="font-nunito text-paragraph-1  bg-gray-200 font-bold text-black py-2 px-3 rounded-lg focus:outline-none"
        {...register("newPassword", { required: true })}
      />
      <div className="h-1 px-1">
        {errors["newPassword"] && (
          <p className="text-xs text-red-600 break-words">
            {errors["newPassword"].message}
          </p>
        )}
      </div>

      <input
        type="password"
        placeholder="Confirm New Password"
        name="confirmNewPassword"
        className="font-nunito text-paragraph-1  bg-gray-200 font-bold text-black py-2 px-3 rounded-lg focus:outline-none"
        {...register("confirmNewPassword", { required: true })}
      />
      <div className="h-1 px-1">
        {errors["confirmNewPassword"] && (
          <p className="text-xs text-red-600 break-words">
            {errors["confirmNewPassword"].message}
          </p>
        )}
      </div>

      <div className="flex justify-end space-x-4">
        <Button
          type="submit"
          textColor="text-black"
          color="bg-white"
          border="border border-black"
          onClick={cancel}
        >
          Cancel
        </Button>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}

export default ChangePassForm;
