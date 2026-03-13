import { useState, useRef, useCallback } from "react";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  title: string;
}

const BeforeAfterSlider = ({ before, after, title }: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, x)));
  }, []);

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseMove = (e: React.MouseEvent) => { if (isDragging.current) updatePosition(e.clientX); };
  const handleMouseUp = () => { isDragging.current = false; };

  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <div className="rounded-2xl overflow-hidden bg-card border border-border/50">
      <div
        ref={containerRef}
        className="relative aspect-[3/4] overflow-hidden select-none cursor-col-resize"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {/* After (full background) */}
        <img src={after} alt={`${title} - After`} className="absolute inset-0 w-full h-full object-cover" draggable={false} />

        {/* Before (clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
          <img src={before} alt={`${title} - Before`} className="absolute inset-0 w-full h-full object-cover" style={{ width: `${containerRef.current?.offsetWidth || 0}px`, maxWidth: "none" }} draggable={false} />
        </div>

        {/* Slider line */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-primary-foreground/90 z-10" style={{ left: `${position}%` }}>
          {/* Handle */}
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary border-2 border-primary-foreground flex items-center justify-center shadow-lg">
            <div className="flex gap-0.5">
              <div className="w-0.5 h-4 bg-primary-foreground rounded-full" />
              <div className="w-0.5 h-4 bg-primary-foreground rounded-full" />
            </div>
          </div>
        </div>

        {/* Labels */}
        <span className="absolute top-4 left-4 text-xs uppercase tracking-widest font-body bg-black/50 text-white px-3 py-1 rounded-full backdrop-blur-sm">Before</span>
        <span className="absolute top-4 right-4 text-xs uppercase tracking-widest font-body bg-black/50 text-white px-3 py-1 rounded-full backdrop-blur-sm">After</span>
      </div>
      <div className="p-4 text-center">
        <h3 className="font-heading text-lg font-semibold text-foreground">{title}</h3>
        <p className="font-body text-sm text-muted-foreground mt-1">Drag the slider to compare</p>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
