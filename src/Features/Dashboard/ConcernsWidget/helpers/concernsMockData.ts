import Heart from "@assets/ConcernsWidget/Heart.svg";
import Diab from "@assets/ConcernsWidget/Diab.svg";

export interface Concern {
	id: number;
  // Texts which will be changed up to language selection
	title: Record<"en" | "fr", string>;
	factors: Record<"en" | "fr", string[]>;
	icon: string;
	status: "High" | "Medium" | "Low";
	link?: string;
}

export const concernsMockData: Concern[] = [
  {
    id: 1,
    title: { en: "Atrial Fibrillation", fr: "Fibrillation auriculaire" },
    factors: {
      en: ["High cholesterol", "Smoking", "Hypertension"],
      fr: ["Cholestérol élevé", "Tabagisme", "Hypertension"],
    },
    icon: Heart,
    status: "High",
    link: "cardiovascular",
  },
  {
    id: 2,
    title: { en: "Stroke", fr: "Accident vasculaire cérébral" },
    factors: {
      en: ["Low oral glucose", "Family history"],
      fr: ["Faible glucose oral", "Antécédents familiaux"],
    },
    icon: Diab,
    status: "High",
    link: "cardiovascular",
  },
  {
    id: 3,
    title: { en: "Coronary Artery Disease", fr: "Maladie coronarienne" },
    factors: {
      en: ["High coronary artery calcium level", "High coronary artery calcium level"],
      fr: ["Niveau élevé de calcium coronaire", "Niveau élevé de calcium coronaire"],
    },
    icon: Heart,
    status: "Medium",
  },
  {
    id: 4,
    title: { en: "Hypertension", fr: "Hypertension" },
    factors: {
      en: ["High blood pressure", "Stress", "High sodium diet"],
      fr: ["Pression artérielle élevée", "Stress", "Régime riche en sodium"],
    },
    icon: Heart,
    status: "Medium",
  },
  {
    id: 5,
    title: { en: "Chronic Kidney Disease", fr: "Maladie rénale chronique" },
    factors: {
      en: ["Elevated creatinine levels", "Diabetes", "Hypertension"],
      fr: ["Niveaux élevés de créatinine", "Diabète", "Hypertension"],
    },
    icon: Diab,
    status: "High",
  },
  {
    id: 6,
    title: { en: "Obesity", fr: "Obésité" },
    factors: {
      en: ["High BMI", "Low physical activity", "Unhealthy eating habits"],
      fr: ["IMC élevé", "Faible activité physique", "Mauvaises habitudes alimentaires"],
    },
    icon: Heart,
    status: "Low",
  },
];
