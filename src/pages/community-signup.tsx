import { Input, Button, PasswordInput } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNotifications } from "@mantine/notifications";
import validateEmail from "../utils/validate-email";

const CommunitySignUp = () => {
  const navigate = useNavigate();
  const notifications = useNotifications();
  const CommunityIcon = (
    <img src="/img/pages/Login/communityIcon.svg" alt="Community Name" />
  );
  const OwnerIcon = (
    <img src="/img/pages/Login/ownerIcon.svg" alt="Owner Name" />
  );
  const MailIcon = <img src="/img/pages/Login/mailIcon.svg" alt="Email" />;
  const PasswordIcon = (
    <img src="/img/pages/Login/passwordIcon.svg" alt="Password" />
  );

  const [communityName, setCommunityName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [communityEmail, setCommunityEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signup = async (event: any) => {
    event.preventDefault();
    try {
      setLoading(true);
      if (validateEmail(communityEmail) != true) {
        setLoading(false);
        return notifications.showNotification({
          title: "Invalid Email",
          message: "Enter a valid Email",
          color: "red",
        });
      }
      const signupData = {
        communityName,
        ownerName,
        communityEmail,
        communityPassword: password,
      };
      const response = await axios.post(
        "https://veteran-meet-backend.herokuapp.com/community/signup",
        signupData
      );
      console.log(response);
      if (response.status == 200) {
        notifications.showNotification({
          title: "Success",
          message: "Account Created Successfully!",
          color: "green",
        });
        setLoading(false);
        return navigate("/community/login");
      }
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
  return (
    <div className="flex h-screen">
      <div className="leftSection flex justify-center items-center w-[60%] login-bg">
        <img
          src="/img/general/illustration1.svg"
          alt="Veteran Meet"
          className="max-w-[570px]"
        />
      </div>
      <div className="leftSection flex w-[40%] bg-[#F6F6F6] items-center p-[100px]">
        <div className="flex formContainer flex-col items-start gap-10">
          <Link to="/">
            <img
              src="/img/veteranMeetLogo.svg"
              alt="Veteran Meet"
              className="w-[170px]"
            />
          </Link>
          <form onSubmit={signup} className="flex flex-col gap-8">
            <h1 className="text-[62px] font-bold text-dark">Create</h1>
            <h2 className="text-[30px] font-bold text-dark">
              Your Community Account
            </h2>
            <Input
              icon={CommunityIcon}
              placeholder="Community Name"
              size="md"
              radius={"md"}
              required
              onChange={(event: any) => setCommunityName(event.target.value)}
            />
            <Input
              icon={OwnerIcon}
              placeholder="Owner Name"
              size="md"
              radius={"md"}
              required
              onChange={(event: any) => setOwnerName(event.target.value)}
            />
            <Input
              icon={MailIcon}
              placeholder="Community Email"
              size="md"
              radius={"md"}
              required
              onChange={(event: any) => setCommunityEmail(event.target.value)}
            />
            <PasswordInput
              icon={PasswordIcon}
              placeholder="Password"
              description="Password must include at least one letter, number and special character"
              radius="md"
              size="md"
              required
              onChange={(event: any) => setPassword(event.target.value)}
            />
            <Button
              type="submit"
              size="md"
              radius={"md"}
              className="bg-primary-main hover:bg-primary-dark"
              loading={loading}
            >
              Sign Up
            </Button>
            <p className="text-center">
              Already have an account?{" "}
              <Link to="/community/login" className="text-primary-dark">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommunitySignUp;
