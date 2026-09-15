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

export const PRICE = "R$ 19,90";
export const FULL_VALUE = "R$ 153";
export const CHECKOUT_ANCHOR = "#oferta";
export const CHECKOUT_URL = "https://pay.wiapy.com/cArvKAGjWcJV";

export const quickBenefits = [
  "Atividades prontas e organizadas por habilidade",
  "Prática de letras, sons, sílabas e palavras",
  "Imprima somente o que quiser usar",
  "Momentos educativos longe das telas",
  "Você não precisa ser professor",
];

export const situations = [
  "Reconhece algumas letras, mas ainda se confunde ao juntar os sons?",
  "Sabe dizer o alfabeto, mas formar uma palavra parece um salto grande demais?",
  "Perde o interesse quando a atividade é longa, repetitiva ou pouco visual?",
  "Você salva várias atividades gratuitas, mas não sabe qual usar primeiro?",
  "Quer ajudar em casa, porém fica com receio de ensinar do jeito errado?",
  "Gostaria de trocar alguns minutos de tela por uma atividade com propósito?",
];

export const steps: StepItem[] = [
  {
    number: "01",
    icon: PencilLine,
    title: "Grafismo e coordenação",
    text: "Traçados, caminhos e movimentos ajudam a criança a ganhar mais controle do lápis e segurança para registrar letras.",
    benefit: "Mais confiança para começar",
    color: "bg-coral-soft text-coral",
  },
  {
    number: "02",
    icon: Volume2,
    title: "Letras e sons",
    text: "Atividades visuais aproximam o formato das letras dos sons que aparecem nas palavras do dia a dia.",
    benefit: "Conexões que fazem sentido",
    color: "bg-sun-soft text-sun-deep",
  },
  {
    number: "03",
    icon: Puzzle,
    title: "Sílabas e combinações",
    text: "A criança começa a perceber como os sons se unem e pratica combinações de um jeito leve e progressivo.",
    benefit: "Um passo de cada vez",
    color: "bg-teal-soft text-teal",
  },
  {
    number: "04",
    icon: BookOpen,
    title: "Palavras e leitura inicial",
    text: "Com peças, imagens e desafios curtos, ela experimenta montar palavras e dar os primeiros passos na leitura.",
    benefit: "Prática com significado",
    color: "bg-blue-soft text-blue",
  },
];

export const activities: ActivityItem[] = [
  {
    title: "Grafismo",
    text: "Pratica movimentos e controle do lápis com labirintos e traçados lúdicos.",
    icon: PencilLine,
    tag: "Coordenação",
    example: "Caminhos e curvas",
  },
  {
    title: "Complete a sílaba",
    text: "Relaciona sons, imagens e combinações fonéticas iniciais.",
    icon: Volume2,
    tag: "Fonética",
    example: "BA · BE · BI · BO · BU",
  },
  {
    title: "Monte a palavra",
    text: "Organiza letras com apoio visual e fichas recortáveis.",
    icon: Puzzle,
    tag: "Combinações",
    example: "B + O + L + A = BOLA",
  },
  {
    title: "Ligue figura e palavra",
    text: "Estimula o reconhecimento visual, vocabulário e dedução.",
    icon: Eye,
    tag: "Vocabulário",
    example: "Associação ilustrada",
  },
  {
    title: "Atividade fonética",
    text: "Aproxima o som inicial das letras de objetos familiares da rotina.",
    icon: LetterText,
    tag: "Consciência Fonológica",
    example: "Som das letras",
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
    url: "/activities/page-1.png",
    fallbackUrl: "https://i.ibb.co/8wWT3Bw/Chat-GPT-Image-14-de-set-de-2026-21-42-42-1.png",
    title: "Grafismo e Traçados Iniciais",
    description: "Coordenação motora fina e controle do lápis com movimentos guiados",
    tag: "Coordenação",
  },
  {
    id: 2,
    url: "/activities/page-2.png",
    fallbackUrl: "https://i.ibb.co/7dHXBCsj/Chat-GPT-Image-14-de-set-de-2026-21-42-43-2.png",
    title: "Reconhecimento das Letras",
    description: "Identificação visual do alfabeto com figuras afetivas do cotidiano infantil",
    tag: "Alfabeto",
  },
  {
    id: 3,
    url: "/activities/page-3.png",
    fallbackUrl: "https://i.ibb.co/F4T13YyR/Chat-GPT-Image-14-de-set-de-2026-21-42-43-3.png",
    title: "Consciência Fonológica e Sons",
    description: "Aproximação lúdica dos sons das letras de forma intuitiva",
    tag: "Sons e Fonética",
  },
  {
    id: 4,
    url: "/activities/page-4.png",
    fallbackUrl: "https://i.ibb.co/tM1Fv6mZ/Chat-GPT-Image-14-de-set-de-2026-21-42-43-4.png",
    title: "Famílias Silábicas",
    description: "Junção de consoantes e vogais para compor as primeiras sílabas simples",
    tag: "Sílabas",
  },
  {
    id: 5,
    url: "/activities/page-5.png",
    fallbackUrl: "https://i.ibb.co/5gmRhhvb/Chat-GPT-Image-14-de-set-de-2026-21-42-43-5.png",
    title: "Complete a Palavra",
    description: "Fixação visual e auditiva das sílabas faltantes em palavras ilustradas",
    tag: "Fixação",
  },
  {
    id: 6,
    url: "/activities/page-6.png",
    fallbackUrl: "https://i.ibb.co/MxbB0KDd/Chat-GPT-Image-14-de-set-de-2026-21-42-44-6.png",
    title: "Monte a Palavra",
    description: "Construção ativa de palavras reais letra por letra com apoio visual",
    tag: "Combinações",
  },
  {
    id: 7,
    url: "/activities/page-7.png",
    fallbackUrl: "https://i.ibb.co/JRzqkRtV/Chat-GPT-Image-14-de-set-de-2026-21-42-44-7.png",
    title: "Ligue Figura e Palavra",
    description: "Associação direta entre objeto e escrita para ampliar o vocabulário",
    tag: "Vocabulário",
  },
  {
    id: 8,
    url: "/activities/page-8.png",
    fallbackUrl: "https://i.ibb.co/RpdcXTgg/Chat-GPT-Image-14-de-set-de-2026-21-42-44-8.png",
    title: "Caça-Palavras e Percepção Visual",
    description: "Exercícios divertidos de atenção e discriminação visual das letras",
    tag: "Percepção Visual",
  },
  {
    id: 9,
    url: "/activities/page-9.png",
    fallbackUrl: "https://i.ibb.co/6RhjnKbK/Chat-GPT-Image-14-de-set-de-2026-21-42-45-9.png",
    title: "Leitura de Frases Curtas",
    description: "Pequenos desafios de leitura contextualizada para ganhar autonomia",
    tag: "Leitura Inicial",
  },
  {
    id: 10,
    url: "/activities/page-10.png",
    fallbackUrl: "https://i.ibb.co/CK0p1P8Y/Chat-GPT-Image-14-de-set-de-2026-21-42-46-10.png",
    title: "Interpretação Ilustrada e Criatividade",
    description: "Desenvolvimento da compreensão leitora com propostas coloridas",
    tag: "Interpretação",
  },
];

export const skills = [
  [PencilLine, "Coordenação motora"],
  [MousePointer2, "Grafismo"],
  [LetterText, "Reconhecimento de letras"],
  [Volume2, "Letras e sons"],
  [Layers3, "Sílabas"],
  [Puzzle, "Formação de palavras"],
  [Eye, "Percepção visual"],
  [Brain, "Atenção"],
  [Sparkles, "Vocabulário"],
  [BookOpen, "Leitura inicial"],
] as const;

export const bonuses: BonusItem[] = [
  {
    label: "Produto principal",
    title: "Kit Primeiras Palavras",
    description: "O sistema progressivo com atividades de letras, sons, sílabas, palavras e leitura inicial.",
    benefit: "Tenha um caminho organizado para acompanhar diferentes etapas.",
    value: "R$ 47",
    icon: BookOpen,
    image: "https://i.ibb.co/TDssXRQH/Chat-GPT-Image-11-de-set-de-2026-22-33-59.png",
  },
  {
    label: "Bônus 1",
    title: "Caderno de Grafismo Divertido",
    description: "Traçados, caminhos e formas para praticar movimentos importantes antes da escrita.",
    benefit: "Ajuda a preparar a coordenação de forma leve.",
    value: "R$ 17",
    icon: PencilLine,
    image: "https://i.ibb.co/fd7RQkNV/Chat-GPT-Image-11-de-set-de-2026-22-33-59.png",
  },
  {
    label: "Bônus 2",
    title: "Cartões de Sílabas",
    description: "Cartões para visualizar, combinar e brincar com diferentes famílias silábicas.",
    benefit: "Torna as combinações mais concretas e visuais.",
    value: "R$ 17",
    icon: Layers3,
    image: "https://i.ibb.co/0V1jFWx7/Chat-GPT-Image-12-de-set-de-2026-20-49-41-2.png",
  },
  {
    label: "Bônus 3",
    title: "Jogo Monte a Palavra",
    description: "Peças e desafios para organizar letras e construir palavras com apoio de imagens.",
    benefit: "Transforma a prática em uma pequena brincadeira.",
    value: "R$ 19",
    icon: Puzzle,
    image: "https://i.ibb.co/tpkYHGpp/Chat-GPT-Image-12-de-set-de-2026-20-49-42-5.png",
  },
  {
    label: "Bônus 4",
    title: "Desafios de Leitura",
    description: "Propostas curtas para crianças que já estão ensaiando suas primeiras leituras.",
    benefit: "Oferece novos desafios sem pular etapas.",
    value: "R$ 17",
    icon: BookOpen,
    image: "https://i.ibb.co/BXtHDb7/Chat-GPT-Image-12-de-set-de-2026-20-49-41-4.png",
  },
  {
    label: "Bônus 5",
    title: "Atividades Educativas sem Tela",
    description: "Ideias simples para criar momentos de atenção, conversa e aprendizagem em casa.",
    benefit: "Mais opções para ocupar o tempo com propósito.",
    value: "R$ 19",
    icon: Heart,
    image: "https://i.ibb.co/rRN9Fq6q/Chat-GPT-Image-12-de-set-de-2026-20-49-41-1.png",
  },
  {
    label: "Bônus 6",
    title: "Guia Prático de Alfabetização para Pais",
    description: "Orientações diretas para incentivar a leitura com paciência, carinho e sem cobranças excessivas.",
    benefit: "Mais segurança para conduzir o desenvolvimento no ritmo da criança.",
    value: "R$ 17",
    icon: Sparkles,
    image: "https://i.ibb.co/Q7Dsk778/Chat-GPT-Image-12-de-set-de-2026-20-49-42-6.png",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    name: "Mariana S. Albuquerque",
    role: "Mãe do Theo",
    childAge: "5 anos",
    location: "São Paulo, SP",
    rating: 5,
    highlight: "Ele parou de reclamar que atividade é chata!",
    text: "Eu baixava coisas aleatórias no Pinterest e nunca sabia a ordem. Com o kit foi direto ao ponto: começamos pelo grafismo e em poucas semanas ele já estava juntando as sílabas sozinho!",
    avatarBg: "bg-teal text-white",
    verified: true,
    image: "https://i.ibb.co/b5SmmhTj/Chat-GPT-Image-12-de-set-de-2026-21-15-04-1.png",
  },
  {
    name: "Camila Ribeiro Rocha",
    role: "Mãe da Alice",
    childAge: "6 anos",
    location: "Belo Horizonte, MG",
    rating: 5,
    highlight: "Momentos preciosos longe do tablet e celular",
    text: "O que mais me surpreendeu foi a leveza. São folhas limpas, com ilustrações gostosas de colorir e completar. A gente faz 15 minutinhos por dia e ela mesma pede para continuar.",
    avatarBg: "bg-coral text-white",
    verified: true,
    image: "https://i.ibb.co/WNDvmrRw/Chat-GPT-Image-12-de-set-de-2026-21-15-04-2.png",
  },
  {
    name: "Rodrigo Mendonça",
    role: "Pai do Lucas",
    childAge: "4 anos e meio",
    location: "Curitiba, PR",
    rating: 5,
    highlight: "Não precisa ter didática de professor",
    text: "Eu não sabia por onde começar sem brigar. O material é autoexplicativo: você imprime duas folhas, senta do lado e a própria criança entende o que fazer pelo desenho.",
    avatarBg: "bg-blue text-white",
    verified: true,
    image: "https://i.ibb.co/CKN80F08/Chat-GPT-Image-12-de-set-de-2026-21-15-04-3.png",
  },
  {
    name: "Patrícia N. Guimarães",
    role: "Mãe do Bernardo",
    childAge: "5 anos",
    location: "Campinas, SP",
    rating: 5,
    highlight: "Evolução visível no reconhecimento das letras e sílabas",
    text: "A metodologia em passos fez toda a diferença. O Bernardo tinha muita resistência na escola, mas com os cartões e joguinhos do kit ele pegou gosto rapidinho!",
    avatarBg: "bg-amber-600 text-white",
    verified: true,
    image: "https://i.ibb.co/bRg2QV6d/Chat-GPT-Image-12-de-set-de-2026-21-15-04-4.png",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Meu filho é muito novo? Qual a idade indicada?",
    answer:
      "O kit foi pensado especialmente para crianças de 3 a 7 anos, em fase de pré-alfabetização e alfabetização inicial. Como cada criança tem seu próprio ritmo, você pode escolher as propostas que combinam com o momento dela (começando por traçados simples) e avançar aos poucos.",
  },
  {
    question: "Preciso ser professor para conseguir aplicar?",
    answer:
      "Não! Essa é uma das principais vantagens do material. As atividades são visuais, intuitivas e vêm prontas para usar. Você só precisa sentar ao lado da criança por 10 a 15 minutos e incentivá-la com carinho.",
  },
  {
    question: "Preciso imprimir tudo de uma vez só?",
    answer:
      "De forma alguma. O arquivo é seu para sempre. Você pode imprimir somente 1 ou 2 páginas por dia conforme o interesse da criança, economizando papel e tinta.",
  },
  {
    question: "É um produto físico que chega pelo correio?",
    answer:
      "Não. O Kit Primeiras Palavras é 100% digital em formato PDF de alta resolução para impressão. Isso garante acesso imediato sem cobrança de frete nem demora dos correios.",
  },
  {
    question: "Como e quando recebo o material?",
    answer:
      "O link de acesso é enviado diretamente para o seu e-mail imediatamente após a confirmação do pagamento. Compras via Pix ou Cartão são liberadas em menos de 2 minutos.",
  },
  {
    question: "Posso usar e visualizar pelo celular?",
    answer:
      "Sim, você pode abrir e consultar os arquivos pelo celular, tablet ou computador. Para a criança praticar o traçado, escrita e recorte, recomendamos imprimir as páginas selecionadas.",
  },
  {
    question: "Meu filho já conhece algumas letras. Ainda vale a pena?",
    answer:
      "Com certeza! Conhecer o nome das letras é só o primeiro passo. O kit foca em associar o som da letra com a sílaba e com a palavra completa — que é exatamente onde a maioria das crianças trava.",
  },
  {
    question: "Meu filho ainda não sabe ler nada. Ele vai conseguir?",
    answer:
      "Sim! O kit começa desde o pré-requisito básico (coordenação motora fina, controle do lápis e percepção visual) para que ele construa segurança antes mesmo de formar as palavras.",
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer:
      "Você tem 7 dias completos para baixar, imprimir e testar as atividades com seu filho. Se achar que não ajudou ou não fez sentido, basta enviar um e-mail para receber 100% do seu reembolso sem burocracia.",
  },
];
