import AuthForm from "components/Forms/AuthForm";
import Button from "components/Button";
import Layout from "components/Layout";
import { useRegister } from "hooks/user/useAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import withoutAuth from "HOC/user/withoutAuth";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
  confirmPassword: yup.string().required().min(8).oneOf([yup.ref("password"), null], "Password not same"),
  username: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});

const registerForm = [
  { type: "text", placeholder: "Username", name: "username" },
  { type: "email", placeholder: "Email", name: "email" },
  { type: "password", placeholder: "Password", name: "password" },
  { type: "password", placeholder: "Confirm Password", name: "confirmPassword" },
];

function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched"
  })

  const { state, registerSubmit } = useRegister()

  return (
    <Layout padding="py-24">
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-10">

        <div className="flex flex-col space-y-4 md:space-y-8  w-full  md:w-1/2">
          <div className="text-heading-1 font-black">
            <h1>Sign Up to</h1>
            <h1>Consulstation</h1>
          </div>
          <img
            className="w-full hidden md:block"
            src="/assets/images/auth-vector.png"
            alt="sign-up"
          />
        </div>

        <div className="flex flex-col w-full md:w-1/2 md:items-start ">
          <form className="flex flex-col md:w-5/6 space-y-6 " onSubmit={handleSubmit(registerSubmit)}>

            <div className="space-x-6 flex">
              <AuthForm type="text" placeholder="First Name" name="firstName" error={errors} register={register} />
              <AuthForm type="text" placeholder="Last Name" name="lastName" error={errors} register={register} />
            </div>

            {registerForm.map((input, index) => (
              <AuthForm
                key={index}
                id={index}
                type={input.type}
                placeholder={input.placeholder}
                name={input.name}
                error={errors}
                register={register}
              />
            ))}
            <Button type="submit" color="bg-goldCrayola" textColor="text-black" padding="py-3 px-5" disabled={state.disabled} >Sign Up</Button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default withoutAuth(RegisterPage);
