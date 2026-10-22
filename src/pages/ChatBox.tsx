import { Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { MessageForm } from "../types/message";
import MessageCard from "../components/MessageCard";
import {initialMessages}  from "../data/message";

function ChatBox() {
  // Input ထဲက လက်ရှိစာ
  const [message, setMessage] = useState("");

  // Chat ထဲက message အားလုံး
  const [messages, setMessages] = useState<MessageForm[]>(initialMessages);

  // Messages အောက်ဆုံးကို reference လုပ်
  const bottomRef = useRef<HTMLDivElement>(null);

  // Message အသစ်ရောက်တိုင်း အောက်ဆုံးကို scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = () => {
    // စာမရှိရင် မပို့
    if (message.trim() === "") return;

    // Message အသစ်ဖန်တီး
    const newMessage: MessageForm = {
      id: Date.now(),
      sender: "Me",
      text: message.trim(),
    };

    // အရင် messages + အသစ်
    setMessages((prev) => [...prev, newMessage]);

    // Input ပြန်ရှင်း
    setMessage("");
  };

  return (
    <div className="flex h-full flex-col bg-gray-100">

      {/* Messages */}
      <div className="min-h-0 flex-1 overflow-y-auto p-5">
        {messages.map((item) => (
          <MessageCard 
            key={item.id} message={item}/>
        ))}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="flex items-center gap-3 border-t bg-white p-2">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          className="min-w-0 flex-1 rounded-xl px-4 py-2 outline-none"
        />

        <button
          type="button"
          onClick={sendMessage}
          className="cursor-pointer rounded-full bg-blue-500 p-3 text-white"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default ChatBox;