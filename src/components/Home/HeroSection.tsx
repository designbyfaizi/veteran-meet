import { Button } from "@mantine/core";

const HeroSection = () => {
  return (
    <section className="heroSection min-h-[500px] flex flex-col justify-center container mx-auto">
      <div className="heroContainer flex justify-center items-center gap-8">
        <img
          src="/img/general/illustration1.svg"
          alt="Hero Image"
          className="max-w-[380px]"
        />
        <div className="flex flex-col justify-start max-w-[500px] gap-8">
          <h1 className="text-[62px] text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500 font-bold">
            Veteran Meet
          </h1>
          <p className="tetx-dark">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis et
            quaerat totam tempore pariatur ipsam esse, facilis in error est
            aliquam adipisci eaque quasi sed, officia praesentium delectus vero
            dolore!
          </p>
          <Button
            radius={"md"}
            size={"md"}
            className="max-w-[200px] text-dark bg-primary-main hover:(bg-primary-darker text-white)"
          >
            Log In
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
