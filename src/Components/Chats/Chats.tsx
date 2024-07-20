import { Chat, Message, User } from "../Chat/Chat";
import "./style.css";

interface Chats {
  messages: Message[];
  user1: User;
  admin: User;
  onSendMessage: (text: string, sender: string, date: string) => void;
}

export const Chats = ({ messages, onSendMessage, user1, admin }: Chats) => {
  return (
    <section className="section-chats">
      <div className="container">
        {/* <div className="section-chats__wrapper"> */}
          <div className="chat-container">
            <Chat
              messages={messages}
              onSendMessage={onSendMessage}
              sender={user1}
              reciever={admin}
            />
            <Chat
              messages={messages}
              onSendMessage={onSendMessage}
              sender={admin}
              reciever={user1}
            />
          </div>
        {/* </div> */}
      </div>
    </section>
  );
};
