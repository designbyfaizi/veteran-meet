import { Button, Modal } from "@mantine/core";
import { useState, FC } from "react";

interface EventProps {
  heading: string;
  description: string;
  hobby: string;
  date: string;
}

const Event: FC<EventProps> = ({ heading, description, hobby, date }) => {
  const [editOpened, setEditOpened] = useState(false);
  const [deleteOpened, setDeleteOpened] = useState(false);
  const [eventOpened, setEventOpened] = useState(false);
  const EventModal = () => (
    <Modal
      withCloseButton={false}
      opened={eventOpened}
      onClose={() => setEventOpened(false)}
    >
      <h1>Event Details Modal</h1>
    </Modal>
  );
  const EditModal = () => (
    <Modal
      withCloseButton={false}
      opened={editOpened}
      onClose={() => setEditOpened(false)}
    >
      <h1>Edit Event Modal</h1>
    </Modal>
  );
  const DeleteModal = () => (
    <Modal
      withCloseButton={false}
      opened={deleteOpened}
      onClose={() => setDeleteOpened(false)}
    >
      <h1>Delete Event Modal</h1>
    </Modal>
  );
  return (
    <li
      onClick={(event) => {
        event.stopPropagation();
        setEventOpened(true);
      }}
      className="event flex gap-10 items-center hover:bg-light-700 p-4 rounded-2xl cursor-pointer"
    >
      <EventModal />
      <EditModal />
      <DeleteModal />
      <img
        src="/img/pages/CommunityDashboard/eventDefaultImage.png"
        alt="Event"
        className="w-[220px] rounded-xl"
      />
      <div className="flex flex-col gap-5 h-full justify-between w-full">
        <h2 className="eventheading text-[23px] font-normal">{heading}</h2>
        <p className="text-[16px] font-normal">{description}</p>
        <div className="flex justify-between items-center">
          <h5 className="tag px-[14px] py-[6px] text-[15px] font-medium text-primary-lighter bg-primary-darker rounded-full">
            {hobby}
          </h5>
          <div className="flex gap-4">
            <Button
              onClick={(event: any) => {
                event.stopPropagation();
                setEditOpened(true);
              }}
              radius={"md"}
              className="bg-[#F6F6F6] text-primary-darker hover:bg-primary-darker hover:text-white"
            >
              Edit
            </Button>
            <Button
              onClick={(event: any) => {
                event.stopPropagation();
                setDeleteOpened(true);
              }}
              radius={"md"}
              className="bg-primary-darker text-white hover:bg-red-600"
            >
              Delete
            </Button>
          </div>
        </div>
        <div className="date bg-gray-200 text-dark px-3 py-1 rounded-full w-min text-[12px]">
          <p className="w-max">Sat May 21 2022 20:11:00 GMT+0500</p>
        </div>
      </div>
    </li>
  );
};

export default Event;
