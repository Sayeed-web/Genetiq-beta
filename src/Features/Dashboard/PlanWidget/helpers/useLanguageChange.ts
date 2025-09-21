import { useTranslation } from "../../../Structural/NavBar/Components/Settings/LanguageSwitch/Hooks/useChangeLanguage.tsx";
import { planMockData, PlanSection } from "./planMockData.ts";

export const usePlanData = (): PlanSection[] => {
  const { lang } = useTranslation();

  // Map the mock data to the selected language
  return planMockData.map((section) => ({
    ...section,
    title: section.title[lang],
    data: section.data.map((item) => ({
      ...item,
      name: item.name[lang],
      description: item.description[lang],
    })),
    // Map CTA if exists
    cta: section.cta
      ? {
          ...section.cta,
          title: section.cta.title[lang],
          description: section.cta.description[lang],
          types: section.cta.types.map((type) => ({
            ...type,
            name: type.name[lang],
          })),
        }
      : undefined,
  }));
};
