import { Link } from "react-router-dom";
import { Button } from "@mantine/core";
// @ts-ignore
import { Navbar, HeroSection, EventsSection } from "@components/Home";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main className="z-10 login-bg">
        <HeroSection />
        <EventsSection />
      </main>
    </div>
  );
};

export default HomePage;
