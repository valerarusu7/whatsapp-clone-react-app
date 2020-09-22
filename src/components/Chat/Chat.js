import { useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
import React from "react";
import "./Chat.css";

function Chat() {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
      e.preventDefault();
      setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p className={`chat__message ${true && "chat__receiver"}`}>
          <span className="chat__name">Valeriu Rusu</span>
          Hey Guys
          <span className="chat__timestamp">3:12</span>
        </p>
      </div>

      <div className="chat__footer">
        <IconButton>
          <InsertEmoticon />
        </IconButton>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button onClick={sendMessage} type="submit">
            Send Message
          </button>
        </form>
        <IconButton>
          <Mic />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
