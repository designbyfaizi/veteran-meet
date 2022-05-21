import { Button } from "@mantine/core";

const Event = () => {
  return (
    <li className="event flex gap-10 items-center hover:bg-light-700 p-4 rounded-2xl">
      <img
        src="/img/pages/CommunityDashboard/eventDefaultImage.png"
        alt="Event"
        className="w-[220px] rounded-xl"
      />
      <div className="flex flex-col gap-5">
        <h2 className="eventheading text-[23px] font-normal">Heading</h2>
        <p className="text-[16px] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          lobortis velit mollis erat pellentesque, eu varius neque
          scelerisque.....
        </p>
        <div className="flex justify-between items-center">
          <h5 className="tag px-[14px] py-[6px] text-[15px] font-medium text-primary-lighter bg-primary-darker rounded-full">
            Plantation Drive
          </h5>
          <div className="flex gap-4">
            <Button
              radius={"md"}
              className="bg-[#F6F6F6] text-primary-darker hover:bg-primary-darker hover:text-white"
            >
              Edit
            </Button>
            <Button
              radius={"md"}
              className="bg-primary-darker text-white hover:bg-red-600"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Event;
