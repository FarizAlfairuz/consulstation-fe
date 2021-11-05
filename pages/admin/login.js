import Layout from "components/Layout";
import { useLogin } from "hooks/user/useAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AuthForm from "components/Forms/AuthForm";
import Button from "components/Button";
import withoutAuth from "HOC/user/withoutAuth";

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required().min(8),
});

const loginForm = [
  { type: "text", placeholder: "Username", name: "username" },
  { type: "password", placeholder: "Password", name: "password" },
];

function login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const { state, loginSubmit } = useLogin("admin");

  return (
    <Layout padding="py-32">
      <div className="flex space-x-12 ">
        <div className="flex flex-col space-y-8  w-1/2">
          <div className="text-heading-1 font-black">
            <h1>Admin Login</h1>
            {/* <h1>Consulstation</h1> */}
          </div>
          <img
            className="w-full"
            src="/assets/images/auth-vector.png"
            alt="sign-up"
          />
        </div>
        <div className="flex flex-col w-1/2 items-start ">
          <form
            className="flex flex-col w-4/5 space-y-6"
            onSubmit={handleSubmit(loginSubmit)}
          >
            {loginForm.map((input, index) => (
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
            <Button type="submit" color="bg-goldCrayola" textColor="text-black" padding="py-3 px-5" disabled={state.disabled}>
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default withoutAuth(login);
