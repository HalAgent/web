import { useWindowResize } from "../../hooks/useWindowResize";
import AgentSection from "../../components/AgentSection";

const DaisyAgent: React.FC = () => {
  useWindowResize(() => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
  }, 300);

  return (
    <div className="cyberpunk-bg text-white">
      <AgentSection />
    </div>
  );
};

export default DaisyAgent;
