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
import heroImage from "./assets/hero-novo.png";
import solutionImage from "./assets/kit-solucao.png";
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
import { InteractiveSampler } from "./components/InteractiveSampler";
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
              <Sparkles size={15} /> Para praticar em casa, com leveza
            </p>
            <h1>
              Ajude seu filho a dar sentido às letras — <span>um passo de cada vez.</span>
            </h1>
            <p className="hero-copy">
              Um sistema simples e progressivo de atividades para praticar coordenação motora, reconhecimento de letras,
              sons, sílabas e palavras de forma visual e divertida.
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
                <span>QUERO ACESSAR O KIT AGORA</span>
                <ArrowRight aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={scrollToOffer}
                className="text-xs font-bold text-teal hover:underline self-center sm:self-auto cursor-pointer bg-transparent border-0"
              >
                Ver todos os materiais inclusos ↓
              </button>
            </div>

            <p className="microcopy">
              <Download /> Acesso digital imediato após o pagamento · Garantia incondicional de 7 dias
            </p>
          </div>

          <div className="hero-visual">
            <div className="image-frame">
              <img
                src={heroImage}
                alt="Kit Primeiras Palavras - Atividades educativas e ilustradas para alfabetização"
                width={609}
                height={640}
                className="transition-transform duration-500 hover:scale-[1.02] w-full h-auto object-cover"
              />
            </div>
            <div className="floating-note">
              <Heart fill="currentColor" />
              <span>Aprender também pode ser um momento de carinho e conexão.</span>
            </div>
          </div>
        </div>
      </header>

      {/* Problem Section */}
      <section className="section problem-section">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow">Isso acontece por aí?</p>
            <h2>
              Seu filho reconhece as letras… mas ainda tem dificuldade para <em>juntar tudo?</em>
            </h2>
            <p className="text-muted-foreground">
              Entre saber o nome de uma letra e conseguir formar uma palavra, existem pequenas habilidades que precisam de prática.
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
            Se você pensou <strong>“é exatamente assim aqui em casa”</strong>, saiba que não falta esforço. Muitas vezes,
            falta apenas <u>um caminho claro e sequencial para praticar</u>.
          </p>
        </div>
      </section>

      {/* Belief Breaking & Progress Path */}
      <section className="section belief-section">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="section-heading text-left m-0">
            <p className="eyebrow justify-start">A leitura é uma construção</p>
            <h2>
              Mais exercícios não significam, necessariamente, <em>mais clareza.</em>
            </h2>
            <p className="text-muted-foreground mt-2">
              Antes de pedir que uma criança leia uma palavra, vale ajudá-la a construir as habilidades que tornam essa
              leitura possível. Sem pressa, sem pressão e sem transformar a casa em uma sala de aula estressante.
            </p>
          </div>

          <div className="progress-path" aria-label="Progressão das habilidades">
            {["Traçar", "Reconhecer sons", "Formar sílabas", "Montar palavras", "Avançar para a leitura"].map((label, i) => (
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
                src={solutionImage}
                alt="Kit Primeiras Palavras - Visão geral dos cadernos e materiais práticos"
                width={640}
                height={640}
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

          <div>
            <p className="eyebrow justify-start">Uma solução prática para a rotina real</p>
            <h2>
              Apresentamos o <em>Kit Primeiras Palavras</em>
            </h2>
            <p className="lead">
              Um conjunto organizado de atividades para você utilizar em casa — sem inventar exercícios do zero e sem
              passar horas procurando materiais soltos e desordenados na internet.
            </p>
            <p className="text-muted-foreground mt-3">
              Em vez de escolher uma folha aleatória a cada dia, você tem propostas lúdicas que acompanham diferentes
              etapas: do controle do lápis às primeiras experiências de leitura de palavras reais.
            </p>

            <div className="soft-callout">
              <PackageCheck />
              <span className="text-xs md:text-sm">
                <strong>Não é apenas um PDF de atividades.</strong> É uma sequência simples para saber o que praticar
                agora e quais possibilidades explorar depois com tranquilidade.
              </span>
            </div>

            <button
              type="button"
              onClick={scrollToOffer}
              className="cta-button cta-green cursor-pointer"
            >
              <span>QUERO CONHECER O KIT</span>
              <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="section method-section">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow">O caminho dentro do kit</p>
            <h2>
              Quatro etapas simples para praticar <em>sem pular a base.</em>
            </h2>
            <p className="text-muted-foreground">
              Cada grupo de atividades tem um propósito claro e prepara o terreno com segurança para o próximo.
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
            <p className="eyebrow">Do papel para a prática</p>
            <h2>
              Veja algumas atividades que seu filho <em>poderá praticar</em>
            </h2>
            <p className="text-muted-foreground">
              Propostas curtas, visuais e variadas para favorecer a participação ativa e o interesse natural da criança.
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

          {/* Interactive Sampler Game */}
          <InteractiveSampler />
        </div>
      </section>

      {/* Parent Section */}
      <section className="section parent-section">
        <div className="page-shell parent-inner">
          <div>
            <p className="eyebrow eyebrow-light">Feito para pais e responsáveis</p>
            <h2 className="text-primary-foreground">
              Você <em>não precisa ser professor</em> para usar.
            </h2>
            <p>
              Você não precisa montar aula, estudar métodos complexos ou preparar tudo com antecedência. Escolha uma
              atividade, imprima 1 ou 2 páginas e acompanhe a criança por 10 a 15 minutos com leveza.
            </p>
          </div>
          <ul>
            <li>
              <Check /> Atividades prontas, diretas e fáceis de entender
            </li>
            <li>
              <Check /> Imprima apenas o que precisar naquele dia
            </li>
            <li>
              <Check /> Poucos minutos para organizar a rotina
            </li>
            <li>
              <Check /> Use no seu ritmo e nos horários da família
            </li>
            <li>
              <Check /> Chega de pesquisar uma atividade nova e solta todo dia
            </li>
          </ul>
        </div>
      </section>

      {/* Skills Grid Section */}
      <section className="section skills-section">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow">Aprendizagem em várias frentes</p>
            <h2>
              Habilidades importantes, praticadas de forma <em>integrada.</em>
            </h2>
            <p className="text-muted-foreground">
              O kit oferece oportunidades ricas de prática. O desenvolvimento acontece no ritmo de cada criança, com
              repetição positiva, acolhimento e celebração das pequenas conquistas.
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
            <p className="eyebrow">Tudo o que você recebe</p>
            <h2>
              Não é uma atividade solta. É uma <em>caixa completa de possibilidades.</em>
            </h2>
            <p className="text-muted-foreground">
              O kit principal e todos os bônus práticos para variar a prática e acompanhar diferentes momentos do aprendizado.
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
                      <span>[ {index === 0 ? "KIT PRINCIPAL" : `BÔNUS ${index}`} ]</span>
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
                  <small>Valor avulso</small>
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
            <p className="eyebrow">Uma biblioteca pronta para usar</p>
            <h2>Se cada material fosse adquirido separadamente…</h2>
            <div className="price-lines">
              {bonuses.map((item) => (
                <div key={item.title}>
                  <span>{item.title}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
            <div className="total-line">
              <span>Valor total percebido</span>
              <strong>{FULL_VALUE}</strong>
            </div>
          </div>

          <div className="checkout-card">
            <span className="offer-tag">Condição promocional de lançamento</span>

            {/* Imagem do Kit no Card */}
            <div className="mt-4 mb-3 overflow-hidden rounded-xl border border-border/80 shadow-sm bg-white p-2">
              <img
                src="https://i.ibb.co/4RLDk10s/Chat-GPT-Image-11-de-set-de-2026-22-26-05.png"
                alt="Kit Alfabetização Completo com Bônus"
                className="w-full h-auto max-h-[260px] object-contain mx-auto rounded-lg"
                referrerPolicy="no-referrer"
                loading="eager"
              />
            </div>

            <p className="not-price">
              Mas você não vai pagar <s>{FULL_VALUE}</s>
            </p>
            <p className="today-label">Acesse hoje por apenas</p>
            <div className="main-price">
              <small>R$</small>
              <strong>19</strong>
              <div>
                <b>,90</b>
                <span>pagamento único</span>
              </div>
            </div>

            {/* Lista de Benefícios e Inclusões */}
            <div className="checkout-copy-list text-left mt-5 pt-4 border-t border-border/80">
              <ul className="text-xs font-semibold text-ink">
                {[
                  "Acesso imediato após a compra",
                  "Envio do material por e-mail",
                  "Suporte via WhatsApp e e-mail",
                  "7 dias de garantia",
                  "Material 100% digital",
                  "Pronto para imprimir",
                  "Acesso pelo celular, tablet ou computador",
                  "5 bônus inclusos",
                  "Uso simples em casa",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-ink">
                    <CheckCircle2 size={16} className="text-teal shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Bônus Exclusivos Destacados */}
              <div className="checkout-bonus-box">
                <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-amber-300/80">
                  <p className="text-xs font-black uppercase tracking-wider text-amber-900 flex items-center gap-1.5 m-0">
                    <Sparkles size={15} className="text-amber-600 shrink-0" />
                    <span>5 Bônus Exclusivos Inclusos</span>
                  </p>
                  <span className="bg-amber-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                    Hoje Grátis
                  </span>
                </div>
                <ul className="text-xs font-bold text-ink">
                  {[
                    "Caderno de Grafismo Divertido",
                    "Cartões de Sílabas",
                    "Jogo Monte a Palavra",
                    "Desafios de Leitura",
                    "Atividades Educativas sem Tela",
                  ].map((bonusItem) => (
                    <li key={bonusItem}>
                      <div className="flex items-center gap-2">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white text-[10px] font-black shadow-xs">
                          ★
                        </span>
                        <span className="font-bold text-ink">{bonusItem}</span>
                      </div>
                      <span className="text-[10px] font-black text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded-md uppercase tracking-wider border border-emerald-300/60">
                        Grátis
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Botão de Ação na Parte de Baixo */}
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button checkout-button cta-green cursor-pointer mt-6"
            >
              <span>QUERO ACESSAR O KIT AGORA</span>
              <ArrowRight />
            </a>

            <p className="future-price">
              Esta condição especial pode ser atualizada sem aviso prévio. Não cobramos mensalidade.
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
            <p className="eyebrow">Por que o valor é tão acessível?</p>
            <h2>Digital por escolha. Acessível por propósito.</h2>
            <p className="text-muted-foreground mt-2">
              Como o material é 100% digital, não existem custos de gráfica centralizada, embalagem, estoque físico ou frete
              dos Correios. Isso nos permite oferecer o kit completo por um valor simbólico de apenas {PRICE}, facilitando o
              acesso de famílias de todo o Brasil.
            </p>
          </div>
          <div className="digital-points">
            <span>
              <FileText /> Arquivos em PDF de alta qualidade
            </span>
            <span>
              <Printer /> Você imprime em casa só o que for usar
            </span>
            <span>
              <PackageCheck /> Sem espera de frete ou risco de extravio
            </span>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="section guarantee-section">
        <div className="page-shell guarantee-inner">
          <div className="guarantee-seal">
            <ShieldCheck />
            <strong>7 DIAS</strong>
            <span>DE GARANTIA</span>
          </div>
          <div>
            <p className="eyebrow">Seu risco é absolutamente zero</p>
            <h2>Conheça o material com total tranquilidade.</h2>
            <p className="text-muted-foreground mt-2">
              Após a compra, você tem <strong>7 dias inteiros de garantia incondicional</strong>. Se dentro desse período
              você entender que o Kit Primeiras Palavras não supriu suas expectativas, basta solicitar o reembolso que
              devolvemos 100% do seu dinheiro.
            </p>
            <p className="legal-note">
              Sem burocracia, sem letras miúdas: uma garantia transparente e respeitosa com a sua família.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="page-shell faq-layout">
          <div className="faq-intro">
            <p className="eyebrow">Antes de decidir</p>
            <h2>Dúvidas comuns, respostas diretas.</h2>
            <p>Veja se o kit combina com o momento atual do seu filho.</p>
            <button
              type="button"
              onClick={scrollToOffer}
              className="cta-button cta-green cursor-pointer"
            >
              <span>TENHO INTERESSE NO KIT</span>
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
          <p className="eyebrow eyebrow-light">Um pequeno momento que cabe na rotina</p>
          <h2>
            Imagine transformar alguns minutos do dia em um momento divertido de aprendizado{" "}
            <em>com seu filho.</em>
          </h2>
          <p>
            Sem cobrança para fazer tudo correndo. Sem a obrigação de acertar de primeira. Apenas uma atividade pronta,
            sua presença acolhedora e a chance de comemorar cada pequena descoberta juntos.
          </p>
          <div className="closing-quote">
            <Heart fill="currentColor" />
            <span>
              Porque, quando o caminho fica mais simples e estruturado, sobra mais espaço para encorajar, brincar e
              aprender.
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
              Primeiras <strong>Palavras</strong>
            </span>
          </div>
          <p className="text-center md:text-left">
            Material educativo complementar para uso familiar e apoio pedagógico em casa.
          </p>
          <p>© {new Date().getFullYear()} Kit Primeiras Palavras. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Sales Notification in corner */}
      <SalesNotification />
    </div>
  );
}
