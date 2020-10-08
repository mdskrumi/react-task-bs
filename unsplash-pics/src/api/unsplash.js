import axios from "axios";

// Convert this api to native fetch api
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID R4Q_V32stbrWOzb3DpOntSfstan64mljhm-QftIjSCY",
  },
});
