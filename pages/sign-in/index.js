import AuthForm from "components/Forms/AuthForm";
import Button from "components/Button";
import Layout from "components/Layout";
import Link from "next/link"
import { useLogin } from "hooks/user/useAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import withOutAuth from "HOC/withOutAuth";

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required().min(8),
});

const registerForm = [
  { type: "text", placeholder: "Username", name: "username" },
  { type: "password", placeholder: "Password", name: "password" },
];

function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const { state, loginSubmit } = useLogin();

  // console.log(state)

  return (
    <Layout padding="py-32">
      <div className="flex space-x-12 ">
        <div className="flex flex-col space-y-8  w-1/2">
          <div className="text-heading-1 font-black">
            <h1>Sign In to</h1>
            <h1>Consulstation</h1>
          </div>
          <div className="font-nunito font-bold">
            <p>if you don't have an account,</p>
            <div className="flex space-x-1">
              <p>You can </p>
              <Link href="/sign-up"><a className="text-yellow-400">Register here!</a></Link>
            </div>
          </div>
          <img
            className="w-full"
            src="https://i.kym-cdn.com/entries/icons/facebook/000/023/977/cover3.jpg"
            alt="sign-up"
          />
        </div>
        <div className="flex flex-col w-1/2 items-start ">
          <form className="flex flex-col w-4/5 space-y-6" onSubmit={handleSubmit(loginSubmit)} >
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
            <Button type="submit" padding="py-3 px-5" disabled={state.disabled} >
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default withOutAuth(LoginPage);
