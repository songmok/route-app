import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:3000",
  //   http://localhost:3000?api_key=5000&a=hello
  params: {
    api_key: 5000,
    a: "hello",
  },
});
export default instance;
