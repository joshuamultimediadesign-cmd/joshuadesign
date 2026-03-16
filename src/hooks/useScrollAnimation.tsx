import { useEffect, useRef, useState } from "react";

export const useScrollAnimation = (threshold = 0.05) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback: if element is already in viewport on mount, show immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: "50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

export const useStaggerAnimation = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const children = container.querySelectorAll("[data-stagger]");
          children.forEach((_, i) => {
            setTimeout(() => {
              setVisibleItems((prev) => new Set(prev).add(i));
            }, i * 100);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visibleItems };
};
