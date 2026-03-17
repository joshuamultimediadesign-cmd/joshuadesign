import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download } from "lucide-react";

interface LightboxProps {
  images: { src: string; title: string; category: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

const PortfolioLightbox = ({ images, currentIndex, isOpen, onClose }: LightboxProps) => {
  const [index, setIndex] = useState(currentIndex);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [entering, setEntering] = useState(false);
  const [swipeStart, setSwipeStart] = useState<number | null>(null);

  useEffect(() => {
    setIndex(currentIndex);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, [currentIndex]);

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setEntering(true));
      document.body.style.overflow = "hidden";
    } else {
      setEntering(false);
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navigate = useCallback((dir: number) => {
    setIndex((prev) => (prev + dir + images.length) % images.length);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose, navigate]);

  const handleZoom = (dir: number) => {
    setZoom((prev) => {
      const next = prev + dir * 0.5;
      if (next < 1) { setPosition({ x: 0, y: 0 }); return 1; }
      return Math.min(next, 4);
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };

  // Mobile swipe support (when not zoomed)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (zoom > 1) {
      const touch = e.touches[0];
      setIsDragging(true);
      setDragStart({ x: touch.clientX - position.x, y: touch.clientY - position.y });
    } else {
      setSwipeStart(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && zoom > 1) {
      const touch = e.touches[0];
      setPosition({ x: touch.clientX - dragStart.x, y: touch.clientY - dragStart.y });
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsDragging(false);
    if (swipeStart !== null && zoom <= 1) {
      const endX = e.changedTouches[0].clientX;
      const diff = swipeStart - endX;
      if (Math.abs(diff) > 50) {
        navigate(diff > 0 ? 1 : -1);
      }
      setSwipeStart(null);
    }
  };

  if (!isOpen) return null;

  const current = images[index];

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col transition-all duration-300 ${entering ? "bg-black/95 opacity-100" : "bg-black/0 opacity-0"}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Top controls */}
      <div className="flex-shrink-0 flex items-center justify-between p-3 sm:p-4 z-10">
        <span className="text-sm text-white/70 font-body bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full">
          {index + 1} / {images.length}
        </span>
        <div className="flex gap-2">
          <button onClick={() => handleZoom(1)} className="p-2.5 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors" aria-label="Zoom in">
            <ZoomIn className="w-5 h-5" />
          </button>
          <button onClick={() => handleZoom(-1)} className="p-2.5 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors" aria-label="Zoom out">
            <ZoomOut className="w-5 h-5" />
          </button>
          <button onClick={onClose} className="p-2.5 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Image area - takes remaining space */}
      <div
        className="flex-1 min-h-0 flex items-center justify-center px-3 sm:px-12 relative"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        style={{ cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "default" }}
      >
        {/* Desktop nav arrows */}
        <button
          onClick={() => navigate(-1)}
          className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors z-10"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => navigate(1)}
          className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors z-10"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <img
          src={current.src}
          alt={current.title}
          className={`max-w-full max-h-full object-contain select-none rounded-lg transition-transform duration-200 ${entering ? "scale-100" : "scale-90"}`}
          style={{ transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)` }}
          draggable={false}
        />
      </div>

      {/* Bottom info bar - fixed height, never overlaps image */}
      <div className={`flex-shrink-0 p-3 sm:p-4 text-center transition-all duration-300 ${entering ? "opacity-100" : "opacity-0"}`}>
        <span className="text-xs uppercase tracking-widest text-primary font-body">{current.category}</span>
        <h3 className="font-heading text-base sm:text-lg text-white mt-0.5">{current.title}</h3>
        {/* Mobile nav arrows */}
        <div className="flex sm:hidden justify-center gap-6 mt-2">
          <button onClick={() => navigate(-1)} className="p-2.5 rounded-full bg-white/10 text-white" aria-label="Previous">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => navigate(1)} className="p-2.5 rounded-full bg-white/10 text-white" aria-label="Next">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioLightbox;
