import { Button } from "@mantine/core";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { setAuthToken } from "../../redux/community";
// @ts-ignore
import { CompanyName } from "@components/CommunityDashboard";
// import EventIcon from '../svgs/layouts/CommunityLayout/homeIcon.svg?component';
// @ts-ignore
import EventIcon from "@/svgs/layouts/CommunityLayout/homeIcon.svg?component";
// @ts-ignore
import FollowersIcon from "@/svgs/layouts/CommunityLayout/followersIcon.svg?component";
// @ts-ignore
import DropDownIcon from "@/svgs/layouts/CommunityLayout/dropDownIcon.svg?component";
// @ts-ignore
import LogoutIcon from "@/svgs/layouts/CommunityLayout/logoutIcon.svg?component";
import useAuth from "../../hooks/useAuth";

const Sidebar = () => {
  const authToken = useSelector((state: any) => state.community.authToken)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
  const token = sessionStorage.getItem("authToken");
    if (!token) {
      dispatch(setAuthToken(null));
      return navigate("/community/login");
    }
    else{
      dispatch(setAuthToken(token));
    }
  }, [authToken]);
  const [activeTab, setActiveTab] = useState(1);
  const auth = useAuth();
  return (
    <div className="sidebar flex flex-col w-[280px] bg-greyish h-screen sticky top-0 py-[25px] gap-10">
      <CompanyName />
      <div className="sideNav flex flex-col">
        <Button
          fullWidth
          size="xl"
          radius={0}
          leftIcon={<EventIcon />}
          className={`bg-gray-200 text-dark hover:bg-primary-dark flex gap-[20px] font-poppins font-normal ${
            activeTab == 1 && "!bg-primary-main"
          }`}
          onClick={() => setActiveTab(1)}
        >
          Home
        </Button>
        <Button
          fullWidth
          size="xl"
          radius={0}
          leftIcon={<FollowersIcon />}
          className={`bg-gray-200 text-dark hover:bg-primary-dark flex gap-[20px] font-poppins font-normal ${
            activeTab == 2 && "!bg-primary-main"
          }`}
          onClick={() => setActiveTab(2)}
        >
          Followers
        </Button>
      </div>
      <Button
        size="xl"
        radius={0}
        onClick={() => auth.logout()}
        leftIcon={<LogoutIcon />}
        className={
          "mt-auto bg-transparent text-white bg-red-500 hover:bg-red-600 text-white"
        }
      >
        Logout
      </Button>
    </div>
  );
};

export default Sidebar;
