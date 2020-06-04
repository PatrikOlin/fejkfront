import http from "../http-common";

class DataService {
  getPeople(amount = 1) {
    return http.get("/people?amount=" + amount);
  }

  getCompanies(amount = 1) {
    return http.get("/companies?amount=" + amount);
  }

  getArticles(amount = 1) {
    return http.get("/articles?amount=" + amount);
  }
}

export default new DataService();
