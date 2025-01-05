import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import { Message } from "../../types/chat";
import { debounce } from "lodash";
import styles from "./ChatHistory.module.css";

interface ChatHistoryProps {
  messages: Message[];
  loading?: boolean;
  className?: string;
}

export const ChatHistory: React.FC<ChatHistoryProps> = ({
  messages,
  loading = false,
  className = "",
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const hasUserMessage = useMemo(() => {
    return messages.some((message) => message.user === "user");
  }, [messages]);

  const scrollToBottom = useCallback(() => {
    if (messagesEndRef.current && hasUserMessage) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [hasUserMessage]);

  const handleScroll = debounce(() => {
    if (!containerRef.current) return;
  }, 100);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (!loading) {
      scrollToBottom();
    }
  }, [loading, scrollToBottom]);

  if (messages.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center text-gray-500"></div>
    );
  }

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className={`flex-1 overflow-y-auto py-4 pt-0 space-y-4 ${styles.hideScrollbar} ${className}`}
    >
      {messages.map((message, index) => (
        <ChatMessage
          key={`${message.user}-${index}-${message.action}`}
          text={message.text}
          user={message.user}
          title={message.title}
          updatedAt={message.updatedAt}
          action={message.action}
        />
      ))}

      {loading && (
        <div className="flex justify-start animate-fade-in">
          <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%]">
            <div className="flex space-x-2">
              <div className={styles.loadingDot} />
              <div className={styles.loadingDot} />
              <div className={styles.loadingDot} />
            </div>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} className="h-0" />
    </div>
  );
};
