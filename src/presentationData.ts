import {
  Building2,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Globe2,
  Handshake,
  Lightbulb,
  Network,
  Ship,
  ShieldCheck,
  Target,
  Users,
  Clock,
} from 'lucide-react'

import type { PresentationSlide } from './types'
import e12 from "./assets/images/E12 GROUP LOGISTICS .jpg"
import { FaLocationDot } from 'react-icons/fa6'
export const presentationSlides = [
  /* ---------------------------------------------------------------------- */
  /* 1. INTRODUCTION                                                        */
  /* ---------------------------------------------------------------------- */
  {
    id: 'opening',
    type: 'opening',
    kicker: '01 · Introduction',
    title: 'Analyse de la procédure d’exportation de l’art malgache',
    subtitle: 'Transit & Douane · Toamasina · 2026',
    note:
      `Une étude consacrée aux procédures, aux contraintes et aux possibilités 
      d’amélioration de l’exportation des œuvres d’art malgaches.`,
  },

  /* ---------------------------------------------------------------------- */
  /* 2. PROBLÉMATIQUE                                                       */
  /* ---------------------------------------------------------------------- */
  {
    id: 'problematic',
    type: 'problematic',
    kicker: '02 · Problématique',
    title: 'Les faiblesses constatées dans les procédures administratives et douanières actuelles ralentissent-elles la fluidité de l’exportation des œuvres d’art malgaches ?',
    question:
      'Comment les procédures administratives, douanières et logistiques influencent-elles la fluidité de l’exportation des œuvres d’art malgaches ?',
    chips: [
      'Formalités',
      'Coordination',
      'Délais',
      'Conformité',
      'Logistique',
      'Fluidité',
    ],
  },

  /* ---------------------------------------------------------------------- */
  /* 3. OBJECTIFS                                                           */
  /* ---------------------------------------------------------------------- */
  {
    id: 'objectives',
    type: 'objectives',
    kicker: '03 · Objectifs',
    title: 'Comprendre le circuit pour identifier où agir.',
    mainObjective:
      'Analyser la procédure d’exportation des œuvres d’art malgaches afin d’en comprendre le fonctionnement et d’identifier les principales contraintes administratives, douanières et logistiques.',
    objectives: [
      'Décrire les principales étapes de la procédure d’exportation.',
      'Identifier les différents acteurs et leurs rôles.',
      'Présenter les documents et autorisations nécessaires.',
      'Relever les principales difficultés rencontrées.',
      'Proposer des pistes d’amélioration.',
    ],
    icon: Target,
  },

  /* ---------------------------------------------------------------------- */
  /* 4. STAGE                                                               */
  /* ---------------------------------------------------------------------- */
  {
    id: 'stage',
    type: 'stage',
    kicker: '04 · Stage',
    title: 'Une étude réalisée au contact du terrain professionnel.',
    company: 'E-12 Entreprise',
    location: 'Antananarivo',
    duration: '03 semaines',
    image:e12,
    description:
      `Le stage a permis d’observer concrètement les 
      opérations liées au transit, aux formalités douanières et à l’exportation, 
      tout en recueillant les informations nécessaires à l’analyse.`,
    activities: [
      'Observation des pratiques professionnelles.',
      'Analyse des documents et pièces utilisés dans les opérations.',
      'Recherche d’informations sur les procédures de transit et de douane.',
      'Identification des difficultés et contraintes rencontrées.',
    ],
    infos: [
      {
        label: 'Structure d’accueil',
        value: 'E-12 Entreprise',
        icon: Building2,
      },
      {
        label: 'Lieu',
        value: 'Antananarivo',
        icon: FaLocationDot,
      },
      {
        label: 'Durée',
        value: '03 semaines',
        icon: Clock,
      },
      {
        label: 'Domaine',
        value: 'Transit & Douane',
        icon: FileText,
      },
    ],
  },

  /* ---------------------------------------------------------------------- */
  /* 5. PROCÉDURE EN 3 PHASES                                               */
  /* ---------------------------------------------------------------------- */
  {
    id: 'procedure',
    type: 'procedure',
    kicker: '05 · Procédure',
    title: 'Une procédure structurée autour de trois grandes phases.',
    phases: [
      {
        number: '01',
        title: 'Phase administrative et ministérielle',
        description:
          'Préparer et obtenir les documents ainsi que les autorisations nécessaires avant l’exportation.',
        steps: [
          'Identification de l’œuvre et vérification de sa nature.',
          'Préparation des documents administratifs.',
          'Obtention des autorisations nécessaires.',
          'Constitution du dossier d’exportation.',
        ],
        icon: ClipboardCheck,
      },
      {
        number: '02',
        title: 'Phase logistique et douanière',
        description:
          'Organiser l’acheminement de l’œuvre et accomplir les formalités douanières.',
        steps: [
          'Préparation et conditionnement de l’œuvre.',
          'Organisation du transport et de la logistique.',
          'Déclaration auprès de la douane.',
          'Contrôle et validation des formalités.',
        ],
        icon: ShieldCheck,
      },
      {
        number: '03',
        title: 'Phase maritime ou aérienne',
        description:
          'Assurer l’expédition internationale de l’œuvre jusqu’à sa destination finale.',
        steps: [
          'Réservation du transport international.',
          'Remise de la marchandise au transporteur.',
          'Expédition par voie maritime ou aérienne.',
          'Suivi de l’acheminement jusqu’à destination.',
        ],
        icon: Ship,
      },
    ],
  },

  /* ---------------------------------------------------------------------- */
  /* 6. FFOM                                                                */
  /* ---------------------------------------------------------------------- */
  {
    id: 'ffom',
    type: 'ffom',
    kicker: '06 · Analyse FFOM',
    title: 'Les principaux facteurs qui influencent l’exportation.',
    strengths: {
      title: 'Forces',
      items: [
        'Richesse et diversité du patrimoine artistique malgache.',
        'Savoir-faire des artisans et créateurs locaux.',
        'Potentiel d’attractivité sur le marché international.',
      ],
    },
    weaknesses: {
      title: 'Faiblesses',
      items: [
        'Complexité de certaines formalités administratives.',
        'Multiplicité des intervenants.',
        'Délais et coûts pouvant ralentir les opérations.',
        'Difficultés logistiques.',
      ],
    },
    opportunities: {
      title: 'Opportunités',
      items: [
        'Développement du commerce international des œuvres malgaches.',
        'Digitalisation des procédures administratives.',
        'Amélioration de la coordination entre les acteurs.',
        'Promotion de l’art malgache à l’international.',
      ],
    },
    threats: {
      title: 'Menaces',
      items: [
        'Concurrence des autres pays exportateurs.',
        'Risque de perte de compétitivité lié aux coûts et aux délais.',
        'Risques liés à la protection du patrimoine culturel.',
      ],
    },
  },

  /* ---------------------------------------------------------------------- */
  /* 7. RECOMMANDATIONS                                                     */
  /* ---------------------------------------------------------------------- */
  {
    id: 'recommendations',
    type: 'recommendations',
    kicker: '07 · Recommandations',
    title: 'Agir sur la procédure pour rendre l’exportation plus fluide.',
    recommendations: [
      {
        number: '01',
        title: 'Simplifier les démarches',
        text:
          'Réduire les formalités redondantes et faciliter la constitution des dossiers d’exportation.',
        icon: FileCheck2,
      },
      {
        number: '02',
        title: 'Digitaliser les procédures',
        text:
          'Développer davantage les démarches numériques et favoriser un système de guichet unique.',
        icon: Lightbulb,
      },
      {
        number: '03',
        title: 'Renforcer la coordination',
        text:
          'Améliorer les échanges entre exportateurs, transitaires, douanes, administrations et transporteurs.',
        icon: Handshake,
      },
      {
        number: '04',
        title: 'Améliorer la logistique',
        text:
          'Optimiser le conditionnement, le transport et le suivi des œuvres afin de réduire les délais et les coûts.',
        icon: Network,
      },
      {
        number: '05',
        title: 'Former et informer',
        text:
          'Renforcer les connaissances des acteurs sur les exigences administratives, douanières et réglementaires.',
        icon: Users,
      },
      {
        number: '06',
        title: 'Promouvoir l’art malgache',
        text:
          'Valoriser les œuvres et les créateurs malgaches afin de renforcer leur visibilité et leur compétitivité internationale.',
        icon: Globe2,
      },
    ],
  },

  /* ---------------------------------------------------------------------- */
  /* 8. CONCLUSION                                                          */
  /* ---------------------------------------------------------------------- */
  {
    id: 'conclusion',
    type: 'conclusion',
    kicker: '08 · Conclusion',
    title: 'Une procédure à sécuriser, mais aussi à fluidifier.',
    summary:
      'L’exportation des œuvres d’art malgaches représente un potentiel important pour la valorisation du patrimoine et le développement économique. Cependant, les contraintes administratives, douanières, logistiques et les délais peuvent limiter cette dynamique.',
    keyPoints: [
      'La procédure d’exportation implique plusieurs acteurs et plusieurs étapes.',
      'Les formalités et la coordination peuvent générer des délais supplémentaires.',
      'La digitalisation et la simplification peuvent améliorer la fluidité.',
      'Une meilleure organisation logistique peut réduire les coûts et les délais.',
      'La promotion de l’art malgache peut renforcer sa présence sur le marché international.',
    ],
    note:
      'L’amélioration de la procédure passe donc par la simplification, la digitalisation, la coordination des acteurs et la valorisation du patrimoine artistique malgache.',
  },
] satisfies [PresentationSlide, ...PresentationSlide[]]

