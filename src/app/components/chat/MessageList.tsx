import { useEffect, useRef } from "react";
import { Message } from "../../../types/chat";
import { MessageBubble } from "./MessageBubble";
import { TypingIndicator } from "./TypingIndicator";

interface MessageListProps {
  messages: Message[];
  isTyping: boolean;
}

export function MessageList({ messages, isTyping }: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto px-4 md:px-6 py-6 space-y-4">
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}
      {isTyping && <TypingIndicator />}
      <div ref={bottomRef} />
    </div>
  );
}
