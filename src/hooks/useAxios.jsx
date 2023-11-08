import axios from "axios";
import { useEffect } from "react";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

const useAxios = () => {
  useEffect(() => {
    instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error tracked", error.response);
      }
    );
  }, []);
  return instance;
};

export default useAxios;
