import { useState } from "react";
import { Message } from "../Chat/Chat";
import { Chats } from "../Chats/Chats";
import { allUsers, chatMessagesEx } from "../../Users/Users";
import { Reviews } from "../Reviews/Reviews";
import { Hero } from "../Hero/Hero";
export const Layout = () => {
  const [messages, setMessages] = useState<Message[]>([...chatMessagesEx]);

  const handleSendMessage = (text: string, sender: string, date: string) => {
    const newMessage = { text, sender, date };

    let newArray = [...messages, newMessage];

    setMessages(newArray);
  };

  return (
    <main>
      <Hero />
      <Reviews />
      <Chats
        messages={messages}
        onSendMessage={handleSendMessage}
        admin={allUsers.admin}
        user1={allUsers.user1}
      />
    </main>
  );
};
