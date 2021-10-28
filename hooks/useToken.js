import TokenAPI from "api/TokenAPI";

function useToken() {
    const getToken = (token) => {
      TokenAPI.getToken(token)
    }

    return { getToken }
}


export default useToken;