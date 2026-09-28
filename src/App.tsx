import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Download,
  FileText,
  Heart,
  PackageCheck,
  Printer,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import {
  PRICE,
  FULL_VALUE,
  CHECKOUT_ANCHOR,
  CHECKOUT_URL,
  quickBenefits,
  situations,
  steps,
  activities,
  skills,
  bonuses,
  faqs,
} from "./data";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { SalesNotification } from "./components/SalesNotification";
import { ActivitiesCarousel } from "./components/ActivitiesCarousel";

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const openCheckout = () => {
    window.location.href = CHECKOUT_URL;
  };

  const scrollToOffer = () => {
    const el = document.getElementById("oferta");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "oferta";
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#2d3748] bg-background text-foreground antialiased selection:bg-coral-soft selection:text-coral">
      {/* Hero Section */}
      <header className="hero-section">
        {/* Hero Content */}
        <div id="inicio" className="page-shell grid items-center gap-10 pb-16 pt-8 md:grid-cols-[1.05fr_.95fr] md:pb-24 md:pt-12">
          <div className="max-w-2xl">
            <p className="eyebrow">
              <Sparkles size={15} /> Para practicar en casa, con calma y sin presión
            </p>
            <h1>
              Ayuda a tu hijo a darle sentido a las letras — <span>un paso a la vez.</span>
            </h1>
            <p className="hero-copy">
              Un sistema simple y progresivo de actividades para practicar coordinación motora, reconocimiento de letras,
              sonidos, sílabas y palabras de forma visual y divertida.
            </p>
            <ul className="hero-benefits">
              {quickBenefits.map((benefit) => (
                <li key={benefit}>
                  <CheckCircle2 />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                type="button"
                onClick={scrollToOffer}
                className="cta-button cta-green w-full sm:w-auto cursor-pointer"
              >
                <span>OBTENER ACCESO AL KIT AHORA</span>
                <ArrowRight aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={scrollToOffer}
                className="text-xs font-bold text-teal hover:underline self-center sm:self-auto cursor-pointer bg-transparent border-0"
              >
                Ver todos los materiales incluidos ↓
              </button>
            </div>

            <p className="microcopy">
              <Download /> Acceso digital inmediato después del pago · Garantía incondicional de 7 días
            </p>
          </div>

          <div className="hero-visual">
            <div className="image-frame">
              <img
                src="https://i.ibb.co/BKP1cjGy/01-Kit-Primeras-Palabras.png"
                alt="Kit Primeras Palabras - Actividades educativas e ilustradas para alfabetización"
                width={609}
                height={640}
                className="transition-transform duration-500 hover:scale-[1.02] w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="floating-note">
              <Heart fill="currentColor" />
              <span>Aprender también puede ser un momento de cariño y conexión.</span>
            </div>
          </div>
        </div>
      </header>

      {/* Problem Section */}
      <section className="section problem-section">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow">¿Esto también pasa en tu casa?</p>
            <h2>
              ¿Tu hijo reconoce las letras… pero todavía le cuesta <em>juntarlo todo?</em>
            </h2>
            <p className="text-muted-foreground">
              Entre saber el nombre de una letra y conseguir formar una palabra, hay pequeñas habilidades que necesitan práctica.
            </p>
          </div>

          <div className="situation-grid">
            {situations.map((item, i) => (
              <div className="situation" key={item}>
                <span>0{i + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <p className="bridge-copy">
            Si pensaste <strong>“así pasa en mi casa”</strong>, no significa que falte esfuerzo. Muchas veces,
            solo falta <u>un camino claro y ordenado para practicar</u>.
          </p>
        </div>
      </section>

      {/* Belief Breaking & Progress Path */}
      <section className="section belief-section">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="section-heading text-left m-0">
            <p className="eyebrow justify-start">La lectura es una construcción</p>
            <h2>
              Más ejercicios no siempre significan <em>más claridad.</em>
            </h2>
            <p className="text-muted-foreground mt-2">
              Antes de pedirle a un niño que lea una palabra, es importante ayudarlo a construir las habilidades que hacen
              posible esa lectura. Sin prisa, sin presión y sin convertir la casa en una clase estresante.
            </p>
          </div>

          <div className="progress-path" aria-label="Progresión de las habilidades">
            {["Trazar", "Reconocer sonidos", "Formar sílabas", "Construir palabras", "Avanzar hacia la lectura"].map((label, i) => (
              <div className="path-step" key={label}>
                <span>{i + 1}</span>
                <strong>{label}</strong>
                {i < 4 && <ArrowRight />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section solution-section">
        <div className="page-shell grid gap-10 md:grid-cols-2 md:items-center">
          <div className="solution-visual flex justify-center items-center">
            <div className="image-frame max-w-[480px] w-full">
              <img
                src="https://i.ibb.co/BKP1cjGy/01-Kit-Primeras-Palabras.png"
                alt="Kit Primeras Palabras - Vista general de los cuadernos y materiales"
                width={640}
                height={640}
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div>
            <p className="eyebrow justify-start">Una solución práctica para la rutina real</p>
            <h2>
              Te presentamos el <em>Kit Primeras Palabras</em>
            </h2>
            <p className="lead">
              Un conjunto organizado de actividades para usar en casa — sin inventar ejercicios desde cero y sin
              pasar horas buscando materiales sueltos y desordenados en internet.
            </p>
            <p className="text-muted-foreground mt-3">
              En lugar de elegir una hoja al azar cada día, tendrás propuestas lúdicas que acompañan diferentes
              etapas: desde el control del lápiz hasta las primeras experiencias de lectura de palabras reales.
            </p>

            <div className="soft-callout">
              <PackageCheck />
              <span className="text-xs md:text-sm">
                <strong>No es solo un PDF de actividades.</strong> Es una secuencia simple para saber qué practicar
                ahora y qué explorar después con tranquilidad.
              </span>
            </div>

            <button
              type="button"
              onClick={scrollToOffer}
              className="cta-button cta-green cursor-pointer"
            >
              <span>QUIERO CONOCER EL KIT</span>
              <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="section method-section">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow">El camino dentro del kit</p>
            <h2>
              Cuatro etapas simples para practicar <em>sin saltarse la base.</em>
            </h2>
            <p className="text-muted-foreground">
              Cada grupo de actividades tiene un propósito claro y prepara el terreno con seguridad para el siguiente paso.
            </p>
          </div>

          <div className="steps-grid">
            {steps.map(({ icon: Icon, ...step }) => (
              <article className="step-card" key={step.number}>
                <div className="step-top">
                  <span className={`step-icon ${step.color}`}>
                    <Icon />
                  </span>
                  <span className="step-number">{step.number}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <strong>
                  <Check />
                  {step.benefit}
                </strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Preview Section */}
      <section className="section activities-section">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow">Del papel a la práctica</p>
            <h2>
              Mira algunas actividades que tu hijo <em>podrá practicar</em>
            </h2>
            <p className="text-muted-foreground">
              Propuestas cortas, visuales y variadas para favorecer la participación activa y el interés natural del niño.
            </p>
          </div>

          {/* Interactive 10-Image Activities Carousel */}
          <ActivitiesCarousel />

          <div className="activity-captions">
            {activities.map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <Icon />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Section */}
      <section className="section parent-section">
        <div className="page-shell parent-inner">
          <div>
            <p className="eyebrow eyebrow-light">Hecho para padres y responsables</p>
            <h2 className="text-primary-foreground">
              No necesitas <em>ser maestro/a</em> para usarlo.
            </h2>
            <p>
              No necesitas preparar una clase, estudiar métodos complejos ni organizar todo con anticipación. Elige una
              actividad, imprime 1 o 2 páginas y acompaña al niño durante 10 a 15 minutos con calma.
            </p>
          </div>
          <ul>
            <li>
              <Check /> Actividades listas, directas y fáciles de entender
            </li>
            <li>
              <Check /> Imprime solo lo que necesites ese día
            </li>
            <li>
              <Check /> Pocos minutos para organizar la rutina
            </li>
            <li>
              <Check /> Úsalo a tu ritmo y en los horarios de tu familia
            </li>
            <li>
              <Check /> Se acabó buscar una actividad nueva y suelta todos los días
            </li>
          </ul>
        </div>
      </section>

      {/* Skills Grid Section */}
      <section className="section skills-section">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow">Aprendizaje en varias áreas</p>
            <h2>
              Habilidades importantes, practicadas de forma <em>integrada.</em>
            </h2>
            <p className="text-muted-foreground">
              El kit ofrece oportunidades ricas de práctica. El desarrollo sucede al ritmo de cada niño, con
              repetición positiva, acompañamiento y celebración de las pequeñas conquistas.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map(([Icon, label]) => (
              <div key={label}>
                <span>
                  <Icon />
                </span>
                <strong>{label}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Stack & Bonuses */}
      <section className="section offer-stack-section">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow">Todo lo que recibes</p>
            <h2>
              No es una actividad suelta. Es una <em>caja completa de posibilidades.</em>
            </h2>
            <p className="text-muted-foreground">
              El kit principal y todos los bonos prácticos para variar la práctica y acompañar diferentes momentos del aprendizaje.
            </p>
          </div>

          <div className="bonus-list">
            {bonuses.map(({ icon: Icon, ...item }, index) => (
              <article className={`bonus-card ${index === 0 ? "bonus-featured" : ""}`} key={item.title}>
                <div className="bonus-mockup">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="bonus-img"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  ) : (
                    <>
                      <Icon />
                      <span>[ {index === 0 ? "KIT PRINCIPAL" : `BONO ${index}`} ]</span>
                    </>
                  )}
                </div>
                <div className="bonus-copy">
                  <p className="bonus-label">{item.label}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <strong>
                    <Star fill="currentColor" />
                    {item.benefit}
                  </strong>
                </div>
                <div className="bonus-value">
                  <small>Valor individual</small>
                  <b>{item.value}</b>
                </div>
              </article>
            ))}
          </div>

          {/* Authentic Testimonials */}
          <TestimonialsSection />
        </div>
      </section>

      {/* Main Pricing & Checkout Section */}
      <section id="oferta" className="section price-section scroll-mt-6">
        <div className="page-shell price-layout">
          <div className="price-context">
            <p className="eyebrow">Una biblioteca lista para usar</p>
            <h2>Si cada material se comprara por separado…</h2>
            <div className="price-lines">
              {bonuses.map((item) => (
                <div key={item.title}>
                  <span>{item.title}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
            <div className="total-line">
              <span>Valor total percibido</span>
              <strong>{FULL_VALUE}</strong>
            </div>
          </div>

          <div className="checkout-card">
            <span className="offer-tag">Condición promocional de lanzamiento</span>

            {/* Imagem do Kit no Card */}
            <div className="mt-4 mb-3 overflow-hidden rounded-xl border border-border/80 shadow-sm bg-white p-2">
              <img
                src="https://i.ibb.co/4RLDk10s/Chat-GPT-Image-11-de-set-de-2026-22-26-05.png"
                alt="Kit Primeras Palabras Completo con Bonos"
                className="w-full h-auto max-h-[260px] object-contain mx-auto rounded-lg"
                referrerPolicy="no-referrer"
                loading="eager"
              />
            </div>

            <p className="not-price">
              Pero no vas a pagar <s>{FULL_VALUE}</s>
            </p>
            <p className="today-label">Accede hoy por solo</p>
            <div className="main-price">
              <small>US$</small>
              <strong>9</strong>
              <div>
                <b>.90</b>
                <span>pago único</span>
              </div>
            </div>

            {/* Lista de Beneficios e Inclusiones */}
            <div className="checkout-copy-list text-left mt-5 pt-4 border-t border-border/80">
              <ul className="text-xs font-semibold text-ink">
                {[
                  "Acceso inmediato después de la compra",
                  "Envío del material por correo electrónico",
                  "Soporte por WhatsApp y correo electrónico",
                  "7 días de garantía",
                  "Material 100% digital",
                  "Listo para imprimir",
                  "Acceso desde celular, tablet o computadora",
                  "5 bonos incluidos",
                  "Uso simple en casa",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-ink">
                    <CheckCircle2 size={16} className="text-teal shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Bonos Exclusivos Destacados */}
              <div className="checkout-bonus-box">
                <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-amber-300/80">
                  <p className="text-xs font-black uppercase tracking-wider text-amber-900 flex items-center gap-1.5 m-0">
                    <Sparkles size={15} className="text-amber-600 shrink-0" />
                    <span>5 Bonos Exclusivos Incluidos</span>
                  </p>
                  <span className="bg-amber-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                    Hoy Gratis
                  </span>
                </div>
                <ul className="text-xs font-bold text-ink">
                  {[
                    "Cuaderno de Grafismo Divertido",
                    "Tarjetas de Sílabas",
                    "Juego Construye la Palabra",
                    "Desafíos de Lectura",
                    "Actividades Educativas sin Pantallas",
                  ].map((bonusItem) => (
                    <li key={bonusItem}>
                      <div className="flex items-center gap-2">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white text-[10px] font-black shadow-xs">
                          ★
                        </span>
                        <span className="font-bold text-ink">{bonusItem}</span>
                      </div>
                      <span className="text-[10px] font-black text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded-md uppercase tracking-wider border border-emerald-300/60">
                        Gratis
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Botón de Acción en la Parte Inferior */}
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button checkout-button cta-green cursor-pointer mt-6"
            >
              <span>QUIERO ACCEDER AL KIT AHORA</span>
              <ArrowRight />
            </a>

            <p className="future-price">
              Esta condición especial puede actualizarse sin previo aviso. No cobramos mensualidad.
            </p>
          </div>
        </div>
      </section>

      {/* Why Price is Affordable */}
      <section className="section why-price-section">
        <div className="page-shell why-price-inner">
          <div className="why-icon">
            <Download />
          </div>
          <div>
            <p className="eyebrow">¿Por qué el precio es tan accesible?</p>
            <h2>Digital por elección. Accesible por propósito.</h2>
            <p className="text-muted-foreground mt-2">
              Como el material es 100% digital, no existen costos de impresión centralizada, empaque, inventario físico ni envío. Esto nos permite ofrecer el kit completo por un precio accesible de solo {PRICE}, facilitando el acceso a familias de diferentes países.
            </p>
          </div>
          <div className="digital-points">
            <span>
              <FileText /> Archivos en PDF de alta calidad
            </span>
            <span>
              <Printer /> Imprime en casa solo lo que vayas a usar
            </span>
            <span>
              <PackageCheck /> Sin espera de envío ni riesgo de extravío
            </span>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="section guarantee-section">
        <div className="page-shell guarantee-inner">
          <div className="guarantee-seal">
            <ShieldCheck />
            <strong>7 DÍAS</strong>
            <span>DE GARANTÍA</span>
          </div>
          <div>
            <p className="eyebrow">Tu riesgo es absolutamente cero</p>
            <h2>Conoce el material con total tranquilidad.</h2>
            <p className="text-muted-foreground mt-2">
              Después de la compra, tienes <strong>7 días completos de garantía incondicional</strong>. Si dentro de ese período entiendes que el Kit Primeras Palabras no cumple tus expectativas, puedes solicitar el reembolso y te devolvemos el 100% de tu dinero.
            </p>
            <p className="legal-note">
              Sin burocracia y sin letras pequeñas: una garantía transparente y respetuosa con tu familia.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="page-shell faq-layout">
          <div className="faq-intro">
            <p className="eyebrow">Antes de decidir</p>
            <h2>Preguntas frecuentes</h2>
            <p>Mira si el kit combina con el momento actual de tu hijo.</p>
            <button
              type="button"
              onClick={scrollToOffer}
              className="cta-button cta-green cursor-pointer"
            >
              <span>QUIERO EL KIT AHORA</span>
              <ArrowRight />
            </button>
          </div>

          <div className="faq-list">
            {faqs.map((faq, i) => (
              <details
                key={faq.question}
                open={activeFaq === i}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveFaq(activeFaq === i ? null : i);
                }}
              >
                <summary>
                  <span>{faq.question}</span>
                  <ChevronDown />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Inspiration Section */}
      <section className="section closing-section">
        <div className="page-shell closing-inner">
          <p className="eyebrow eyebrow-light">Un pequeño momento que cabe en la rutina</p>
          <h2>
            Imagina transformar algunos minutos del día en un momento divertido de aprendizaje{" "}
            <em>con tu hijo.</em>
          </h2>
          <p>
            Sin presión para hacerlo todo rápido. Sin obligación de acertar a la primera. Solo una actividad lista,
            tu presencia y la oportunidad de celebrar cada pequeño descubrimiento juntos.
          </p>
          <div className="closing-quote">
            <Heart fill="currentColor" />
            <span>
              Porque cuando el camino se vuelve más simple y estructurado, queda más espacio para animar, jugar y aprender.
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="page-shell">
          <div className="brand-mark">
            <span className="brand-icon">Aa</span>
            <span>
              Primeras <strong>Palabras</strong>
            </span>
          </div>
          <p className="text-center md:text-left">
            Material educativo complementario para uso familiar y apoyo pedagógico en casa.
          </p>
          <p>© {new Date().getFullYear()} Kit Primeras Palabras. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* Sales Notification in corner */}
      <SalesNotification />
    </div>
  );
}
