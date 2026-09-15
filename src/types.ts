import type { LucideIcon } from "lucide-react";

export interface StepItem {
  number: string;
  icon: LucideIcon;
  title: string;
  text: string;
  benefit: string;
  color: string;
}

export interface ActivityItem {
  title: string;
  text: string;
  icon: LucideIcon;
  tag: string;
  example: string;
}

export interface BonusItem {
  label: string;
  title: string;
  description: string;
  benefit: string;
  value: string;
  icon: LucideIcon;
  image?: string;
  tagColor?: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  location: string;
  childAge: string;
  rating: number;
  text: string;
  highlight: string;
  avatarBg: string;
  verified: boolean;
  image?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}
