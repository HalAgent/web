import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const DescriptionSection = () => {
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(title1Ref.current, {
      duration: 1,
      text: "YOUR DATA, YOUR AGENTS,",
      ease: "none",
    })
      .to(title2Ref.current, {
        duration: 1,
        text: "YOUR EMPOWERMENT.",
        ease: "none",
      })
      .to(descriptionRef.current, {
        duration: 2,
        text: "BUILDING AN ECOSYSTEM OF DISTRIBUTED INTELLIGENT AGENTS DESIGNED TO HELP INDIVIDUALS REGAIN CONTROL OVER THEIR DATA, FOSTER COLLABORATION BETWEEN AGENTS AND HUMANS, AND INTEGRATE EMOTIONAL INTELLIGENCE INTO AI INTERACTIONS.",
        ease: "none",
      });
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open("https://docs.daisy.xyz", "_blank");
  };

  return (
    <section className="min-h-screen relative p-8">
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-30 pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/bg-home.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="relative z-10 w-full px-4 sm:px-0 sm:w-3/5 h-400px m-auto text-left">
          <h1 ref={title1Ref} className="cyberpunk-text text-3xl sm:text-6xl mb-2 sm:mb-4"></h1>
          <h1 ref={title2Ref} className="cyberpunk-text text-3xl sm:text-6xl mb-4 sm:mb-8"></h1>
          <p ref={descriptionRef} className="text-gray-400 text-sm sm:text-base max-w-2xl"></p>
          <button
            className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 border cyberpunk-border cyberpunk-text hover:bg-red-500/10 text-sm sm:text-base"
            onClick={handleClick}
          >
            EXPLORE DAISY 9000
          </button>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;