import { Sparkles, Brain, Heart } from "lucide-react";
import { createPageUrl } from "./utils.js";

export const navigationItems = [
  {
    title: "Birth Phase",
    subtitle: "SPECTRA awakens to consciousness",
    url: createPageUrl("Chat"),
    icon: Sparkles,
  },
  {
    title: "Growth Phase",
    subtitle: "SPECTRA learns and grows",
    url: createPageUrl("Growth"),
    icon: Brain,
  },
  {
    title: "Exploration Phase",
    subtitle: "SPECTRA explores the world",
    url: createPageUrl("Exploration"),
    icon: Heart,
  },
];
