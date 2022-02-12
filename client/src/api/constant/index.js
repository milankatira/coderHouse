import axios from "axios";

const env = "local";

const masterConfig = {
  local: {
    server_url: "http://localhost:5000",
  },
  staging: {
    server_url: "",
  },
};

export const {server_url}=masterConfig[env];
