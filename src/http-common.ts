import axios from "axios";

export default axios.create({
  // baseURL: "https://api.fejk.company/v1",
  baseURL: "http://localhost:8124/v1",
  headers: { "Content-type": "applicationa/json" },
});
