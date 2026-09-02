import {
  Building2,
  ClipboardCheck,
  FileText,
  Globe2,
  Layers3,
  Lightbulb,
  Network,
  ShieldCheck,
  Target,
} from 'lucide-react'
import type { PresentationSlide } from './types'

export const presentationSlides = [
  {
    id: 'opening',
    type: 'opening',
    kicker: 'Mémoire de fin d’études',
    title: 'Analyse de la procédure d’exportation de l’art malgache',
    subtitle: 'Transit & Douane · Toamasina · 2026',
    note: 'Une présentation interactive qui va à l’essentiel sans perdre la rigueur académique.',
  },
  {
    id: 'context',
    type: 'context',
    kicker: '01 · Contexte',
    title: 'Exporter une œuvre d’art ne se résume pas à expédier une marchandise.',
    body:
      `L’opération se situe au croisement du commerce international, des formalités douanières, 
      de la logistique et de la protection du patrimoine culturel et des ressources naturelles.`,
    cards: [
      { title: 'Patrimoine', text: 'Préserver les biens culturels et contrôler leur sortie.', icon: ShieldCheck },
      { title: 'Douane', text: 'Sécuriser la déclaration et la conformité documentaire.', icon: ClipboardCheck },
      { title: 'Logistique', text: 'Coordonner transport, délais, coûts et intervenants.', icon: Network },
      { title: 'Marché', text: 'Faciliter l’accès des créations malagasy à l’international.', icon: Globe2 },
    ],
  },
  {
    id: 'problematic',
    type: 'problematic',
    kicker: '02 · Problématique',
    title:
      `Les faiblesses constatées dans les procédures administratives et
       douanières actuelles ralentissent-elles la fluidité de l’exportation des oeuvres d’art malgaches ?`,
    chips: ['Formalités', 'Coordination', 'Délais', 'Conformité', 'Fluidité'],
  },
  {
    id: 'objectives',
    type: 'objectives',
    kicker: '03 · Objectifs',
    title: 'Comprendre le circuit pour identifier où agir.',
    mainObjective:
      `Analyser la procédure d’exportation des œuvres d’art malgaches afin d’en comprendre 
      le fonctionnement et d’identifier les principales contraintes administratives, douanières et logistiques.`,
    objectives: [
      'Décrire les principales étapes de la procédure.',
      'Identifier les acteurs et leurs rôles.',
      'Présenter les documents et autorisations nécessaires.',
      'Relever les principales difficultés rencontrées.',
      'Proposer des pistes d’amélioration.',
    ],
    icon: Target,
  },
  {
    id: 'hypotheses',
    type: 'hypotheses',
    kicker: '04 · Hypothèses',
    title: 'Deux idées guident l’analyse.',
    hypotheses: [
      {
        number: 'H1',
        title: 'Le contrôle sécurise, mais peut ralentir.',
        text: 'Les procédures administratives et douanières sécurisent l’exportation, mais la multiplicité des formalités et des intervenants peut ralentir les opérations.',
      },
      {
        number: 'H2',
        title: 'Coordonner et digitaliser peut fluidifier.',
        text: `Une meilleure coordination, la simplification des démarches et un guichet 
        unique peuvent réduire les délais de traitement et améliorer la fluidité des exportations.`,
      },
    ],
  },
  {
    id: 'method',
    type: 'method',
    kicker: '05 · Démarche',
    title: 'Une étude ancrée dans le terrain.',
    steps: [
      { number: '01', title: 'Observation', text: 'Stage au sein de l’agence AUXIMAD de Toamasina.', icon: Building2 },
      { number: '02', title: 'Documents', text: 'Analyse des pièces et supports professionnels.', icon: FileText },
      { number: '03', title: 'Recherche', text: 'Documentation sur transit, douane et exportation.', icon: Lightbulb },
      { number: '04', title: 'Analyse', text: 'Mise en relation des constats puis lecture FFOM.', icon: Layers3 },
    ],
  },
] satisfies [PresentationSlide, ...PresentationSlide[]]
