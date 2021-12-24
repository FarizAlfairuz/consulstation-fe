import ContractForm from "components/Forms/ContractForm";
import Layout from "components/Layout";
import Button from "components/Button";
import withAuth from "HOC/user/withAuth";
import { PlusIcon } from "@heroicons/react/solid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import usePartnership from "hooks/user/usePartnership";

const FILE_SIZE = 2000000;
const SUPPORTED_FORMATS = ["application/pdf"];

const schema = yup.object().shape({
  npwp: yup.string().required(),
  startingYear: yup.string().required(),
  // phone: yup.string().required(),
  cv: yup
    .mixed()
    .required()
    .test({
      message: "No file selected",
      test: (arr) => arr.length > 0,
    })
    .test(
      "fileFormat",
      "Invalid format",
      (value) => value[0] && SUPPORTED_FORMATS.includes(value[0].type)
    )
    .test(
      "fileSize",
      "Size too big. Max 2MB",
      (value) => value[0] && value[0].size <= FILE_SIZE
    ),
});

function ContractRegristrationPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const upload = watch("cv");

  const { state, partnershipRequest } = usePartnership();
  console.log(upload);

  return (
    <Layout>
      <h1 className="font-poppins text-4xl font-bold">Partnership Contract</h1>
      <h4 className="font-nunito text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis quam
        duis consequat etiam ornare pulvinar.
      </h4>

      <form
        onSubmit={handleSubmit(partnershipRequest)}
        className="bg-gray-200 p-8 rounded-lg space-y-6"
      >
        <div className="flex space-x-4">
          <ContractForm
            type="number"
            name="npwp"
            width="w-full"
            label="NPWP"
            error={errors}
            register={register}
          />
          <ContractForm
            type="number"
            name="startingYear"
            width="w-full"
            label="Starting Year"
            error={errors}
            register={register}
          />
        </div>
        {/* <ContractForm width="w-1/2" label="Email" /> */}
        {/* <ContractForm  type="text" name="phone" width="w-1/2" label="Phone Number" error={errors} register={register} /> */}
        <div className="space-y-2">
          <p className="text-paragraph-1 text-black text-opacity-60 font-nunito font-bold">
            CV
          </p>
          <div
            onClick={() => document.getElementById("uploadFile").click()}
            className="bg-white rounded-lg w-44 h-16 flex justify-center items-center hover:cursor-pointer"
          >
            <PlusIcon className="h-6 w-6 text-black text-opacity-40" />
          </div>
          <input
            id="uploadFile"
            type="file"
            className="hidden"
            accept="application/pdf"
            name="cv"
            {...register("cv", { required: true })}
          />
          {upload && upload[0].name && <div>{upload[0].name}</div>}
          {errors["cv"] && (
            <p className="text-xs text-red-600 break-words">
              {errors["cv"].message}
            </p>
          )}
        </div>

        {/* Experience */}
        {/* <div className="flex flex-col space-y-4 w-1/2">
          <p className="text-paragraph-1 text-black text-opacity-60 font-nunito font-bold">
            Experience
          </p>
          <div className="flex items-center justify-between">
            <p className="text-paragraph-2 text-black text-opacity-60 font-nunito font-bold">
              Job Title
            </p>
            <input
              type="text"
              name="name"
              placeholder="Placeholder"
              className="font-nunito text-paragraph-1 w-2/3 bg-white font-bold text-black py-2 px-3 rounded-lg focus:outline-none"
              // {...register(name, { ...required })}
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-paragraph-2 text-black text-opacity-60 font-nunito font-bold">
              Company Name
            </p>
            <input
              type="text"
              name="name"
              placeholder="Placeholder"
              className="font-nunito text-paragraph-1 w-2/3 bg-white font-bold text-black py-2 px-3 rounded-lg focus:outline-none"
              // {...register(name, { ...required })}
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-paragraph-2 text-black text-opacity-60 font-nunito font-bold">
              Description
            </p>
            <textarea
              className="resize-none font-nunito text-paragraph-1 w-2/3 bg-white font-bold text-black py-2 px-3 rounded-lg focus:outline-none"
              name="desc"
              id=""
              // cols="30"
              rows="5"
            ></textarea>
          </div>
          <Button color="bg-white" textColor="text-black" padding="py-2 px-5">
            <div className="flex justify-center items-center space-x-2">
              <PlusIcon className="h-5 w-5 text-black text-opacity-40" />
              <h6 className="text-paragraph-1 text-black text-opacity-40">
                Add Job
              </h6>
            </div>
          </Button>
        </div> */}

        {/* Checkbox */}
        {/* <div className="flex items-center space-x-4">
          <input id="eula" type="checkbox" className="w-5 h-5" />
          <label htmlFor="eula" className="text-paragraph-1">
            I confirm that I have read, consent and agree to Consulstation’s
            User Agreement and Privacy Policy, and I am of legal age.
          </label>
        </div> */}
        <Button
          type="submit"
          padding="py-4 px-20"
          color="bg-gray-300"
          textColor="text-black"
          disabled={state.disabled}
        >
          Submit
        </Button>
      </form>
    </Layout>
  );
}

export default withAuth(ContractRegristrationPage);
