import { useState, useEffect, type MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, X } from "lucide-react";
import { CHECKOUT_URL } from "../data";

interface SaleEvent {
  name: string;
  city: string;
  country: string;
  item: string;
  timeAgo: string;
}

const SALES_DATA: SaleEvent[] = [
  {
    name: "Juliana M.",
    city: "Guadalajara",
    country: "México",
    item: "Kit Primeras Palabras",
    timeAgo: "hace 2 min",
  },
  {
    name: "Patricia S.",
    city: "Bogotá",
    country: "Colombia",
    item: "Kit + 5 Bonos",
    timeAgo: "hace 4 min",
  },
  {
    name: "Mariana R.",
    city: "Santiago",
    country: "Chile",
    item: "Kit Completo",
    timeAgo: "hace 7 min",
  },
  {
    name: "Camila T.",
    city: "Buenos Aires",
    country: "Argentina",
    item: "Kit Primeras Palabras",
    timeAgo: "hace 3 min",
  },
  {
    name: "Renata B.",
    city: "Lima",
    country: "Perú",
    item: "Kit + Bonos",
    timeAgo: "hace 8 min",
  },
  {
    name: "Fernanda L.",
    city: "Montevideo",
    country: "Uruguay",
    item: "Kit Primeras Palabras",
    timeAgo: "hace 5 min",
  },
];

export function SalesNotification() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Discreto: espera 5 segundos antes de exibir o primeiro aviso
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(initialTimer);
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed) return;

    let hideTimer: NodeJS.Timeout;
    let nextTimer: NodeJS.Timeout;

    if (isVisible) {
      // Exibe por 4 segundos
      hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    } else {
      // Intervalo mais longo e tranquilo (14 segundos) para não poluir a leitura
      nextTimer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % SALES_DATA.length);
        setIsVisible(true);
      }, 14000);
    }

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, [isVisible, isDismissed]);

  const current = SALES_DATA[currentIndex];

  const handleClick = () => {
    const el = document.getElementById("oferta");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = CHECKOUT_URL;
    }
  };

  const handleDismiss = (e: MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
    setIsDismissed(true);
  };

  return (
    <div className="fixed z-40 bottom-4 left-3 sm:left-4 max-w-[250px] pointer-events-none">
      <AnimatePresence>
        {isVisible && current && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={handleClick}
            className="pointer-events-auto cursor-pointer flex items-center gap-2 p-2 bg-white/95 backdrop-blur-sm rounded-lg border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:border-emerald-300 transition-all hover:scale-[1.01]"
          >
            {/* Miniatura ultra compacta */}
            <div className="relative shrink-0 w-8 h-8 rounded bg-emerald-50 border border-emerald-100 overflow-hidden">
              <img
                src="https://i.ibb.co/4RLDk10s/Chat-GPT-Image-11-de-set-de-2026-22-26-05.png"
                alt="Kit"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="eager"
              />
            </div>

            {/* Texto compacto em 2 linhas */}
            <div className="flex-1 min-w-0 pr-0.5">
              <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 leading-none">
                <CheckCircle2 size={10} className="text-emerald-600 shrink-0" />
                <span className="truncate">Compra confirmada</span>
                <span className="text-muted-foreground font-normal text-[9px]">· {current.timeAgo}</span>
              </div>
              <p className="text-[11px] font-medium text-slate-800 truncate leading-snug mt-0.5">
                <strong className="font-bold">{current.name}</strong> ({current.city}) compró
              </p>
            </div>

            {/* Botão sutil para fechar */}
            <button
              type="button"
              onClick={handleDismiss}
              aria-label="Cerrar notificación"
              className="shrink-0 p-0.5 text-slate-400 hover:text-slate-700 rounded transition-colors"
            >
              <X size={12} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
