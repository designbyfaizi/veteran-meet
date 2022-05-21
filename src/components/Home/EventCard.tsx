import { Button } from "@mantine/core";

const EventCard = () => {
  return (
    <div className="card bg-primary-main p-4 rounded-xl flex flex-col gap-4 text-primary-darker transition-all duration-75 hover:(translate-y-2)">
      <img
        src="/img/pages/CommunityDashboard/eventDefaultImage.png"
        alt="Event"
        className="rounded-lg"
      />
      <h1 className="heading text-[30px] text-center">Event Name</h1>
      <h2 className="heading text-[16px] text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorum
        exercitationem quia necessitatibus...
      </h2>
      <Button size="xl" radius={"md"} className="bg-primary-darker hover:(bg-cyan-700)">See More</Button>
    </div>
  );
};

export default EventCard;
