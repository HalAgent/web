import React, { useEffect, useRef } from "react";
import { Message } from "../../types/chat";
import { ReactSVG } from "react-svg";
import triangleIcon from "../../assets/triangle.svg";
import gsap from "gsap";

export const ChatMessage: React.FC<Message> = ({ text, user, updatedAt }) => {
  const isUser = user === "user";
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!isUser && textRef.current && text) {
      const chars = textRef.current.textContent?.split("") || [];
      textRef.current.textContent = "";
      
      chars.forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = "0";
        textRef.current?.appendChild(span);
      });

      gsap.to(textRef.current.children, {
        opacity: 1,
        duration: 0.05,
        stagger: 0.02,
        ease: "none"
      });
    }
  }, [text, isUser]);

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      } mb-4 animate-fade-in`}
    >
      <div
        className={`flex flex-col max-w-[80%] items-center py-2 ${
          isUser ? "text-gray-300 " : "text-gray-400 mb-4 text-left text-sm sm:text-base"
        }`}
      >
        {updatedAt && (
          <p
            className="w-full text-[12px] inknut-antiqua text-gray-400"
            style={{ textAlign: "left" }}
          >
            {updatedAt}
          </p>
        )}
        {text &&
          (!isUser ? (
            <div className="flex items-start justify-start gap-2 sm:gap-4">
              <ReactSVG
                src={triangleIcon}
                className="w-4 h-4"
              />
              <p 
                ref={textRef}
                className="flex-1 text-gray-400 mb-4 text-left text-md sm:text-base"
              >
                {text}
              </p>
            </div>
          ) : (
            <p
              className="w-full text-md"
              style={{ textAlign: "left", fontWeight: "bold" }}
            >
              {text}
            </p>
          ))}
      </div>
    </div>
  );
};
