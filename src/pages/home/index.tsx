import Header from "../../components/Header";
import DescriptionSection from "../../components/DescriptionSection";
import { useWindowResize } from "../../hooks/useWindowResize";

const Home: React.FC = () => {
  useWindowResize(() => {
    document.documentElement.style.setProperty(
      "--vh",
      `${window.innerHeight * 0.01}px`
    );
  }, 300);

  return (
    <div className="cyberpunk-bg text-white">
      <Header isHeaderVisible isAtTop />
      <DescriptionSection />
    </div>
  );
};

export default Home;
