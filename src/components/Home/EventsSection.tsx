import { EventCard } from "../Home";

const EventsSection = () => {
  return (
    <section className="heroSection min-h-[400px] flex flex-col justify-center container mx-auto py-16 mb-[200px] gap-16">
      <h1 className="text-[62px] text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-300 font-bold p-2 text-center">
        Some of our Upcoming Events
      </h1>
      <div className="grid grid-cols-3 gap-8">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </section>
  );
};

export default EventsSection;
