import { useState } from "react";
import { Volume2, Sparkles, CheckCircle2, RotateCcw } from "lucide-react";

interface WordChallenge {
  word: string;
  syllables: string[];
  imageEmoji: string;
  hint: string;
}

const CHALLENGES: WordChallenge[] = [
  { word: "BOLA", syllables: ["BO", "LA"], imageEmoji: "⚽", hint: "Objeto redondo para patear o jugar" },
  { word: "CASA", syllables: ["CA", "SA"], imageEmoji: "🏠", hint: "Donde vivimos con la familia" },
  { word: "PATO", syllables: ["PA", "TO"], imageEmoji: "🦆", hint: "Ave que nada en el estanque y hace cuac-cuac" },
  { word: "GATO", syllables: ["GA", "TO"], imageEmoji: "🐱", hint: "Amigo peludo que hace miau" },
  { word: "SAPO", syllables: ["SA", "PO"], imageEmoji: "🐸", hint: "Salta en el estanque y atrapa moscas" },
];

export function InteractiveSampler() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedSyllables, setSelectedSyllables] = useState<string[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const challenge = CHALLENGES[currentIdx];

  // Distractors
  const pool = [
    ...challenge.syllables,
    ...["ME", "LO", "TI", "VA", "CO"].filter((s) => !challenge.syllables.includes(s)).slice(0, 2),
  ].sort((a, b) => a.localeCompare(b));

  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text.toLowerCase());
      utterance.lang = "es-ES";
      utterance.rate = 0.85;
      utterance.pitch = 1.1;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSelect = (syl: string) => {
    if (isSuccess) return;
    speak(syl);
    const updated = [...selectedSyllables, syl];
    setSelectedSyllables(updated);

    if (updated.length === challenge.syllables.length) {
      if (updated.join("") === challenge.word) {
        setIsSuccess(true);
        setTimeout(() => {
          speak(challenge.word + "! ¡Muy bien!");
        }, 300);
      } else {
        setTimeout(() => {
          setSelectedSyllables([]);
        }, 700);
      }
    }
  };

  const reset = () => {
    setSelectedSyllables([]);
    setIsSuccess(false);
  };

  const nextChallenge = () => {
    reset();
    setCurrentIdx((prev) => (prev + 1) % CHALLENGES.length);
  };

  return (
    <div className="my-10 rounded-2xl border-2 border-dashed border-teal/40 bg-gradient-to-b from-teal-soft/60 to-background p-6 md:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-teal/20 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-coral px-3 py-1 text-xs font-black tracking-wide text-white uppercase">
            <Sparkles size={14} /> Mini demostración interactiva
          </span>
          <h3 className="mt-2 text-xl font-bold text-ink">
            Experimenta cómo aprende el niño: <span className="text-coral">Construye la palabra</span>
          </h3>
          <p className="text-xs text-muted-foreground">
            En el kit impreso, el niño recorta las fichas de colores y las coloca en la hoja contigo.
          </p>
        </div>
        <button
          type="button"
          onClick={() => speak(challenge.word)}
          className="inline-flex items-center gap-2 self-start sm:self-auto rounded-lg bg-card px-3.5 py-2 text-xs font-bold text-teal border border-border shadow-xs hover:bg-teal-soft transition-colors cursor-pointer"
          title="Escuchar palabra"
        >
          <Volume2 size={16} />
          Escuchar pronunciación
        </button>
      </div>

      <div className="mt-6 flex flex-col items-center text-center">
        <div className="flex items-center justify-center text-6xl md:text-7xl mb-2 drop-shadow-sm select-none">
          {challenge.imageEmoji}
        </div>
        <p className="text-sm font-bold text-muted-foreground">{challenge.hint}</p>

        {/* Word slots */}
        <div className="mt-5 flex items-center justify-center gap-2.5">
          {challenge.syllables.map((syl, i) => {
            const filled = selectedSyllables[i];
            return (
              <div
                key={i}
                className={`flex h-14 w-16 items-center justify-center rounded-xl border-2 text-xl font-black transition-all ${
                  filled
                    ? isSuccess
                      ? "border-teal bg-teal text-white scale-105 shadow-md"
                      : "border-coral bg-coral-soft text-coral shadow-xs"
                    : "border-dashed border-border bg-card text-muted-foreground/30"
                }`}
              >
                {filled || "?"}
              </div>
            );
          })}
        </div>

        {/* Result message */}
        {isSuccess ? (
          <div className="mt-4 flex flex-col items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal px-4 py-1.5 text-xs font-black text-white shadow-sm animate-bounce">
              <CheckCircle2 size={15} /> ¡Felicitaciones! ¡Formaste {challenge.word}!
            </span>
            <button
              type="button"
              onClick={nextChallenge}
              className="mt-1 inline-flex items-center gap-2 rounded-lg bg-sun px-4 py-2 text-xs font-black text-ink shadow-xs hover:brightness-105 transition-all cursor-pointer"
            >
              Siguiente palabra <Sparkles size={14} />
            </button>
          </div>
        ) : (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            <span className="w-full text-xs font-bold text-muted-foreground mb-1">
              Toca las sílabas en el orden correcto:
            </span>
            {pool.map((syl, idx) => {
              const timesInSelected = selectedSyllables.filter((s) => s === syl).length;
              const timesInPool = pool.filter((s) => s === syl).length;
              const isUsed = timesInSelected >= timesInPool;

              return (
                <button
                  key={`${syl}-${idx}`}
                  type="button"
                  disabled={isUsed || isSuccess}
                  onClick={() => handleSelect(syl)}
                  className={`flex h-12 min-w-[3.2rem] items-center justify-center rounded-xl px-3 font-display text-lg font-bold transition-all cursor-pointer ${
                    isUsed
                      ? "opacity-30 border border-border bg-muted cursor-not-allowed"
                      : "border border-border bg-card text-ink shadow-sm hover:-translate-y-0.5 hover:border-coral hover:text-coral active:translate-y-0"
                  }`}
                >
                  {syl}
                </button>
              );
            })}
            {selectedSyllables.length > 0 && !isSuccess && (
              <button
                type="button"
                onClick={reset}
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground hover:text-ink transition-colors cursor-pointer"
                title="Reiniciar"
              >
                <RotateCcw size={16} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
