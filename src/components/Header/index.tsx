import { ReactSVG } from "react-svg";
import XIcon from "../../assets/x.svg";
import GitbookIcon from "../../assets/gitbook.svg";
import DexscreenerIcon from "../../assets/dexscreener.svg";

interface HeaderProps {
  isHeaderVisible: boolean;
  isAtTop: boolean;
}

const Header = ({ isHeaderVisible, isAtTop }: HeaderProps) => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 transition-all duration-300 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      } ${isAtTop ? "bg-transparent" : "bg-black"}`}
    >
      <div className="flex items-center gap-2">
        <img
          src="/daisy-logo.svg"
          alt="DAISY.AI"
          className="w-6 h-6 sm:w-8 sm:h-8"
        />
        <span className="cyberpunk-text text-lg sm:text-xl">DAISY.AI</span>
      </div>
      <div className="flex gap-2 sm:gap-4">
        <a
          href="https://twitter.com/daisy_ai_"
          target="_blank"
          rel="noopener noreferrer"
          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-white rounded-full"
        >
          <ReactSVG
            src={XIcon}
            className="color-black hover:color-red hover:cursor-pointer w-5 h-5 sm:w-6 sm:h-6"
          />
        </a>
        <a
          href="https://docs.daisy.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-white rounded-full"
        >
          <ReactSVG
            src={GitbookIcon}
            className="color-black hover:color-red hover:cursor-pointer w-5 h-5 sm:w-6 sm:h-6"
          />
        </a>
        <a
          href="https://dexscreener.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-white rounded-full"
        >
          <ReactSVG
            src={DexscreenerIcon}
            className="color-black hover:color-red hover:cursor-pointer scale-75 sm:scale-80"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
