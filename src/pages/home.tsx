import { Link } from "react-router-dom";
import { Button } from "@mantine/core";
// @ts-ignore
import { Navbar } from "@components/Home";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main className="z-10">
        <section className="heroSection min-h-[600px] flex flex-col justify-center items-center login-bg">
          <div className="heroContainer flex justify-between items-center gap-8">
            <img
              src="/img/general/illustration1.svg"
              alt="Hero Image"
              className="max-w-[380px]"
            />
            <div className="flex flex-col justify-start max-w-[400px] gap-8">
              <h1 className="text-[62px] text-dark font-bold">Veteran Meet</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis et quaerat totam tempore pariatur ipsam esse, facilis
                in error est aliquam adipisci eaque quasi sed, officia
                praesentium delectus vero dolore!
              </p>
              <Button radius={"md"} size={"md"} className="max-w-[200px] text-dark bg-primary-main hover:(bg-primary-darker text-white)" >Log In</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
