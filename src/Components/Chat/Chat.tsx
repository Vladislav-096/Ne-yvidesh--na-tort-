import { useState } from "react";
import emptyStar from "../../assets/star-empty.svg";
import Star from "../../assets/star.svg";
import "./style.css";
import { formatDate } from "../../Utils/format-date";
import { useChatScroll } from "../../Hooks/UseChatScroll";

export interface Message {
  sender: string;
  text: string;
  date: string;
}

export interface User {
  name: string;
  occupation: string;
  rating: number | null;
  img: string;
}

interface Chat {
  messages: Message[];
  sender: User;
  reciever: User;
  onSendMessage: (text: string, sender: string, date: string) => void;
}

export const Chat = ({ messages, onSendMessage, sender, reciever }: Chat) => {
  const [input, setInput] = useState("");

  const messagesEndRef = useChatScroll(messages);

  const handleSendMessage = () => {
    if (input.trim()) {
      onSendMessage(input, sender.name, formatDate(new Date()));
      onSendMessage(input, reciever.name, formatDate(new Date()));
      setInput("");
    }
  };

  const admin = "Администратор";

  const maxStartCout = 5;
  let arrayOfEmptyStars = Array(maxStartCout).fill(0);

  function arrayOfStars(rating: number) {
    return arrayOfEmptyStars.fill(1, 0, rating);
  }

  return (
    <div className="chat-window">
      <h2 className="chat-heading">
        {sender.name == admin ? "Чат с администратором" : "Чат с пользователем"}
      </h2>
      <div className="chat-window__inner">
        <div className="chat-info-section">
          <picture className="chat-window__avatar-picture">
            <img src={sender ? sender.img : reciever.img} alt="avatar" />
          </picture>
          <div className="chat-user-name-wrapper">
            <h3 className="chat-user-name">
              {sender ? sender.name : reciever.name}
            </h3>
            <p className="chat-user-descr">
              {sender ? sender.occupation : reciever.occupation}
            </p>
          </div>
          <div className="admin-stars">
            {sender &&
              sender.rating &&
              arrayOfStars(sender.rating).map((star, index) =>
                star == 1 ? (
                  <img
                    className="chat-window__star"
                    src={Star}
                    key={index}
                    alt="star"
                  />
                ) : (
                  <img
                    className="chat-window__star"
                    src={emptyStar}
                    key={index}
                    alt="star"
                  />
                )
              )}
          </div>
        </div>
        {/* <div className="scroll-wrapper"> */}
          <div className="messages" ref={messagesEndRef}>
            {messages.map((msg, index) => ( // messages-wrapper
              <div className={msg.sender == admin ? 'messages-wrapper' : 'messages-wrapper messages-wrapper-user'} key={index}>
                <picture className="chat-window__picture">
                  <img
                    src={msg.sender == sender.name ? sender.img : reciever.img}
                    alt="avatar"
                  />
                </picture>
                {/* <p>{msg.sender}</p> Для проверки */}
                <div className="messages-inner-wrapper">
                  <p className="chat-window__descr">{msg.text}</p>
                  <span className="chat-window__data">{msg.date}</span>
                </div>
              </div>
            ))}
          </div>
        {/* </div> */}
        <div className="input-area">
          <picture className="chat-window__avatar-picture">
            <img src={sender ? sender.img : reciever.img} alt="avatar" />
          </picture>
          <div className="input-wrapper">
            {!input && (
              <span className="chat-window__placeholder">
                Напишите сообщение...
              </span>
            )}
            <input
              className="chat-window__input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSendMessage();
              }}
            />
          </div>
          <button className="btn-reset chat-window__btn" onClick={handleSendMessage}></button>
        </div>
      </div>
    </div>
  );
};
