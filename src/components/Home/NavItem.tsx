// @ts-nocheck
import { Link } from "react-router-dom";

interface NavItemProps {
    to: string,
    text: string,
    active: boolean,
}

const NavItem = ({ to, text, active }) => {
  return (
    <li>
      <Link to={to} className={`bg-gray-200 text-dark hover:(bg-primary-darker text-white) rounded-full px-3 py-1 underline-transparent ${active && "!bg-primary-dark !text-white"}`}>{text}</Link>
    </li>
  );
};

export default NavItem;
