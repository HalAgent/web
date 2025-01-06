import { useState, useEffect } from "react";
import Header from "../../components/Header";
import DescriptionSection from "../../components/DescriptionSection";

const Home: React.FC = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHeaderVisible(currentScrollY <= lastScrollY || currentScrollY <= 0);
      setLastScrollY(currentScrollY);
      setIsAtTop(currentScrollY <= 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="cyberpunk-bg text-white">
      <Header isHeaderVisible={isHeaderVisible} isAtTop={isAtTop} />
      <DescriptionSection />
    </div>
  );
};

export default Home;
