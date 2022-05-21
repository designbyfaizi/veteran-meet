import { Input, Button } from "@mantine/core";

const CommunityLogin = () => {
    const MailIcon = <img src="/img/pages/Login/mailIcon.svg" alt="Email"/>
    const PasswordIcon = <img src="/img/pages/Login/passwordIcon.svg" alt="Password"/>
  return (
    <div className="flex min-h-screen">
      <div className="leftSection flex w-[40%] bg-[#F6F6F6] items-center p-[100px]">
        <div className="flex formContainer flex-col items-start gap-10">
          <img
            src="/img/veteranMeetLogo.svg"
            alt="Veteran Meet"
            className="w-[170px]"
          />
          <form className="flex flex-col gap-8">
            <h1 className="text-[62px] font-bold text-dark">Sign Into</h1>
            <h2 className="text-[30px] font-bold">Your Community Account</h2>
            <Input icon={MailIcon} placeholder="Email" size="md" radius={"md"} />
            <Input icon={PasswordIcon} placeholder="Password" size="md" radius={"md"} />
            <Button size="md" radius={"md"} className="bg-primary-main hover:bg-primary-dark">Sign In</Button>
          </form>
        </div>
      </div>
      <div className="leftSection flex justify-center items-center w-[60%] login-bg">
          <img src="/img/general/illustration1.svg" alt="Veteran Meet" className="max-w-[570px]"  />
      </div>
    </div>
  );
};

export default CommunityLogin;
