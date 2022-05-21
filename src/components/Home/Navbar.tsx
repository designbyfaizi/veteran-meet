import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white bg-opacity-70 !backdrop-blur-xl h-fit mb-[-100px] z-50">
      <div className="flex justify-between items-center h-[100px] container mx-auto ">
        <Link to="/">
          <img
            src="/img/veteranMeetLogo.svg"
            alt="Veteran Meet"
            className="w-[100px]"
          />
        </Link>
        <ul className="flex no-underline gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/community/login">Login</Link>
          </li>
          <li>
            <Link to="/community/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
