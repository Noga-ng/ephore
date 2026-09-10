import {
  Building2,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  Handshake,
  Lightbulb,
  Network,
  Ship,
  ShieldCheck,
  Target,
  Users,
} from 'lucide-react'

import type { PresentationSlide } from './types'
import e12 from "./assets/images/E12 GROUP LOGISTICS .jpg"
import { FaLocationDot } from 'react-icons/fa6'
import art6 from "./assets/images/art6.jpg"
import port2 from "./assets/images/port2.jpg"
import icg from "./assets/images/icg.jpg"
import { BsQuestion } from 'react-icons/bs'
import art9 from './assets/images/art9.jpg'
import art8 from './assets/images/art8.jpg'
import art7 from './assets/images/art7.jpg'


export const presentationSlides = [
  /* ---------------------------------------------------------------------- */
  /* 1. INTRODUCTION                                                        */
  /* ---------------------------------------------------------------------- */

 {
  id:"opening",
  type: 'opening',
  kicker:"Introduction",
  school: {
    name: 'ICG',
    subtitle: 'Instituts de Commerce et Gestion',
    logo: icg,
  },

  company: {
    name: 'E-12 Entreprise',
    subtitle: 'Import & Export',
    logo: e12,
  },

  theme: 'thème',

  title: "Analyse de la procédure d’exportation de l’art malagasy",

  presentedBy: 'Mademoiselle MIASA Ephore Exthélène',

  supervisor: 'Mr RANDRIANARISON Thierry Olivier',

  sectionNumber: '01',

  sectionTitle: 'Introduction',

  mainImage: art6,

  secondaryImage: port2,
},
  /**
   * -----------------------------------------------------------------------
   * 2.CONTEXT
   * -----------------------------------------------------------------------
   */
{
  id: 'context',
  type: 'context',
  kicker: 'Contexte & Problématique',
  title: 'Un patrimoine artistique riche, mais une exportation encadrée.',
  description:
    `Madagascar possède un patrimoine artistique et artisanal riche et diversifié,
    représenté notamment par les sculptures, peintures, objets artisanaux,
    œuvres traditionnelles et créations issues du savoir-faire local.`,
  points: [
    {
      title: 'Problématique',
      text:
        `Les faiblesses constatées dans les procédures administratives et douanières 
          actuelles ralentissent-elles la fluidité de l’exportation des œuvres d’art malgaches ?`,
      icon: BsQuestion,
    }
  ],
},

  /* ---------------------------------------------------------------------- */
  /* 4. OBJECTIFS                                                           */
  /* ---------------------------------------------------------------------- */
  {
    id: 'objectives',
    type: 'objectives',
    kicker: 'Objectifs',
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

  /**
   * =====================================================
   * Annonce du Plan
   * =====================================================
   */
  {
  id: "program",
  type: "program",
  kicker: "PLAN DE PRÉSENTATION",
  title: "Structure de la présentation",
  notes: [
    {
      title: "Partie I — Méthodologie et Recherche",
      subtitle: "Présentation de l’ICG et de l’entreprise d’accueil."
    },
    {
      title: "Partie II — Résultats des Recherches",
      subtitle: "Transit, douane et analyse de la procédure d’exportation des œuvres d’art malagasy."
    },
    {
      title: "Partie III — Discussion et Recommandations",
      subtitle: "Analyse FFOM et recommandations pour améliorer la procédure."
    }
  ]
},

  /* ---------------------------------------------------------------------- */
  /* 5. STAGE                                                               */
  /* ---------------------------------------------------------------------- */
  {
  id: 'stage',
  type: 'stage',
  kicker: 'Partie I · Présentation de l’ICG & contenu du stage',
  company: 'E-12 Entreprise',
  ecole:"Institus de Commerce & Gestion",
  imageE: e12,
  imageI:icg,
  description:
    `La formation en Transit et Douane à l’ICG a été complétée par une expérience de terrain au sein de E-12 Entreprise, permettant d’observer concrètement les opérations de transit, les formalités douanières et le suivi des dossiers d’importation et d’exportation.`,

  StageInfos: [
    {
      label: 'Entreprise',
      value: 'E-12 Entreprise',
      icon: Building2,
    },
    {
      label: 'Lieu du stage',
      value: 'Antananarivo',
      icon: FaLocationDot,
    }
  ],

   ecoleInfo: [
    {
      label: 'Établissement',
      value: 'Institut de Commerce et de Gestion (ICG)',
      icon: Building2,
    },
    {
      label: 'Lieu',
      value: 'Tanambo V, Toamasina',
      icon: FaLocationDot,
    }
  ],
},

  /* ---------------------------------------------------------------------- */
  /* 6. PROCÉDURE EN 3 PHASES                                               */
  /* ---------------------------------------------------------------------- */
 {
  id: 'procedure',
  type: 'procedure',
  kicker: 'Partie II · Résultats de recherche',
  title: 'Transit, douane et procédure d’exportation des œuvres d’art malagasy.',
  phases: [
    {
      number: '01',
      title: 'Transit',
      description:
        'Facilite l’acheminement des marchandises sous contrôle douanier et assure le suivi des opérations.',

      steps: [
        ''
      ],

      icon: ClipboardCheck,
    },

    {
      number: '02',
      title: 'Douane',
      description:
      'Contrôle les marchandises et les documents et veille au respect de la réglementation douanière.',

      steps: [
      ''
      ],

      icon: ShieldCheck,
    },

    {
      number: '03',
      title: 'procédure d’exportation des œuvres d’art malagasy',
      description:
        'Ensemble des étapes administratives, douanières et logistiques permettant l’exportation de l’œuvre.',

      steps: [
      ''
      ],

      icon: Ship,
    },
  ],
},
  /* ---------------------------------------------------------------------- */
  /* 7. FFOM                                                                */
  /* ---------------------------------------------------------------------- */
  {
    id: 'ffom',
    type: 'ffom',
    kicker: 'Partie III · Discussion & Recommendation',
    title: `
     L’analyse FFOM
    `,
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
  /* 8. RECOMMANDATIONS                                                     */
  /* ---------------------------------------------------------------------- */
  {
    id: 'recommendations',
    type: 'recommendations',
    kicker: 'Partie III · Discussion & Recommendation',
    title: 'Recommendation',
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
  /* 9. CONCLUSION                                                          */
  /* ---------------------------------------------------------------------- */
  {
    id: 'conclusion',
    type: 'conclusion',
    kicker: 'Conclusion',
    title: 'Une procédure à sécuriser, mais aussi à fluidifier.',
    summary:
      'L’exportation des œuvres d’art malgaches représente un potentiel important pour la valorisation du patrimoine et le développement économique. Cependant, les contraintes administratives, douanières, logistiques et les délais peuvent limiter cette dynamique.',
    image:{
      i1:art9,
      i2:art8,
      i3:art7
    },
    note:
      `L’amélioration de la procédure passe donc par la simplification, 
      la digitalisation, la coordination des acteurs et la valorisation du patrimoine artistique malgache.`,
  },

  /**
   * -------------------------------------------------------------------------------------------
   * FIN DE LA PRESENTATION
   * -------------------------------------------------------------------------------------------
   */

  {
  id: 'terminate',
  type: 'terminate',
  kicker: 'FIN DE LA PRÉSENTATION',
  title: 'MERCI POUR VOTRE ATTENTION',
  footer:
    'Je vous remercie pour votre attention et reste à votre disposition pour répondre à vos éventuelles questions.',
  },
] satisfies [PresentationSlide, ...PresentationSlide[]]


// [
//       'La procédure d’exportation implique plusieurs acteurs et plusieurs étapes.',
//       'Les formalités et la coordination peuvent générer des délais supplémentaires.',
//       'La digitalisation et la simplification peuvent améliorer la fluidité.',
//       'Une meilleure organisation logistique peut réduire les coûts et les délais.',
//       'La promotion de l’art malgache peut renforcer sa présence sur le marché international.',
//     ]