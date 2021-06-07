import "./message.css";
import { format } from "timeago.js";

const Message = ({ message, own }) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://i.ibb.co/VDcbMQ4/FD121-A2-F-B890-4-A95-AD23-82392-E30-C3-DE.jpg"
          alt="FD121-A2-F-B890-4-A95-AD23-82392-E30-C3-DE"
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
};

export default Message;
