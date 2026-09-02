import type { LucideIcon } from 'lucide-react'

export type AppIcon = LucideIcon

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

interface BaseSlide {
  id: string
  kicker: string
}

export interface OpeningSlide extends BaseSlide {
  type: 'opening'
  title: string
  subtitle: string
  note: string
}

export interface ContextCard {
  title: string
  text: string
  icon: AppIcon
}

export interface ContextSlide extends BaseSlide {
  type: 'context'
  title: string
  body: string
  cards: ContextCard[]
}

export interface ProblematicSlide extends BaseSlide {
  type: 'problematic'
  title: string
  chips: string[]
}

export interface ObjectivesSlide extends BaseSlide {
  type: 'objectives'
  title: string
  mainObjective: string
  objectives: string[]
  icon: AppIcon
}

export interface HypothesisItem {
  number: string
  title: string
  text: string
}

export interface HypothesesSlide extends BaseSlide {
  type: 'hypotheses'
  title: string
  hypotheses: HypothesisItem[]
}

export interface MethodStep {
  number: string
  title: string
  text: string
  icon: AppIcon
}

export interface MethodSlide extends BaseSlide {
  type: 'method'
  title: string
  steps: MethodStep[]
}

export type PresentationSlide =
  | OpeningSlide
  | ContextSlide
  | ProblematicSlide
  | ObjectivesSlide
  | HypothesesSlide
  | MethodSlide

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
