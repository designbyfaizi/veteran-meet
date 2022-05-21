import { Input, PasswordInput, Button } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useDispatch } from "react-redux";
import { setAuthToken } from "../redux/community";
import {useSelector} from "react-redux";

const { sessionStorage } = window;

const CommunityLogin = () => {
  const authToken = useSelector((state : any) => state.community.authToken)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    if (token) {
      dispatch(setAuthToken(token));
      navigate("/community/dashboard");
    }
  }, [authToken]);
  const auth = useAuth();
  const MailIcon = <img src="/img/pages/Login/mailIcon.svg" alt="Email" />;
  const PasswordIcon = (
    <img src="/img/pages/Login/passwordIcon.svg" alt="Password" />
  );

  return (
    <div className="flex min-h-screen">
      <div className="leftSection flex w-[40%] bg-[#F6F6F6] items-center p-[100px]">
        <div className="flex formContainer flex-col items-start gap-10">
          <Link to="/">
            <img
              src="/img/veteranMeetLogo.svg"
              alt="Veteran Meet"
              className="w-[170px]"
            />
          </Link>
          <form onSubmit={auth.login} className="flex flex-col gap-8">
            <h1 className="text-[62px] font-bold text-dark">Sign Into</h1>
            <h2 className="text-[30px] font-bold">Your Community Account</h2>
            <Input
              icon={MailIcon}
              placeholder="Email"
              size="md"
              radius={"md"}
              value={auth.email}
              required
              onChange={(event: any) => auth.setEmail(event.target.value)}
            />
            <PasswordInput
              icon={PasswordIcon}
              placeholder="Password"
              size="md"
              radius={"md"}
              onChange={(event: any) => auth.setPassword(event.target.value)}
              value={auth.password}
              required
            />
            <Button
              size="md"
              radius={"md"}
              className="bg-primary-main hover:bg-primary-dark"
              type="submit"
              loading={auth.loading}
            >
              Sign In
            </Button>
            <p className="text-center">Don't have an account? <Link to="/community/signup" className="text-primary-dark">Sign Up</Link></p>
          </form>
        </div>
      </div>
      <div className="leftSection flex justify-center items-center w-[60%] login-bg">
        <img
          src="/img/general/illustration1.svg"
          alt="Veteran Meet"
          className="max-w-[570px]"
        />
      </div>
    </div>
  );
};

export default CommunityLogin;
