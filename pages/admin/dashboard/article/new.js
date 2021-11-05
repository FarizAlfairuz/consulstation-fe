import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useArticle from "hooks/admin/useArticle";
import Button from "components/Button";

const schema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
});

function newArticle() {
  const { newState, newArticle } = useArticle();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  return (
    <div className="space-y-4">
      <div>Make a Post</div>
      <form onSubmit={handleSubmit(newArticle)} className="space-y-6">
        <input
          type="text"
          name="title"
          placeholder="Title here..."
          className="text-heading-2 bg-gray-200 py-2 px-3 rounded-lg"
          {...register("title", { required: true })}
        />
        {errors["title"] && (
          <p className="text-xs text-red-600 break-words">
            {errors["title"].message}
          </p>
        )}
        <div>
          <textarea
            name="content"
            placeholder="Type here..."
            className="resize-none w-5/6 bg-gray-100 focus:outline-none text-sm p-5 rounded-lg"
            rows="10"
            {...register("content", { required: true })}
          ></textarea>
          {errors["content"] && (
            <p className="text-xs text-red-600 break-words">
              {errors["content"].message}
            </p>
          )}
        </div>
        <Button type="submit" disabled={newState.disabled} >Submit</Button>
      </form>
    </div>
  );
}

export default newArticle;
