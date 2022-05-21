import { Input, Button, PasswordInput } from "@mantine/core";
import { Link } from "react-router-dom";

const CommunitySignUp = () => {
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
          <form className="flex flex-col gap-8">
            <h1 className="text-[62px] font-bold text-dark">Create</h1>
            <h2 className="text-[30px] font-bold text-dark">
              Your Community Account
            </h2>
            <Input
              icon={CommunityIcon}
              placeholder="Community Name"
              size="md"
              radius={"md"}
            />
            <Input
              icon={OwnerIcon}
              placeholder="Owner Name"
              size="md"
              radius={"md"}
            />
            <Input
              icon={MailIcon}
              placeholder="Community Email"
              size="md"
              radius={"md"}
            />
            <PasswordInput
              icon={PasswordIcon}
              placeholder="Password"
              description="Password must include at least one letter, number and special character"
              radius="md"
              size="md"
              required
            />
            <Button
              size="md"
              radius={"md"}
              className="bg-primary-main hover:bg-primary-dark"
            >
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommunitySignUp;
