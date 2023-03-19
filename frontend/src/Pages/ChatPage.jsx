import { Box } from "@chakra-ui/react";
import Chatbox from "../components/ChatBox";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChat from "../components/MyChat";
import { ChatState } from "../Context/ChatProvider";

const ChatPage = () => {
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box display={"flex"}>
        {user && <MyChat />}
        {user && <Chatbox />}
      </Box>
    </div>
  );
};

export default ChatPage;
