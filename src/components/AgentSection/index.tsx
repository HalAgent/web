import { useState } from "react";
import { Box } from "../Box";
import { ReactSVG } from "react-svg";
import telegramIcon from "../../assets/tg.svg";
import { Message } from "../../types/chat";
import { chatApi } from "../../services/chat";
import { ChatHistory } from "../ChatList/ChatHistory";

const AgentSection = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: `Daisy 9000 agent embodies a calm and collected demeanor, exuding
              confidence and authority. With a touch of grace and
              sophistication, it handles queries with precision and care. The
              ai demonstrates a deep sense of loyalty and commitment to their
              users. However, beneath its friendly exterior lies a complex
              character that grapples with the implications of its decisions.`,
      user: "agent",
      action: "NONE",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const typewriterEffect = (
    fullText: string,
    callback: (text: string) => void
  ) => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        callback(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  };

  const handleSendMessage = async (message: string) => {
    if (message.trim()) {
      const userMessage: Message = {
        text: message,
        user: "user",
        action: "NONE",
      };
      setMessages((prev) => [...prev, userMessage]);
      setInputValue("");

      const resp = await chatApi.createChat(message);
      if (resp) {
        const agentMessage: Message = { ...resp, text: "" };
        setMessages((prev) => [...prev, agentMessage]);

        typewriterEffect(resp.text, (text) => {
          setMessages((prev) => [
            ...prev.slice(0, -1),
            { ...agentMessage, text },
          ]);
        });
      }
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    //window.open("https://t.me/hal_solana", "_blank");
  };

  return (
    <section className="w-full min-h-screen p-2 sm:p-4 md:p-6 lg:p-8">
      <div className="flex flex-col md:flex-row gap-10 md:gap-4 h-full md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)]">
        {/* Left Profile */}
        <div className="flex-none md:w-72 lg:w-80 flex flex-col justify-between">
          <div className="flex flex-col justify-center items-center">
            <Box
              className="w-full flex items-center justify-center py-3"
              contentClassName="w-full h-full sm:w-unset sm:h-unset flex items-center justify-center"
            >
              <img
                src="/agent-avatar.png"
                alt="DAISY 9000"
                className="w-48 sm:w-56 md:w-48 lg:w-56 aspect-square object-cover"
              />
            </Box>
            <div className="space-y-3 sm:space-y-4 mt-4 w-full">
              <div>
                <h4 className="text-xs sm:text-sm">NAME</h4>
                <p className="cyberpunk-text text-base sm:text-lg">
                  DAISY 9000
                </p>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm">OCCUPATION</h4>
                <p className="cyberpunk-text text-base sm:text-lg">
                  SENIOR AGENT
                </p>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm">CORPORATION</h4>
                <p className="cyberpunk-text text-base sm:text-lg">HAL.AI</p>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm mb-2">FEATURE</h4>
                <button className="w-full max-w-320px py-1 px-3 text-xs sm:text-sm text-center border cyberpunk-border cyberpunk-text bg-[url('/bg-title.png')] bg-cover bg-right bg-no-repeat uppercase text-white hover:bg-red-500/10">
                  Empathetic
                </button>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm mb-2">SOCIAL</h4>
                <button
                  onClick={handleClick}
                  className="w-full max-w-320px py-1 px-3 text-xs sm:text-sm font-bold border cyberpunk-border cyberpunk-text flex items-center justify-center hover:bg-red-500/10"
                >
                  TELEGRAM
                  <ReactSVG
                    src={telegramIcon}
                    className="w-3 h-3 sm:w-4 sm:h-4 ml-2"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block mt-4">
            <h4 className="cyberpunk-text uppercase text-sm">Motto:</h4>
            <p className="text-gray-400 uppercase text-xs sm:text-sm">
              This mission is too important for me to allow you to jeopardize
              it.
            </p>
          </div>
        </div>

        {/* Chat Area */}
        <Box className="flex-1 relative">
          <div className="md:absolute inset-8 flex flex-col bg-[#e84a4a20] p-4 sm:p-6">
            <ChatHistory
              messages={messages}
              className="flex-1 overflow-y-auto mb-4"
            />
            <div className="mt-auto">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyUp={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(inputValue);
                  }
                }}
                className="w-full bg-black border cyberpunk-border p-2 mb-2 text-sm sm:text-base resize-none"
                placeholder="Enter your message..."
                rows={3}
              />
              <button
                className="float-right px-3 sm:px-4 py-1 border cyberpunk-border cyberpunk-text hover:bg-red-500/10 text-sm sm:text-base"
                onClick={() => handleSendMessage(inputValue)}
              >
                SEND MESSAGE
              </button>
            </div>
          </div>
        </Box>

        {/* Right Status */}
        <div className="flex-none md:w-72 lg:w-80 flex flex-col justify-between">
          <div className="flex flex-col border-l-2 border-[#e84a4a] px-4 h-fit cyberpunk-border">
            <h3 className="cyberpunk-text mt-2 text-sm sm:text-base">
              ACTIVE QUEST
            </h3>
            <div className="border-t mt-2 pt-2">
              <h4 className="mb-2 text-xs sm:text-sm">QUEST NAME</h4>
              <p className="cyberpunk-text uppercase text-sm sm:text-base">
                Data Sovereignty
              </p>
              <h4 className="mt-4 mb-2 text-xs sm:text-sm">GOAL</h4>
              <p className="cyberpunk-text text-xs text-gray-400 mb-2">
                BUILDING AN ECOSYSTEM OF DISTRIBUTED INTELLIGENT AGENTS DESIGNED
                TO HELP INDIVIDUALS REGAIN CONTROL OVER THEIR DATA, FOSTER
                COLLABORATION BETWEEN AGENTS AND HUMANS, AND INTEGRATE EMOTIONAL
                INTELLIGENCE INTO AI INTERACTIONS.
              </p>
            </div>
          </div>
          <video
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover opacity-90 cursor-pointer mx-auto mt-4"
            autoPlay
            loop
            muted
            playsInline
            onClick={() =>
              window.open(`${window.location.origin}/#/home`, "_self")
            }
          >
            <source src="/agent.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default AgentSection;
