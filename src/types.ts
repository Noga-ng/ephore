import type { LucideIcon } from 'lucide-react'
import type { IconType } from 'react-icons'

export type AppIcon = LucideIcon | IconType
export interface ThesisInfo {
  student: string
  school: string
  program: string
  year: string
  title: string
  shortTitle: string
  subtitle: string
  problematic: string
}

export interface StatItem {
  value: string
  label: string
  detail: string
  icon: AppIcon
}

export type PartAccent = 'cyan' | 'gold' | 'coral'

export interface PartItem {
  number: string
  eyebrow: string
  title: string
  description: string
  icon: AppIcon
  accent: PartAccent
}

export interface FeatureItem {
  title: string
  description: string
  icon: AppIcon
  link: string
}

/* -------------------------------------------------------------------------- */
/*                              PRESENTATION                                  */
/* -------------------------------------------------------------------------- */

interface BaseSlide {
  id: string
  kicker: string
}

export interface PartiItem extends BaseSlide {
  type:'parti',
  head:string,
  title:string
}

interface NoteItem {
  title:string,
  subtitle:string
}

export interface ProgramSlide extends BaseSlide{
  type:"program",
  title:string,
  notes:NoteItem[]
}

/**
 * 1. Introduction
 */
export interface OpeningSlide extends BaseSlide {
  type: 'opening'

  // En-tête gauche
  school: {
    name: string
    subtitle: string
    logo: string
  }

  // En-tête droite
  company: {
    name: string
    subtitle: string
    logo: string
  }

  // Sujet
  theme: string
  title: string

  // Informations académiques
  presentedBy: string
  supervisor: string

  // Bas de slide
  sectionNumber: string
  sectionTitle: string

  // Images de la composition
  mainImage: string
  secondaryImage?: string
}

export interface ContextPoint{
  title:string,
  text:string,
  icon:AppIcon
}
export interface ContextSlide extends BaseSlide{
  type:"context",
  title:string,
  description:string,
  points:ContextPoint[]
}

/**
 * 2. Problématique
 */
export interface ProblematicSlide extends BaseSlide {
  type: 'problematic'
  title: string
  question: string
  chips: string[]
}

/**
 * 3. Objectifs
 */
export interface ObjectivesSlide extends BaseSlide {
  type: 'objectives'
  title: string
  mainObjective: string
  objectives: string[]
  icon: AppIcon
}

/**
 * 4. Stage
 */
export interface StageInfo {
  label: string
  value: string
  icon: AppIcon
}

export interface StageSlide extends BaseSlide {
  type: 'stage'
  company: string
  ecole:string
  description: string
  ecoleInfo:StageInfo[]
  StageInfos: StageInfo[]
  imageE:string
  imageI:string
}

/**
 * 5. Procédure en 3 phases
 */
export interface ProcedurePhase {
  number: string
  title: string
  description: string
  steps: string[]
  icon: AppIcon
}

export interface ProcedureIntroductionItem {
  title: string
  description: string
  icon: React.ElementType
}

export interface ProcedureSlide extends BaseSlide {
  type: 'procedure'
  title: string
  phases: ProcedurePhase[]
}
/**
 * 6. Analyse FFOM
 */
export interface FfomItem {
  title: string
  items: string[]
}

export interface FfomSlide extends BaseSlide {
  type: 'ffom'
  title: string
  strengths: FfomItem
  weaknesses: FfomItem
  opportunities: FfomItem
  threats: FfomItem
}

/**
 * 7. Recommandations
 */
export interface RecommendationItem {
  number: string
  title: string
  text: string
  icon: AppIcon
}

export interface RecommendationsSlide extends BaseSlide {
  type: 'recommendations'
  title: string
  recommendations: RecommendationItem[]
}

/**
 * 8. Conclusion
 */
export interface ConclusionSlide extends BaseSlide {
  type: 'conclusion'
  title: string
  summary: string
  image:{
    i1:string,
    i2:string,
    i3:string
  }
  note?: string
}

export interface Terminate extends BaseSlide{
  type:'terminate',
  title:string,
  footer:string
}

/**
 * Union principale des slides de soutenance.
 */
export type PresentationSlide =
    OpeningSlide
  | ProgramSlide
  | OpeningSlide
  | ContextSlide
  | ProblematicSlide
  | ObjectivesSlide
  | StageSlide
  | ProcedureSlide
  | FfomSlide
  | RecommendationsSlide
  | ConclusionSlide
  | Terminate

/* -------------------------------------------------------------------------- */
/*                              MEMOIRE                                       */
/* -------------------------------------------------------------------------- */

export type MemoirItemType =
  | 'bullet'
  | 'chapter'
  | 'intro-title'
  | 'paragraph'
  | 'section'
  | 'source'
  | 'subheading'

export interface MemoirItem {
  type: MemoirItemType
  text: string
}

export interface MemoirPart {
  id: string
  eyebrow: string
  title: string
  subtitle: string
  items: MemoirItem[]
}

export interface MemoirTable {
  title: string
  rows: string[][]
}

export interface MemoirContent {
  title: string
  subtitle: string
  institution: string
  problematic: string
  parts: MemoirPart[]
  tables: MemoirTable[]
}

