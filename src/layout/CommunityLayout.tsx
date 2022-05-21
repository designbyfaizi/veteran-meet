import { FC } from "react";
import { Accordion, ThemeIcon, Text, Group, Button } from "@mantine/core";
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
  return (
    <div className="flex gap-[60px]">
      <div className="sidebar flex flex-col w-[280px] bg-greyish h-screen sticky top-0 px-[40px] py-[25px] gap-10">
        <CompanyName />
        <div className="sideNav flex flex-col">
          <Accordion
            initialItem={-1}
            iconPosition="right"
            classNames={{
              itemTitle: "rounded-xl text-white",
              icon:"!bg-white"
            }}
          >
            <Accordion.Item
              label={<AccordionLabel icon={<EventIcon />} name={"Events"} />}
              icon={
                <ThemeIcon color="violet" variant="light">
                  <DropDownIcon size={14} />
                </ThemeIcon>
              }
            ></Accordion.Item>
            <Accordion.Item
              label={
                <AccordionLabel icon={<FollowersIcon />} name={"Followers"} />
              }
              icon={
                <ThemeIcon color="violet" variant="light">
                  <DropDownIcon size={14} />
                </ThemeIcon>
              }
            ></Accordion.Item>
          </Accordion>
        </div>
        <Button leftIcon={<LogoutIcon/>} className={"mt-auto bg-transparent text-dark bg-red-500 hover:bg-red-600 text-white"}>Logout</Button>
      </div>
      {children}
    </div>
  );
};

export default CommunityLayout;
