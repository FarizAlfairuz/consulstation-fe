import Button from "components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import usePartnership from "hooks/user/usePartnership";

const schema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  price: yup.string().required(),
});

function PlanForm(props) {
  const { cancel } = props
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const { createPlan, planState } = usePartnership();

  return (
    <form
      onSubmit={handleSubmit(createPlan)}
      className="flex flex-col w-2/3 space-y-2"
    >
      <div>New Plan</div>
      <input
        type="text"
        placeholder="Title"
        name="title"
        className="font-nunito text-paragraph-1  bg-gray-200 font-bold text-black py-2 px-3 rounded-lg focus:outline-none"
        {...register("title", { required: true })}
      />
      <div className="h-2 px-1">
        {errors["title"] && (
          <p className="text-xs text-red-600 break-words">
            {errors["title"].message}
          </p>
        )}
      </div>
      <textarea
        placeholder="Description"
        name="description"
        className="resize-none font-nunito text-paragraph-1 bg-gray-200 font-bold text-black py-2 px-3 rounded-lg focus:outline-none"
        id="desc"
        rows="5"
        {...register("description", { required: true })}
      ></textarea>
      <div className="h-2 px-1">
        {errors["description"] && (
          <p className="text-xs text-red-600 break-words">
            {errors["description"].message}
          </p>
        )}
      </div>
      <select
        name="price"
        id="price"
        className="font-nunito text-paragraph-1 bg-gray-200 font-bold text-black py-2 px-3 rounded-lg focus:outline-none"
        {...register("price", { required: true })}
      >
        <option value="15000">Rp. 15.000</option>
        <option value="25000">Rp. 25.000</option>
        <option value="50000">Rp. 50.000</option>
        <option value="75000">Rp. 75.000</option>
        <option value="100000">Rp. 100.000</option>
      </select>
      <div className="h-2 px-1">
        {errors["price"] && (
          <p className="text-xs text-red-600 break-words">
            {errors["price"].message}
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
          disabled={planState.disabled}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={planState.disabled}>Submit</Button>
      </div>
    </form>
  );
}

export default PlanForm;
