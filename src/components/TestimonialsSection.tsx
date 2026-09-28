import { useState, useEffect, useCallback, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const testimonialImages = [
  {
    id: 1,
    url: "https://i.ibb.co/WpjFqcJz/Chat-GPT-Image-19-de-set-de-2026-23-22-47-1.png",
    alt: "Testimonio real 1",
  },
  {
    id: 2,
    url: "https://i.ibb.co/S4rcjwtW/Chat-GPT-Image-19-de-set-de-2026-23-22-47-2.png",
    alt: "Testimonio real 2",
  },
  {
    id: 3,
    url: "https://i.ibb.co/8nQ6nr38/Chat-GPT-Image-19-de-set-de-2026-23-22-47-3.png",
    alt: "Testimonio real 3",
  },
  {
    id: 4,
    url: "https://i.ibb.co/4wHNzgc0/Chat-GPT-Image-19-de-set-de-2026-23-22-47-4.png",
    alt: "Testimonio real 4",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const total = testimonialImages.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Autoplay (pauses on hover or when lightbox is open)
  useEffect(() => {
    if (isHovered || lightboxImage !== null) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isHovered, lightboxImage, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTouchStartX(null);
  };

  // Keyboard navigation & escape for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxImage(null);
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div
      id="depoimentos"
      className="mt-16 pt-4 scroll-mt-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Headline única */}
      <div className="text-center max-w-2xl mx-auto mb-6">
        <h2 className="text-2xl md:text-3xl font-bold font-display text-ink leading-tight">
          Lo que dicen los padres que ya practican con el kit
        </h2>
      </div>

      {/* Carrossel de imagens */}
      <div className="relative mx-auto max-w-xl px-4">
        <div
          className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slide */}
          <div className="relative p-3 sm:p-5 flex items-center justify-center min-h-[380px] sm:min-h-[460px] bg-slate-950/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full flex justify-center cursor-pointer"
                onClick={() => setLightboxImage(testimonialImages[currentIndex].url)}
              >
                <img
                  src={testimonialImages[currentIndex].url}
                  alt={testimonialImages[currentIndex].alt}
                  className="w-full h-auto max-h-[480px] object-contain mx-auto rounded-xl shadow-sm transition-transform duration-300 hover:scale-[1.01]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </motion.div>
            </AnimatePresence>

            {/* Setas de navegação */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              aria-label="Testimonio anterior"
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-card/95 text-ink border border-border shadow-md transition-all hover:scale-105 hover:text-coral hover:bg-card cursor-pointer z-10"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              aria-label="Siguiente testimonio"
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-card/95 text-ink border border-border shadow-md transition-all hover:scale-105 hover:text-coral hover:bg-card cursor-pointer z-10"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Indicadores de bolinhas */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {testimonialImages.map((item, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Ir al testimonio ${index + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? "w-7 h-2.5 bg-coral"
                    : "w-2.5 h-2.5 bg-border hover:bg-muted-foreground/40"
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Lightbox ao clicar na imagem */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-6 backdrop-blur-sm cursor-pointer"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[92vh] max-w-2xl overflow-hidden rounded-2xl bg-card p-2 shadow-2xl border border-border flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                aria-label="Cerrar"
                className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              <img
                src={lightboxImage}
                alt="Testimonio ampliado"
                className="max-h-[85vh] w-auto object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
