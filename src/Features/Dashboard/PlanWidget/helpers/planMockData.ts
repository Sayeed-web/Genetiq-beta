import beetroot from "@assets/PlanWidget/Supplements/beetroot.svg";
import tumeric from "@assets/PlanWidget/Supplements/tumeric.svg";
import omega from "@assets/PlanWidget/Supplements/omega.svg";
import coenzyme from "@assets/PlanWidget/Supplements/coenzyme.svg";
import ashwagandha from "@assets/PlanWidget/Supplements/ashwagandha.svg";

import train from "@assets/PlanWidget/Lifestyle/train.svg";
import quitSmoking from "@assets/PlanWidget/Lifestyle/quitSmoking.svg";
import apple from "@assets/PlanWidget/Lifestyle/apple.svg";

import gene from "@assets/PlanWidget/FollowUpCare/gene.svg";
import microscope from "@assets/PlanWidget/FollowUpCare/microscope.svg";
import scale from "@assets/PlanWidget/FollowUpCare/scale.svg";

import heart from "@assets/ConcernsWidget/Heart.svg";
import diab from "@assets/ConcernsWidget/Diab.svg";



export type Supplements = {
	title: string;
	description: string;
	types: {
		name: string;
		icon: string;
		supplements: {
			amount: number;
			supplement: string;
		}[];
	}[];
};


export type PlanItem = {
  name: Record<"en" | "fr", string>;
  description: Record<"en" | "fr", string>;
  group?: string;
  dosage?: string;
  frequency?: string;
  count?: number;
  link?: string;
  icon: string;
};

export type PlanSection = {
  title: Record<"en" | "fr", string>;
  cta?: {
    title: Record<"en" | "fr", string>;
    description: Record<"en" | "fr", string>;
    types: {
      name: Record<"en" | "fr", string>;
      icon: string;
      supplements: { amount: number; supplement: string }[];
    }[];
  };
  type?: string;
  data: PlanItem[];
};

export const planMockData: PlanSection[] = [
  {
    title: { en: "Action Plan", fr: "Plan d'action" },
    type: "aggregated",
    data: [],
  },
  {
    title: { en: "Follow-up Care", fr: "Suivi médical" },
    data: [
      {
        name: { en: "Take Genetic Health Risk Tests", fr: "Faire des tests de risque génétique" },
        description: { en: "Improved lung function", fr: "Amélioration de la fonction pulmonaire" },
        icon: gene,
      },
      {
        name: { en: "Monitoring blood pressure 3 times a week", fr: "Surveillance de la pression artérielle 3 fois par semaine" },
        description: { en: "Early detection of hypertension", fr: "Détection précoce de l'hypertension" },
        icon: scale,
      },
      {
        name: { en: "Adopt a low-glycemic index and heart healthy diets", fr: "Adopter un régime à faible indice glycémique et sain pour le cœur" },
        description: { en: "Helps widen blood vessels +6", fr: "Aide à dilater les vaisseaux sanguins +6" },
        icon: microscope,
      },
      {
        name: { en: "Keep in range your Body Mass Index", fr: "Maintenir votre indice de masse corporelle" },
        description: { en: "Lowers your blood pressure +3", fr: "Réduit votre pression artérielle +3" },
        icon: scale,
      },
      {
        name: { en: "Take a cholesterol laboratory test", fr: "Faire un test de cholestérol en laboratoire" },
        description: { en: "Assessment of insulin resistance +7", fr: "Évaluation de la résistance à l'insuline +7" },
        icon: microscope,
      },
      {
        name: { en: "Consider taking your avg. blood sugar (glucose) level", fr: "Envisager de mesurer votre glycémie moyenne" },
        description: { en: "Early detection of diabetes or prediabetes +5", fr: "Détection précoce du diabète ou prédiabète +5" },
        icon: microscope,
      },
      {
        name: { en: "Monitoring blood pressure 1 time a day", fr: "Surveillance de la pression artérielle une fois par jour" },
        description: { en: "Detect respiratory or cardiovascular issues +5", fr: "Détecte les problèmes respiratoires ou cardiovasculaires +5" },
        icon: scale,
      },
    ],
  },
  {
    title: { en: "Supplements", fr: "Suppléments" },
    cta: {
      title: { en: "Your Personal Supplements Mix", fr: "Votre mélange personnel de suppléments" },
      description: {
        en: "This combination helps reduce inflammation, regulate blood pressure, and improve heart function, aiding in the prevention of diseases such as hypertension, atrial fibrillation, and coronary artery disease.",
        fr: "Cette combinaison aide à réduire l'inflammation, réguler la pression artérielle et améliorer la fonction cardiaque, contribuant à la prévention des maladies telles que l'hypertension, la fibrillation auriculaire et la coronaropathie.",
      },
      types: [
        {
          name: { en: "Cardiovascular", fr: "Cardiovasculaire" },
          icon: heart,
          supplements: [
            { amount: 4, supplement: "Vitamins" },
            { amount: 3, supplement: "Minerals" },
            { amount: 1, supplement: "Amino acid" },
            { amount: 2, supplement: "Antioxidants" },
          ],
        },
        {
          name: { en: "Digestive", fr: "Digestif" },
          icon: diab,
          supplements: [
            { amount: 3, supplement: "Vitamins" },
            { amount: 3, supplement: "Amino acid" },
            { amount: 3, supplement: "Minerals" },
            { amount: 1, supplement: "Antioxidants" },
          ],
        },
        {
          name: { en: "My personal formula", fr: "Ma formule personnelle" },
          icon: heart,
          supplements: [
            { amount: 7, supplement: "Vitamins" },
            { amount: 6, supplement: "Minerals" },
            { amount: 4, supplement: "Amino acid" },
            { amount: 3, supplement: "Antioxidants" },
          ],
        },
      ],
    },
    type: "grouped",
    data: [
      {
        name: { en: "Beetroot powder / titrate supplements", fr: "Poudre de betterave / suppléments titrés" },
        description: { en: "Increases nitric oxide levels", fr: "Augmente les niveaux d'oxyde nitrique" },
        dosage: "1 pill",
        frequency: "Once",
        group: "peptides",
        icon: beetroot,
      },
      {
        name: { en: "Take turmeric extract to reduce inflammation (CPR)", fr: "Prendre de l'extrait de curcuma pour réduire l'inflammation (CPR)" },
        description: { en: "Supports vascular health", fr: "Soutient la santé vasculaire" },
        dosage: "1 pill",
        frequency: "Once",
        group: "peptides",
        icon: tumeric,
      },
      {
        name: { en: "Take Omega-3 Fatty Acids", fr: "Prendre des acides gras oméga-3" },
        description: { en: "Helps widen blood vessels +8", fr: "Aide à dilater les vaisseaux sanguins +8" },
        dosage: "1 pill",
        frequency: "Once",
        group: "other",
        icon: omega,
      },
      {
        name: { en: "Coenzyme Q10 (CoQ10)", fr: "Coenzyme Q10 (CoQ10)" },
        description: { en: "Include Coenzyme Q10 (CoQ10)", fr: "Inclure le coenzyme Q10 (CoQ10)" },
        dosage: "1 pill",
        frequency: "Once",
        group: "other",
        icon: coenzyme,
      },
      {
        name: { en: "Add Ashwagandha (Withania somnifera)", fr: "Ajouter Ashwagandha (Withania somnifera)" },
        description: { en: "Supports vascular health", fr: "Soutient la santé vasculaire" },
        dosage: "1 pill",
        frequency: "Once",
        group: "other",
        icon: ashwagandha,
      },
    ],
  },
  {
    title: { en: "Lifestyle", fr: "Mode de vie" },
    data: [
      {
        name: { en: "Quit smoking & limit alcohol", fr: "Arrêter de fumer & limiter l'alcool" },
        description: { en: "Improved lung function +5", fr: "Amélioration de la fonction pulmonaire +5" },
        icon: quitSmoking,
      },
      {
        name: { en: "Train in zone 2 & monitor regularly VO2 max", fr: "S'entraîner en zone 2 & surveiller régulièrement le VO2 max" },
        description: { en: "Supports vascular health +4", fr: "Soutient la santé vasculaire +4" },
        icon: train,
      },
      {
        name: { en: "Adopt a low-glycemic index and heart healthy diets", fr: "Adopter un régime à faible indice glycémique et sain pour le cœur" },
        description: { en: "Helps widen blood vessels +6", fr: "Aide à dilater les vaisseaux sanguins +6" },
        icon: apple,
      },
      {
        name: { en: "Manage your stress", fr: "Gérer votre stress" },
        description: { en: "Helps widen blood vessels +8", fr: "Aide à dilater les vaisseaux sanguins +8" },
        icon: quitSmoking,
      },
      {
        name: { en: "Fill your plate with fruits and veggies", fr: "Remplissez votre assiette de fruits et légumes" },
        description: { en: "Lowers your blood pressure +3", fr: "Réduit votre pression artérielle +3" },
        icon: apple,
      },
      {
        name: { en: "Reduce sugar and salt", fr: "Réduire le sucre et le sel" },
        description: { en: "Improved lung function +5", fr: "Amélioration de la fonction pulmonaire +5" },
        icon: apple,
      },
      {
        name: { en: "Practice flexibility and balance", fr: "Pratiquer la flexibilité et l'équilibre" },
        description: { en: "Enhances joint health +8", fr: "Améliore la santé des articulations +8" },
        icon: train,
      },
    ],
  },
];


export const AtrialFibrillationPlanMockData: PlanSection[] = [
	{
		title: "Action Plan",
		type: "aggregated",
		data: [],
	},
	{
		title: "Follow-up Care",
		data: [
			{
				name: "EKG Monitoring",
				description: "Detects irregular heart rhythms",
				icon: gene,
			},
			{
				name: "Blood Sugar Monitoring",
				description: "Reduces secondary health risks",
				icon: microscope,
			},
		],
	},
	{
		title: "Supplements",
		cta: {
			title: "Atrial Fibrillation Supplement Mix",
			description: "Supports heart rhythm and vascular health.",
			types: [
				{
					name: "Heart Rhythm Support",
					icon: heart,
					supplements: [
						{ amount: 3, supplement: "Vitamins" },
						{ amount: 2, supplement: "Minerals" },
					],
				},
			],
		},
		data: [
			{
				name: "Magnesium Citrate",
				description: "Supports heart muscle relaxation",
				icon: omega,
			},
			{
				name: "Turmeric Extract",
				description: "Reduces inflammation",
				icon: tumeric,
			},
		],
	},
	{
		title: "Lifestyle",
		data: [
			{
				name: "Quit Smoking",
				description: "Improves lung and heart health",
				icon: quitSmoking,
			},
			{
				name: "Adopt a Heart-Healthy Diet",
				description: "Reduces cholesterol levels",
				icon: apple,
			},
		],
	},
];

export const StrokePlanMockData: PlanSection[] = [
	{
		title: "Action Plan",
		type: "aggregated",
		data: [],
	},
	{
		title: "Follow-up Care",
		data: [
			{
				name: "Blood Pressure Monitoring",
				description: "Helps prevent secondary strokes",
				icon: scale,
			},
			{
				name: "Regular Neurological Exams",
				description: "Monitors post-stroke recovery",
				icon: gene,
			},
		],
	},
	{
		title: "Supplements",
		cta: {
			title: "Stroke Recovery Supplement Mix",
			description: "Supports brain health and reduces inflammation.",
			types: [
				{
					name: "Brain Health",
					icon: diab,
					supplements: [
						{ amount: 4, supplement: "Antioxidants" },
						{ amount: 3, supplement: "Vitamins" },
					],
				},
			],
		},
		data: [
			{
				name: "Vitamin D",
				description: "Improves vascular function",
				icon: coenzyme,
			},
			{
				name: "Ashwagandha",
				description: "Reduces stress and inflammation",
				icon: ashwagandha,
			},
		],
	},
	{
		title: "Lifestyle",
		data: [
			{
				name: "Engage in Physical Therapy",
				description: "Enhances motor recovery",
				icon: train,
			},
			{
				name: "Reduce Salt and Sugar",
				description: "Improves blood pressure control",
				icon: apple,
			},
		],
	},
];

export const CoronaryArteryDiseasePlanMockData: PlanSection[] = [
	{
		title: "Action Plan",
		type: "aggregated",
		data: [],
	},
	{
		title: "Follow-up Care",
		data: [
			{
				name: "Routine EKG Tests",
				description: "Monitors heart function",
				icon: gene,
			},
			{
				name: "Cholesterol Panel Testing",
				description: "Tracks lipid levels",
				icon: microscope,
			},
		],
	},
	{
		title: "Supplements",
		cta: {
			title: "Heart Health Supplements",
			description: "Supports arterial health and reduces plaque buildup.",
			types: [
				{
					name: "Heart Health",
					icon: heart,
					supplements: [
						{ amount: 3, supplement: "Minerals" },
						{ amount: 2, supplement: "Vitamins" },
					],
				},
			],
		},
		data: [
			{
				name: "Omega-3 Fatty Acids",
				description: "Lowers triglycerides",
				icon: omega,
			},
			{
				name: "Turmeric Extract",
				description: "Reduces inflammation",
				icon: tumeric,
			},
		],
	},
	{
		title: "Lifestyle",
		data: [
			{
				name: "Exercise Regularly",
				description: "Improves circulation",
				icon: train,
			},
			{
				name: "Adopt a Mediterranean Diet",
				description: "Promotes heart health",
				icon: apple,
			},
		],
	},
];

export const HypertensionPlanMockData: PlanSection[] = [
	{
		title: "Action Plan",
		type: "aggregated",
		data: [],
	},
	{
		title: "Follow-up Care",
		data: [
			{
				name: "Blood Pressure Monitoring",
				description: "Tracks daily changes",
				icon: scale,
			},
			{
				name: "Renal Function Tests",
				description: "Assesses kidney health",
				icon: gene,
			},
		],
	},
	{
		title: "Supplements",
		cta: {
			title: "Blood Pressure Supplements",
			description: "Helps regulate blood pressure naturally.",
			types: [
				{
					name: "Hypertension Support",
					icon: diab,
					supplements: [
						{ amount: 3, supplement: "Vitamins" },
						{ amount: 2, supplement: "Minerals" },
					],
				},
			],
		},
		data: [
			{
				name: "Beetroot Powder",
				description: "Increases nitric oxide",
				icon: beetroot,
			},
			{
				name: "Ashwagandha",
				description: "Reduces stress",
				icon: ashwagandha,
			},
		],
	},
	{
		title: "Lifestyle",
		data: [
			{
				name: "Quit Smoking",
				description: "Improves vascular health",
				icon: quitSmoking,
			},
			{
				name: "Engage in Zone 2 Training",
				description: "Lowers resting heart rate",
				icon: train,
			},
		],
	},
];

export const HeartFailurePlanMockData: PlanSection[] = [
	{
		title: "Action Plan",
		type: "aggregated",
		data: [],
	},
	{
		title: "Follow-up Care",
		data: [
			{
				name: "Echocardiograms",
				description: "Monitors heart function",
				icon: gene,
			},
			{
				name: "Blood Pressure Monitoring",
				description: "Prevents sudden changes",
				icon: scale,
			},
		],
	},
	{
		title: "Supplements",
		cta: {
			title: "Heart Failure Supplements",
			description: "Supports overall cardiac health.",
			types: [
				{
					name: "Cardiac Support",
					icon: heart,
					supplements: [
						{ amount: 3, supplement: "Vitamins" },
						{ amount: 2, supplement: "Minerals" },
					],
				},
			],
		},
		data: [
			{
				name: "Coenzyme Q10",
				description: "Improves cellular energy",
				icon: coenzyme,
			},
			{
				name: "Turmeric Extract",
				description: "Reduces inflammation",
				icon: tumeric,
			},
		],
	},
	{
		title: "Lifestyle",
		data: [
			{
				name: "Reduce Salt Intake",
				description: "Lowers blood pressure",
				icon: apple,
			},
			{
				name: "Engage in Physical Therapy",
				description: "Improves endurance",
				icon: train,
			},
		],
	},
];
