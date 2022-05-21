// @ts-nocheck
import CommunityLayout from "@/layout/CommunityLayout";
import { Event } from "@components/CommunityDashboard";
import axios from "axios";
import { useState, useEffect } from "react";

const CommunityDashboard = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  const fetchEvents = async () => {
    const response = await axios.get(
      "https://veteran-meet-backend.herokuapp.com/community/events"
    );
    setUpcomingEvents(response.data.events);
    console.log(upcomingEvents);
  };

  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <CommunityLayout>
      <div className="py-8 flex flex-col gap-16">
        <div className="upcomingSection flex flex-col gap-10 min-w-[700px] max-w-[700px]">
          <h1 className="font-normal text-[32px] text-dark">Upcoming Events</h1>
          <ul className="list flex flex-col">
            {upcomingEvents.map((event, index) => {
              return (
                <Event
                  heading={event.eventName}
                  description={event.eventDescription}
                  hobby={event.eventHobby}
                />
              );
            })}
          </ul>
        </div>
        <div className="pastSection flex flex-col gap-10 max-w-[700px]">
          <h1 className="font-normal text-[32px] text-dark">Past Events</h1>
          <ul className="list flex flex-col">
            {upcomingEvents.map((event, index) => {
              return (
                <Event
                  heading={event.eventName}
                  description={event.eventDescription}
                  hobby={event.eventHobby}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </CommunityLayout>
  );
};

export default CommunityDashboard;
