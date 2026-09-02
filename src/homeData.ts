import {
  BookOpen,
  ChartNoAxesCombined,
  FileSearch,
  FolderArchive,
  GraduationCap,
  Landmark,
  Route,
  ShieldCheck,
} from 'lucide-react'
import type { FeatureItem, PartItem, StatItem, ThesisInfo } from './types'

export const thesis: ThesisInfo = {
  student: 'MIASA Ephore Exethelene',
  school: 'Institut de Commerce et de Gestion — Toamasina',
  program: 'Transit et Douane',
  year: '2026',
  title: "Analyse de la procédure d’exportation de l’art malgache",
  shortTitle: "L’exportation de l’art malagasy",
  subtitle:
    `Comprendre les procédures, les contraintes et les leviers capables 
    d’améliorer la fluidité des exportations d’œuvres d’art malagasy.`,
  problematic:
    `Les faiblesses constatées dans les procédures administratives et
     douanières actuelles ralentissent-elles 
     la fluidité de l’exportation des oeuvres d’art malgaches ?`,
}

export const stats: StatItem[] = [
  { 
    value: '03', 
    label: 'Parties principales', 
    detail: 'Du terrain aux recommandations', 
    icon: Route 
  },
  { 
    value: '03', 
    label: 'Semaines de stage', 
    detail: 'Immersion chez 12 Entreprise', 
    icon: GraduationCap 
  },
  { 
    value: '01', 
    label: 'Problématique', 
    detail: 'Le fil directeur de l’étude', 
    icon: FileSearch 
  },
  { 
    value: 'FFOM', 
    label: 'Analyse stratégique', 
    detail: 'Forces, faiblesses, opportunités, menaces', 
    icon: ChartNoAxesCombined 
  },
]

export const parts = [
  {
    number: '01',
    eyebrow: 'Partie I',
    title: 'Méthodologie et recherche',
    description:
      `Présentation du cadre académique, de la société AUXIMAD, 
      du déroulement du stage et de la méthode de collecte des informations.`,
    icon: Landmark,
    accent: 'cyan',
  },
  {
    number: '02',
    eyebrow: 'Partie II',
    title: 'Résultats des recherches',
    description:
      'Transit, douane et analyse détaillée de la procédure d’exportation des œuvres d’art malagasy, de la préparation à l’expédition.',
    icon: Route,
    accent: 'gold',
  },
  {
    number: '03',
    eyebrow: 'Partie III',
    title: 'Discussion et recommandations',
    description:
      `Lecture FFOM des résultats, discussion des contraintes 
      rencontrées et recommandations pour améliorer la fluidité des opérations.`,
    icon: ShieldCheck,
    accent: 'coral',
  },
] satisfies [PartItem, ...PartItem[]]

export const features: FeatureItem[] = [
  {
    title: 'Mode soutenance',
    description: 'Une lecture plein écran, synthétique et rythmée pour présenter devant le jury.',
    icon: GraduationCap,
    link: 'Ouvrir le mode',
  },
  {
    title: 'Visualisations',
    description: 'Procédure d’exportation, acteurs, documents et FFOM transformés en schémas interactifs.',
    icon: ChartNoAxesCombined,
    link: 'Explorer',
  },
  {
    title: 'Lire le mémoire',
    description: 'Accéder au contenu académique complet sans perdre la navigation globale du projet.',
    icon: BookOpen,
    link: 'Commencer',
  },
  {
    title: 'Documents & annexes',
    description: 'Centraliser les tableaux, pièces, références et annexes utilisées dans le mémoire.',
    icon: FolderArchive,
    link: 'Consulter',
  },
]
