import { useState } from "react";
import validateEmail from "../utils/validate-email";
import { useNotifications } from "@mantine/notifications";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setAuthToken } from "../redux/community";

const { sessionStorage } = window;

const useAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const notifications = useNotifications();
  const dispatch = useDispatch();
  const login = async (event: any) => {
    event.preventDefault();
    try {
      setLoading(true);
      if (validateEmail(email) != true) {
        setLoading(false);
        return notifications.showNotification({
          title: "Invalid Email",
          message: "Enter a valid Email",
          color: "red",
        });
      }

      const loginData = {
        communityEmail: email,
        communityPassword: password,
      };
      const response = await axios.post(
        "https://veteran-meet-backend.herokuapp.com/community/login",
        loginData
      );
      if (response.status === 200) {
        notifications.showNotification({
          title: "Success",
          message: "Logged in Successfully!",
          color: "green",
        });
        dispatch(setAuthToken(response.data.token));
        sessionStorage.setItem("authToken", response.data.token);
      }
      console.log(response.data);
      setLoading(false);
    } catch (err: any) {
      console.log(err.response.status);
      notifications.showNotification({
        title: "Error",
        message: "Unexpected error occured. Check your credentials!",
        color: "red",
      });
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      dispatch(setAuthToken(null));
      sessionStorage.clear();
    } catch (err) {
      console.log(err);
    }
  };
  return { loading, setLoading, login, email, setEmail, password, setPassword, logout };
};

export default useAuth;
