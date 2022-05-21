import { FC, useEffect, useState } from "react";
import { Text, Group } from "@mantine/core";
// @ts-ignore
import { Sidebar, RightSidebar } from "@components/CommunityLayout";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthToken } from "../redux/community";

const { sessionStorage } = window;

interface CommunityLayoutProps {
  children: any;
}

interface AccordionLabelProps {
  icon: any;
  name: string;
}

function AccordionLabel({ icon, name }: AccordionLabelProps) {
  return (
    <Group noWrap>
      {icon}
      <div>
        <Text>{name}</Text>
      </div>
    </Group>
  );
}

const CommunityLayout: FC<CommunityLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const authToken = useSelector((state: any) => state.community.authToken);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    if (!token) {
      dispatch(setAuthToken(null));
      navigate("/community/login");
    }
  }, [authToken]);
  return (
    <div className="flex gap-[60px] justify-start login-bg">
      <Sidebar />
      <div className="mainSection">{children}</div>
      <RightSidebar/>
    </div>
  );
};

export default CommunityLayout;
