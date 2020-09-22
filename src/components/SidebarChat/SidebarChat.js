import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

function SidebarChat({ addNewChat }) {
  const createChat = () => {
      const roomName = prompt("Please enter name for chat");
      if (roomName) {
          
      }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" />
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>Last Message ...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChat;
