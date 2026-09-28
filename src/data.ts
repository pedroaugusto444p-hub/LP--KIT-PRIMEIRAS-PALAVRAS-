import {
  BookOpen,
  Brain,
  Eye,
  Heart,
  Layers3,
  LetterText,
  MousePointer2,
  PencilLine,
  Puzzle,
  Sparkles,
  Volume2,
} from "lucide-react";
import type { StepItem, ActivityItem, BonusItem, TestimonialItem, FaqItem } from "./types";

export const PRICE = "US$ 9.90";
export const FULL_VALUE = "US$ 65";
export const CHECKOUT_ANCHOR = "#oferta";
export const CHECKOUT_URL = "https://pay.hotmart.com/B107743799S?checkoutMode=10";

export const quickBenefits = [
  "Actividades listas y organizadas por habilidad",
  "Práctica de letras, sonidos, sílabas y palabras",
  "Imprime solo lo que quieras usar",
  "Momentos educativos lejos de las pantallas",
  "No necesitas ser maestro/a",
];

export const situations = [
  "¿Reconoce algunas letras, pero se confunde al juntar los sonidos?",
  "¿Sabe decir el abecedario, pero formar una palabra parece un salto demasiado grande?",
  "¿Pierde el interés cuando la actividad es larga, repetitiva o poco visual?",
  "¿Guardas muchas actividades gratuitas, pero no sabes cuál usar primero?",
  "¿Quieres ayudar en casa, pero tienes miedo de enseñar de la forma equivocada?",
  "¿Te gustaría cambiar algunos minutos de pantalla por una actividad con propósito?",
];

export const steps: StepItem[] = [
  {
    number: "01",
    icon: PencilLine,
    title: "Grafismo y coordinación",
    text: "Trazos, caminos y movimientos ayudan al niño a ganar más control del lápiz y más seguridad para registrar letras.",
    benefit: "Más confianza para comenzar",
    color: "bg-coral-soft text-coral",
  },
  {
    number: "02",
    icon: Volume2,
    title: "Letras e sonidos",
    text: "Actividades visuales acercan la forma de las letras a los sonidos que aparecen en las palabras del día a día.",
    benefit: "Conexiones que tienen sentido",
    color: "bg-sun-soft text-sun-deep",
  },
  {
    number: "03",
    icon: Puzzle,
    title: "Sílabas y combinaciones",
    text: "El niño empieza a percibir cómo los sonidos se unen y practica combinaciones de una forma ligera y progresiva.",
    benefit: "Un paso a la vez",
    color: "bg-teal-soft text-teal",
  },
  {
    number: "04",
    icon: BookOpen,
    title: "Palabras y lectura inicial",
    text: "Con piezas, imágenes y desafíos cortos, experimenta construir palabras y dar los primeros pasos en la lectura.",
    benefit: "Práctica con significado",
    color: "bg-blue-soft text-blue",
  },
];

export const activities: ActivityItem[] = [
  {
    title: "Grafismo",
    text: "Practica movimientos y control del lápiz con laberintos y trazos divertidos.",
    icon: PencilLine,
    tag: "Coordinación",
    example: "Caminos y curvas",
  },
  {
    title: "Completa la sílaba",
    text: "Relaciona sonidos, imágenes y combinaciones fonéticas iniciales.",
    icon: Volume2,
    tag: "Fonética",
    example: "BA · BE · BI · BO · BU",
  },
  {
    title: "Construye la palabra",
    text: "Organiza letras con apoyo visual y fichas recortables.",
    icon: Puzzle,
    tag: "Combinaciones",
    example: "B + O + L + A = BOLA",
  },
  {
    title: "Une figura y palabra",
    text: "Estimula el reconocimiento visual, el vocabulario y la deducción.",
    icon: Eye,
    tag: "Vocabulario",
    example: "Asociación ilustrada",
  },
  {
    title: "Actividad fonética",
    text: "Acerca el sonido inicial de las letras a objetos conocidos de la rutina.",
    icon: LetterText,
    tag: "Conciencia Fonológica",
    example: "Sonido de las letras",
  },
];

export interface CarouselActivityImage {
  id: number;
  url: string;
  fallbackUrl: string;
  title: string;
  description: string;
  tag: string;
}

export const activityCarouselImages: CarouselActivityImage[] = [
  {
    id: 1,
    url: "https://i.ibb.co/zVSmv4jv/Chat-GPT-Image-28-de-set-de-2026-11-46-33.png",
    fallbackUrl: "https://i.ibb.co/zVSmv4jv/Chat-GPT-Image-28-de-set-de-2026-11-46-33.png",
    title: "Grafismo y Trazos Iniciales",
    description: "Coordinación motora fina y control del lápiz con movimientos guiados",
    tag: "Coordinación",
  },
  {
    id: 2,
    url: "https://i.ibb.co/fdKnbH6Z/Chat-GPT-Image-28-de-set-de-2026-11-46-50.png",
    fallbackUrl: "https://i.ibb.co/fdKnbH6Z/Chat-GPT-Image-28-de-set-de-2026-11-46-50.png",
    title: "Reconocimiento de Letras",
    description: "Identificación visual del abecedario con figuras afectivas de la rutina infantil",
    tag: "Abecedario",
  },
  {
    id: 3,
    url: "https://i.ibb.co/FkGCKwP0/Chat-GPT-Image-28-de-set-de-2026-11-47-04.png",
    fallbackUrl: "https://i.ibb.co/FkGCKwP0/Chat-GPT-Image-28-de-set-de-2026-11-47-04.png",
    title: "Conciencia Fonológica y Sonidos",
    description: "Acercamiento lúdico a los sonidos de las letras de forma intuitiva",
    tag: "Sonidos y Fonética",
  },
  {
    id: 4,
    url: "https://i.ibb.co/pj3Br3T5/Chat-GPT-Image-28-de-set-de-2026-11-47-15.png",
    fallbackUrl: "https://i.ibb.co/pj3Br3T5/Chat-GPT-Image-28-de-set-de-2026-11-47-15.png",
    title: "Familias Silábicas",
    description: "Unión de consonantes y vocales para formar las primeras sílabas simples",
    tag: "Sílabas",
  },
  {
    id: 5,
    url: "https://i.ibb.co/23HYhcV5/Chat-GPT-Image-28-de-set-de-2026-11-47-27.png",
    fallbackUrl: "https://i.ibb.co/23HYhcV5/Chat-GPT-Image-28-de-set-de-2026-11-47-27.png",
    title: "Construye la Palabra",
    description: "Construcción activa de palabras reales letra por letra con apoyo visual",
    tag: "Combinaciones",
  },
  {
    id: 6,
    url: "https://i.ibb.co/PZDC2fYn/Chat-GPT-Image-28-de-set-de-2026-11-47-41.png",
    fallbackUrl: "https://i.ibb.co/PZDC2fYn/Chat-GPT-Image-28-de-set-de-2026-11-47-41.png",
    title: "Lectura y Comprensión",
    description: "Pequeños desafíos de lectura contextualizada para ganar autonomía",
    tag: "Lectura Inicial",
  },
];

export const skills = [
  [PencilLine, "Coordinación motora"],
  [MousePointer2, "Grafismo"],
  [LetterText, "Reconocimiento de letras"],
  [Volume2, "Letras y sonidos"],
  [Layers3, "Sílabas"],
  [Puzzle, "Formación de palabras"],
  [Eye, "Percepción visual"],
  [Brain, "Atención"],
  [Sparkles, "Vocabulario"],
  [BookOpen, "Lectura inicial"],
] as const;

export const bonuses: BonusItem[] = [
  {
    label: "Producto principal",
    title: "Kit Primeras Palabras",
    description: "El sistema progresivo con actividades de letras, sonidos, sílabas, palabras y lectura inicial.",
    benefit: "Ten un camino organizado para acompañar diferentes etapas.",
    value: "US$ 25",
    icon: BookOpen,
    image: "https://i.ibb.co/TDssXRQH/Chat-GPT-Image-11-de-set-de-2026-22-33-59.png",
  },
  {
    label: "Bono 1",
    title: "Cuaderno de Grafismo Divertido",
    description: "Trazos, caminos y formas para practicar movimientos importantes antes de la escritura.",
    benefit: "Ayuda a preparar la coordinación de forma ligera.",
    value: "US$ 8",
    icon: PencilLine,
    image: "https://i.ibb.co/tw8Snrpf/06-Bono-1-Cuaderno-de-Grafomotricidad-Divertida.png",
  },
  {
    label: "Bono 2",
    title: "Tarjetas de Sílabas",
    description: "Tarjetas para visualizar, combinar y jugar con diferentes familias silábicas.",
    benefit: "Hace que las combinaciones sean más concretas y visuales.",
    value: "US$ 8",
    icon: Layers3,
    image: "https://i.ibb.co/RkFkRm6P/Chat-GPT-Image-19-de-set-de-2026-23-00-11-2.png",
  },
  {
    label: "Bono 3",
    title: "Juego Construye la Palabra",
    description: "Piezas y desafíos para organizar letras y construir palabras con apoyo de imágenes.",
    benefit: "Transforma la práctica en un pequeño juego.",
    value: "US$ 8",
    icon: Puzzle,
    image: "https://i.ibb.co/2XSqD6S/Chat-GPT-Image-19-de-set-de-2026-23-00-11-3.png",
  },
  {
    label: "Bono 4",
    title: "Desafíos de Lectura",
    description: "Propuestas cortas para niños que ya están ensayando sus primeras lecturas.",
    benefit: "Ofrece nuevos desafíos sin saltarse etapas.",
    value: "US$ 8",
    icon: BookOpen,
    image: "https://i.ibb.co/Ffv6NtB/Chat-GPT-Image-19-de-set-de-2026-23-00-13-4.png",
  },
  {
    label: "Bono 5",
    title: "Actividades Educativas sin Pantallas",
    description: "Ideas simples para crear momentos de atención, conversación y aprendizaje en casa.",
    benefit: "Más opciones para ocupar el tiempo con propósito.",
    value: "US$ 8",
    icon: Heart,
    image: "https://i.ibb.co/q3mkFFcz/Chat-GPT-Image-19-de-set-de-2026-23-00-13-5.png",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    name: "Mariana S. Gómez",
    role: "Mamá de Mateo",
    childAge: "5 años",
    location: "Ciudad de México",
    rating: 5,
    highlight: "¡Dejó de quejarse de que las actividades son aburridas!",
    text: "Descargaba cosas sueltas de Pinterest y nunca sabía el orden. Con el kit fuimos directo al grano: empezamos con grafismo y en pocas semanas ya estaba juntando sílabas solito.",
    avatarBg: "bg-teal text-white",
    verified: true,
    image: "https://i.ibb.co/b5SmmhTj/Chat-GPT-Image-12-de-set-de-2026-21-15-04-1.png",
  },
  {
    name: "Camila R. Rocha",
    role: "Mamá de Sofía",
    childAge: "6 años",
    location: "Bogotá, Colombia",
    rating: 5,
    highlight: "Momentos preciosos lejos de la tablet y el celular",
    text: "Lo que más me sorprendió fue la ligereza. Son hojas limpias, con ilustraciones atractivas para colorear y completar. Hacemos 15 minutos al día y ella misma pide continuar.",
    avatarBg: "bg-coral text-white",
    verified: true,
    image: "https://i.ibb.co/WNDvmrRw/Chat-GPT-Image-12-de-set-de-2026-21-15-04-2.png",
  },
  {
    name: "Rodrigo Mendonza",
    role: "Papá de Lucas",
    childAge: "4 años y medio",
    location: "Santiago, Chile",
    rating: 5,
    highlight: "No necesitas tener didáctica de maestro",
    text: "No sabía por dónde empezar sin frustrarme. El material es autoexplicativo: imprimes dos hojas, te sientas al lado y el niño comprende qué hacer con solo ver los dibujos.",
    avatarBg: "bg-blue text-white",
    verified: true,
    image: "https://i.ibb.co/CKN80F08/Chat-GPT-Image-12-de-set-de-2026-21-15-04-3.png",
  },
  {
    name: "Patricia N. Gutiérrez",
    role: "Mamá de Benjamín",
    childAge: "5 años",
    location: "Buenos Aires, Argentina",
    rating: 5,
    highlight: "Evolución visible en el reconocimiento de letras y sílabas",
    text: "La metodología en pasos marcó toda la diferencia. Benjamín tenía resistencia en el colegio, pero con las tarjetas y juegos del kit le tomó gusto súper rápido.",
    avatarBg: "bg-amber-600 text-white",
    verified: true,
    image: "https://i.ibb.co/bRg2QV6d/Chat-GPT-Image-12-de-set-de-2026-21-15-04-4.png",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "¿Mi hijo es muy pequeño? ¿Cuál es la edad recomendada?",
    answer:
      "El kit fue pensado especialmente para niños de 3 a 7 años, en etapa de prealfabetización y alfabetización inicial. Como cada niño tiene su propio ritmo, puedes elegir las actividades que se ajusten a su momento actual, empezando por trazos simples y avanzando poco a poco.",
  },
  {
    question: "¿Necesito ser maestro/a para aplicarlo?",
    answer:
      "No. El material fue creado para que padres y responsables puedan usarlo en casa de forma simple, sin preparar clases ni estudiar métodos complejos.",
  },
  {
    question: "¿Necesito imprimir todo de una vez?",
    answer:
      "No. Puedes imprimir solo las páginas que vayas a utilizar ese día o esa semana.",
  },
  {
    question: "¿Es un producto físico que llega por correo?",
    answer:
      "No. Es un producto digital. Recibes los archivos en PDF y puedes imprimirlos en casa.",
  },
  {
    question: "¿Cómo y cuándo recibo el material?",
    answer:
      "Después de la confirmación del pago, recibes el acceso al material digital por correo electrónico y/o en la página de entrega.",
  },
  {
    question: "¿Puedo usarlo y verlo desde el celular?",
    answer:
      "Sí. Puedes acceder al material desde el celular, tablet o computadora. Para usar las actividades con el niño, recomendamos imprimir las páginas seleccionadas.",
  },
  {
    question: "Mi hijo ya conoce algunas letras. ¿Aún vale la pena?",
    answer:
      "Sí. El kit también ayuda a practicar sonidos, sílabas, formación de palabras y lectura inicial.",
  },
  {
    question: "Mi hijo todavía no sabe leer nada. ¿Le sirve?",
    answer:
      "Sí. Puedes comenzar por grafismo, reconocimiento de letras y sonidos, avanzando poco a poco según su ritmo.",
  },
  {
    question: "¿Cómo funciona la garantía de 7 días?",
    answer:
      "Tienes 7 días para conocer el material. Si no cumple tus expectativas, puedes solicitar el reembolso dentro del plazo de garantía.",
  },
];
