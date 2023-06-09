import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "95e91cbd2a7b4ae8ab968e924ff459a3",
  },
});
