// useConcerns.ts
// This Hook will determince language of texts up to context api 
import { useTranslation } from "../../../../Structural/NavBar/Components/Settings/LanguageSwitch/Hooks/useChangeLanguage.tsx";
import { concernsMockData } from "../concernsMockData.ts";

interface TranslatedConcern {
  id: number;
  title: string;
  factors: string[];
  icon: string;
  status: "High" | "Medium" | "Low";
  link?: string;
}

export function useConcerns(): TranslatedConcern[] {
  const { lang } = useTranslation(); 

  return concernsMockData.map((c) => ({
    ...c,
    title: c.title[lang],
    factors: c.factors[lang],
  }));
}
