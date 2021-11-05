import ArticleAPI from "api/ArticleAPI";
import useAPI from "hooks/useAPI";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

function useArticle() {
  const [newState, dispatchNew] = useAPI();
  const [state, dispatch] = useAPI();
  const router = useRouter();

  const getArticles = useCallback(() => {
    dispatch({ type: "REQUEST" })
    ArticleAPI.getArticle()
    .then((res) => {
      dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      console.log(res);
    })
    .catch((err) => {
      console.log(err)

      dispatch({ type: "FETCH_FAILED" });
    });
  }, [dispatch]);

  const newArticle = (data) => {
    dispatchNew({ type: "REQUEST" });

    ArticleAPI.createArticle(data)
      .then((res) => {
        dispatchNew({ type: "FETCH_SUCCESS", payload: res.data });
        console.log(res);
        router.replace("/admin/dashboard/article");
      })
      .catch(() => {
        dispatchNew({ type: "FETCH_FAILED" });
      });
  };

  useEffect(() => {
    getArticles()

    return () => {
      dispatch({ type: "RESET" })
    }
  }, [dispatch, getArticles])

  return { state, newState, newArticle };
}

export default useArticle;
