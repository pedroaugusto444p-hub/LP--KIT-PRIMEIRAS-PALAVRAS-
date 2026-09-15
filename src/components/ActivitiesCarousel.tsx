import { useState, useEffect, useRef, useCallback, type TouchEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { activityCarouselImages } from "../data";

export function ActivitiesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = activityCarouselImages.length;
  const currentImage = activityCarouselImages[currentIndex];

  // Preload all images into browser cache on mount
  useEffect(() => {
    activityCarouselImages.forEach((item) => {
      const img = new Image();
      img.src = item.url;
    });
  }, []);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToIndex = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Transição automática a cada 3.5 segundos
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(goToNext, 3500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext]);

  // Touch / Swipe no mobile
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 35) {
      goToNext();
    } else if (distance < -35) {
      goToPrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleImageError = (id: number) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const currentSrc = failedImages[currentImage.id]
    ? currentImage.fallbackUrl
    : currentImage.url;

  return (
    <div className="w-full">
      {/* Carrossel limpo - apenas as imagens passando */}
      <div
        className="relative overflow-hidden rounded-2xl bg-white border border-slate-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.06)] select-none group"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Área da imagem sem sobreposições de texto */}
        <div className="relative aspect-[16/10] md:aspect-[16/9] w-full flex items-center justify-center overflow-hidden bg-white">
          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={currentImage.id}
              src={currentSrc}
              alt={currentImage.title}
              onError={() => handleImageError(currentImage.id)}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.38, ease: "easeInOut" }}
              className="w-full h-full object-contain p-1"
              referrerPolicy="no-referrer"
              loading="eager"
            />
          </AnimatePresence>
        </div>

        {/* Setas de navegação discretas */}
        <button
          type="button"
          onClick={goToPrev}
          aria-label="Imagem anterior"
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center shadow-md transition-all opacity-80 hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer border border-slate-200"
        >
          <ChevronLeft size={22} className="stroke-[2.5]" />
        </button>

        <button
          type="button"
          onClick={goToNext}
          aria-label="Próxima imagem"
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center shadow-md transition-all opacity-80 hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer border border-slate-200"
        >
          <ChevronRight size={22} className="stroke-[2.5]" />
        </button>
      </div>

      {/* Indicadores de pontinhos discretos */}
      <div className="mt-3 flex items-center justify-center gap-1.5">
        {activityCarouselImages.map((img, idx) => (
          <button
            key={img.id}
            type="button"
            onClick={() => goToIndex(idx)}
            aria-label={`Ir para atividade ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
              idx === currentIndex ? "w-6 bg-coral" : "w-1.5 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
