import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";

const ScrollReveal = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const { ref, isVisible } = useScrollAnimation(0.01);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
