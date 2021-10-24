import API from "./API";
// import TokenAPI from "./TokenAPI"

const ConsultantAPI = {
  getConsultants() {
    return API.get("/consultants");
  },
};

export default ConsultantAPI;
