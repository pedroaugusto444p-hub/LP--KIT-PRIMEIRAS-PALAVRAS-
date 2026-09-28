import { useState, type FormEvent } from "react";
import {
  X,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  Download,
  CreditCard,
  QrCode,
  Lock,
  Sparkles,
} from "lucide-react";
import { PRICE, FULL_VALUE, bonuses } from "../data";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card">("pix");
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleCopyPix = () => {
    navigator.clipboard.writeText("00020126580014BR.GOV.BCB.PIX0136alfabetiza-kit@primeiraspalavras.com.br520400005303986540519.905802BR5925KIT PRIMEIRAS PALAVRAS6009SAO PAULO62070503***6304");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSimulatePayment = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSuccess(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative my-8 w-full max-w-lg rounded-2xl bg-card p-6 md:p-8 text-foreground shadow-2xl border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
          aria-label="Cerrar"
        >
          <X size={20} />
        </button>

        {isSuccess ? (
          <div className="py-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-soft text-teal mb-4">
              <CheckCircle2 size={36} />
            </div>
            <span className="rounded-full bg-teal-soft px-3 py-1 text-xs font-black text-teal uppercase tracking-wider">
              ¡Acceso Habilitado!
            </span>
            <h3 className="mt-3 text-2xl font-bold text-ink">
              ¡Felicitaciones por tu decisión, {name || "Familia"}!
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Enviamos los datos de acceso y los enlaces de descarga de los archivos a:
              <br />
              <strong className="text-ink">{email || "tu-email@ejemplo.com"}</strong>
            </p>

            <div className="mt-6 rounded-xl border border-border bg-paper p-4 text-left">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                Lo que recibes ahora:
              </h4>
              <ul className="space-y-1.5 text-xs text-ink font-semibold">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-teal" /> Kit Primeras Palabras Completo (PDF)
                </li>
                {bonuses.slice(1).map((b) => (
                  <li key={b.title} className="flex items-center gap-2">
                    <Check size={14} className="text-teal" /> {b.title}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={onClose}
              className="mt-6 w-full rounded-xl bg-teal py-3 text-sm font-bold text-white shadow-md hover:brightness-105 cursor-pointer"
            >
              Concluir y Volver
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-coral font-bold text-xs uppercase tracking-wider">
              <Sparkles size={16} /> Acceso Digital Inmediato
            </div>
            <h3 className="mt-1 text-2xl font-bold text-ink">
              Kit Primeras Palabras
            </h3>
            <p className="text-xs text-muted-foreground">
              De <s className="text-muted-foreground/80">{FULL_VALUE}</s> por solo{" "}
              <strong className="text-coral text-lg">{PRICE}</strong> (pago único)
            </p>

            {/* Tabs */}
            <div className="mt-5 grid grid-cols-2 gap-2 rounded-xl bg-muted p-1 text-xs font-bold">
              <button
                type="button"
                onClick={() => setPaymentMethod("card")}
                className={`flex items-center justify-center gap-1.5 rounded-lg py-2 transition-all cursor-pointer ${
                  paymentMethod === "card"
                    ? "bg-card text-teal shadow-xs font-black"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <CreditCard size={16} /> Tarjeta de Crédito / Débito
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod("pix")}
                className={`flex items-center justify-center gap-1.5 rounded-lg py-2 transition-all cursor-pointer ${
                  paymentMethod === "pix"
                    ? "bg-card text-teal shadow-xs font-black"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <QrCode size={16} /> Pago Rápido
              </button>
            </div>

            <form onSubmit={handleSimulatePayment} className="mt-4 space-y-3">
              <div>
                <label className="block text-xs font-bold text-ink mb-1">Tu Nombre Completo</label>
                <input
                  type="text"
                  required
                  placeholder="Ej: María González"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground focus:border-teal focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-ink mb-1">
                  Correo electrónico para recibir los PDFs
                </label>
                <input
                  type="email"
                  required
                  placeholder="Ej: maria@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground focus:border-teal focus:outline-hidden"
                />
                <span className="text-[11px] text-muted-foreground">
                  Asegúrate de escribirlo correctamente para recibir el enlace de inmediato.
                </span>
              </div>

              {paymentMethod === "pix" ? (
                <div className="rounded-xl border border-teal/30 bg-teal-soft/40 p-3 text-center">
                  <span className="text-xs font-bold text-teal flex items-center justify-center gap-1">
                    <QrCode size={14} /> Código de Pago Seguro
                  </span>
                  <div className="mt-2 flex items-center justify-between rounded-lg border border-border bg-card p-2 text-xs font-mono text-muted-foreground">
                    <span className="truncate pr-2">00020126580014BR.GOV.BCB.PIX...</span>
                    <button
                      type="button"
                      onClick={handleCopyPix}
                      className="flex items-center gap-1 rounded bg-teal px-2.5 py-1 text-[11px] font-bold text-white hover:brightness-105 cursor-pointer shrink-0"
                    >
                      {copied ? <Check size={12} /> : <Copy size={12} />}
                      {copied ? "¡Copiado!" : "Copiar"}
                    </button>
                  </div>
                  <p className="mt-1.5 text-[11px] text-muted-foreground">
                    Copia y pega este código en tu aplicación de pago.
                  </p>
                </div>
              ) : (
                <div className="space-y-2 rounded-xl border border-border bg-muted/30 p-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-ink">
                    <Lock size={12} className="text-teal" /> Pago 100% Encriptado
                  </div>
                  <input
                    type="text"
                    placeholder="Número de Tarjeta (0000 0000 0000 0000)"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-xs"
                    defaultValue="•••• •••• •••• 4242"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Vencimiento (MM/AA)"
                      className="w-full rounded-lg border border-input bg-background px-3 py-2 text-xs"
                      defaultValue="12/28"
                    />
                    <input
                      type="text"
                      placeholder="CVV (123)"
                      className="w-full rounded-lg border border-input bg-background px-3 py-2 text-xs"
                      defaultValue="789"
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full rounded-xl bg-coral py-3.5 text-sm font-black text-white shadow-lg hover:brightness-105 transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
              >
                <Download size={18} /> CONFIRMAR Y DESCARGAR EL KIT POR {PRICE}
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] font-semibold text-muted-foreground pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={13} className="text-teal" /> 7 días de garantía
                </span>
                <span className="flex items-center gap-1">
                  <Lock size={13} className="text-teal" /> Pago Seguro
                </span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
