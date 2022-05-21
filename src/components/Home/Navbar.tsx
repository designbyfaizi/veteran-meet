import { Link, useLocation } from "react-router-dom";
import { NavItem } from "../Home";

const Navbar = () => {
  const {pathname} = useLocation();
  console.log(pathname == "/")
  return (
    <nav className="sticky top-0 bg-white !backdrop-blur-xl z-50">
      <div className="flex justify-between items-center h-[100px] container mx-auto ">
        <Link to="/">
          <img
            src="/img/veteranMeetLogo.svg"
            alt="Veteran Meet"
            className="w-[100px]"
          />
        </Link>
        <ul className="flex no-underline gap-4">
          <NavItem active={pathname == "/"} to="/" text="Home" />
          <NavItem active={pathname == "/community/login"} to="/community/login" text="Login" />
          <NavItem active={pathname == "/community/signup"} to="/community/signup" text="Sign Up" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
