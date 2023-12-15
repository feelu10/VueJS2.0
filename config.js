export default {
  apiUrl:
    process.env.NODE_ENV === "production"
      ? "/api"
      : "http://192.168.254.182:5000",
};
