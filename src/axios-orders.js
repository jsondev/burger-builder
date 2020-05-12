import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://react-my-burger-2f0d2.firebaseio.com/",
});

export default instance;
