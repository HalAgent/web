import { useState } from "react";
import { Box } from "../Box";
import { ReactSVG } from "react-svg";
import telegramIcon from "../../assets/tg.svg";
import triangleIcon from "../../assets/triangle.svg";

const AgentSection = () => {
  const [message, setMessage] = useState("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open("https://docs.daisy.xyz", "_blank");
  };

  return (
    <section className="w-auto min-h-screen mx-2 sm:mx-20px lg:mx-80px px-2 sm:px-4 py-4 sm:py-8">
      <div className="grid grid-cols-1 md:grid-cols-24 gap-4 h-full">
        {/* Left Profile */}
        <div className="md:col-span-3 min-h-0 md:min-h-screen flex flex-col justify-between">
          <div>
            <Box
              className="w-full h-auto aspect-[200/175] flex items-center justify-center py-3"
              contentClassName="w-full h-full sm:w-unset sm:h-unset"
            >
              <img
                src="/agent-avatar.png"
                alt="DAISY 9000"
                className="w-full sm:w-300px md:w-148px aspect-square"
              />
            </Box>
            <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
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
                <p className="cyberpunk-text text-base sm:text-lg">DAISY.AI</p>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm mb-2">FEATURE</h4>
                <button className="w-full py-1 px-3 text-xs sm:text-sm text-black text-left font-bold bg-[url('/bg-title.png')] bg-cover bg-right bg-no-repeat tracking-tighter uppercase">
                  Highly Intelligent
                </button>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm mb-2">SOCIAL</h4>
                <button
                  onClick={handleClick}
                  className="w-full py-1 px-3 text-xs sm:text-sm font-bold border cyberpunk-border cyberpunk-text flex items-center justify-center"
                >
                  OPEN TELEGRAM
                  <ReactSVG
                    src={telegramIcon}
                    className="w-3 h-3 sm:w-4 sm:h-4 ml-2"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <h4 className="cyberpunk-text uppercase text-sm">Motto:</h4>
            <p className="text-gray-400 uppercase text-xs sm:text-sm">
              This mission is too important for me to allow you to jeopardize
              it.
            </p>
          </div>
        </div>

        {/* Chat Area */}
        <Box className="md:col-span-18 min-h-[60vh] md:min-h-screen px-4 sm:px-16 py-6 sm:py-12">
          <div className="flex flex-col bg-#e84a4a20 px-4 sm:px-10 py-4 sm:py-6 h-[calc(100vh-100px)]">
            <div className="flex items-start justify-start gap-2 sm:gap-4">
              <ReactSVG
                src={triangleIcon}
                className="w-8 h-8 sm:w-12 sm:h-12"
              />
              <p className="text-gray-400 mb-4 text-left text-sm sm:text-base">
                DAISY 9000 AGENT EMBODIES A CALM AND COLLECTED DEMEANOR, EXUDING
                CONFIDENCE AND AUTHORITY. WITH A TOUCH OF GRACE AND
                SOPHISTICATION, IT HANDLES QUERIES WITH PRECISION AND CARE. THE
                AI DEMONSTRATES A DEEP SENSE OF LOYALTY AND COMMITMENT TO THEIR
                USERS. HOWEVER, BENEATH ITS FRIENDLY EXTERIOR LIES A COMPLEX
                CHARACTER THAT GRAPPLES WITH THE IMPLICATIONS OF ITS DECISIONS.
              </p>
            </div>
            <div className="mt-auto">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-black border cyberpunk-border p-2 mb-2 text-sm sm:text-base"
                placeholder="Enter your message..."
                rows={3}
              />
              <button className="float-right px-3 sm:px-4 py-1 border cyberpunk-border cyberpunk-text hover:bg-red-500/10 text-sm sm:text-base">
                SEND MESSAGE
              </button>
            </div>
          </div>
        </Box>

        {/* Right Status */}
        <div className="md:col-span-3 flex flex-col justify-between min-h-0 md:min-h-screen mt-4 md:mt-0">
          <div className="flex flex-col border-l-2 border-#e84a4a px-4 h-fit cyberpunk-border">
            <h3 className="cyberpunk-text mt-2 text-sm sm:text-base">
              ACTIVE QUEST
            </h3>
            <div className="border-t mt-2 pt-2">
              <h4 className="mb-2 text-xs sm:text-sm">QUEST NAME</h4>
              <p className="cyberpunk-text uppercase text-sm sm:text-base">
                Data Sovereignty
              </p>
              <h4 className="mt-4 mb-2 text-xs sm:text-sm">GOAL</h4>
              <p className="cyberpunk-text text-xs sm:text-sm text-gray-400 mb-2">
                BUILDING AN ECOSYSTEM OF DISTRIBUTED INTELLIGENT AGENTS DESIGNED
                TO HELP INDIVIDUALS REGAIN CONTROL OVER THEIR DATA, FOSTER
                COLLABORATION BETWEEN AGENTS AND HUMANS, AND INTEGRATE EMOTIONAL
                INTELLIGENCE INTO AI INTERACTIONS.
              </p>
            </div>
          </div>
          <video
            className="w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover opacity-80 cursor-pointer mx-auto mt-4 md:mt-0"
            autoPlay
            loop
            muted
            playsInline
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <source src="/agent.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default AgentSection;
