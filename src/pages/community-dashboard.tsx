// @ts-nocheck
import CommunityLayout from "@/layout/CommunityLayout";
import { Button } from "@mantine/core";
import { Event } from "@components/CommunityDashboard";

const CommunityDashboard = () => {
  return (
    <CommunityLayout>
      <div className="py-8 flex flex-col gap-16">
        <div className="upcomingSection flex flex-col gap-10 max-w-[700px]">
          <h1 className="font-normal text-[32px] text-dark">Upcoming Events</h1>
          <ul className="list flex flex-col">
            <Event/>
            <Event/>
          </ul>
        </div>
        <div className="pastSection flex flex-col gap-10 max-w-[700px]">
          <h1 className="font-normal text-[32px] text-dark">Past Events</h1>
          <ul className="list flex flex-col">
            <Event/>
            <Event/>
          </ul>
        </div>
      </div>
    </CommunityLayout>
  );
};

export default CommunityDashboard;
