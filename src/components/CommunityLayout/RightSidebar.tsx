import { Button, Modal } from "@mantine/core";
import { useState } from "react";

const RightSidebar = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div className="rightSidebar w-[380px] w-full flex flex-col items-center p-10 ml-auto h-screen sticky top-0">
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Add an Event!"
      >
        {/* Modal content */}
      </Modal>
      <Button fullWidth size="xl" radius={"md"} onClick={() => setOpened(true)}>
        + Add Event
      </Button>
    </div>
  );
};

export default RightSidebar;
