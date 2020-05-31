import http from "../http-common";

class DataService {
  getPeople(amount = 1) {
    return http.get("/people?amount=" + amount);
  }

  getCompanies() {
    return http.get("/companies");
  }

  getArticles() {
    return http.get("/articles");
  }
}

export default new DataService();
