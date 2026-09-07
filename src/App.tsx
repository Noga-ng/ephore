import { useEffect, useState } from 'react'
import type { ReactElement } from 'react'
import type { Variants } from 'framer-motion'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Presentation,
  Ship,
  Sparkles,
} from 'lucide-react'
import { parts, thesis } from './homeData'
import Navbar from './components/Navigation/NavBar'
import HeroBackdrop from './components/Hero/HeroBackdrop'
import Stats from './components/Stats/Stats'
import SectionHeading from './components/Sections/SectionHeading'
import PartCard from './components/Parts/PartCard'
import FeatureGrid from './components/Includes/FeatureGrid'
import Footer from './components/Includes/Footer'
import SoutenanceMode from './components/Soutenance/SoutenanceMode'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function App():ReactElement {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(true)
  const [partIndex, setPartIndex] = useState(0)
  const [presentationOpen, setPresentationOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.45], [0, 130])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.25])
  const currentPart = parts[partIndex] ?? parts[0]

  useEffect(() => {
    document.documentElement.classList.toggle('light-theme', !dark)
  }, [dark])

  const scrollTo = (id: string): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <AnimatePresence>
        {presentationOpen && <SoutenanceMode onClose={() => setPresentationOpen(false)} />}
        </AnimatePresence>
      <div className="min-h-screen bg-[#f4f0e8] text-[#071827] selection:bg-[#d8a44b] selection:text-[#071827]">
      <motion.div
        className="fixed left-0 top-0 z-100 h-0.75 origin-left bg-[#d9a74f]"
        style={{ scaleX: scrollYProgress, width: '100%' }}
      />

      <Navbar
        dark={dark}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        setDark={setDark}
        scrollTo={scrollTo}
        openPresentation={() => setPresentationOpen(true)}
      />

      <main>
        <section id="accueil" className="relative min-h-230 overflow-hidden bg-[#06192b] text-white lg:min-h-screen">
          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0">
            <HeroBackdrop />
          </motion.div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,16,28,.98)_0%,rgba(4,16,28,.86)_39%,rgba(4,16,28,.42)_69%,rgba(4,16,28,.58)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-52 bg-linear-to-t from-[#06192b] to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-230 max-w-360 items-center px-6 pb-20 pt-32 lg:min-h-screen lg:px-12 xl:px-16">
            <div className="grid w-full items-center gap-14 lg:grid-cols-[1.12fr_.88fr]">
              <motion.div
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.12, delayChildren: 0.15 }}
                className="max-w-3xl"
              >
                <motion.div variants={fadeUp} 
                className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.28em] text-[#e2b663]">
                  <span className="h-px w-10 bg-[#e2b663]" />
                  Mémoire de fin d’études · {thesis.year}
                </motion.div>

                <motion.h1 variants={fadeUp} className="font-display text-[clamp(3.3rem,6.2vw,6.8rem)] leading-[.95] tracking-[-.045em]">
                  Étude de l’exportation
                  <span className="block text-[#f1ede5]">de l’art malagasy</span>
                </motion.h1>

                <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-base leading-8 text-white/68 md:text-lg">
                  {thesis.subtitle}
                </motion.p>

                <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
                  <button className="group inline-flex items-center gap-3 rounded-xl bg-[#e1b15c] 
                  px-5 py-4 text-sm font-bold text-[#071827] transition hover:-translate-y-1 hover:bg-[#edc578]" 
                  onClick={() => setPresentationOpen(true)}>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-[#071827]/10">
                    <Presentation size={18} />
                    </span>
                    <span className="text-left">Mode soutenance
                      <small className="mt-0.5 block font-medium opacity-65">Présentation synthétique</small>
                      </span>
                  </button>
                  <button className="inline-flex items-center gap-3 rounded-xl border border-white/25 
                  bg-white/4 px-5 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/9" 
                  onClick={() => scrollTo('parcours')}>
                    <BookOpen size={20} /> Lire le mémoire
                  </button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="relative lg:justify-self-end"
              >
                <div className="absolute -inset-10 rounded-full bg-[#d8a44b]/10 blur-3xl" />
                <div className="relative max-w-xl rounded-[28px] border border-white/10 bg-[#0b1b2b]/75 p-7 
                shadow-2xl shadow-black/30 backdrop-blur-xl md:p-9">
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.16em] text-white/75">
                    <span className="font-display text-4xl leading-none text-[#e4b55e]">“</span>
                    Problématique
                  </div>
                  <p className="mt-5 font-display text-[clamp(1.35rem,2vw,1.85rem)] leading-[1.55] text-[#f6f2e9]">
                    {thesis.problematic}
                  </p>
                  <button onClick={() => scrollTo('parcours')} 
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#e4b55e] transition hover:gap-4">
                    Comprendre l’étude <ArrowRight size={17} />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="relative z-20 mx-auto -mt-20 max-w-340 px-6 pb-8 lg:px-12">
            <Stats />
          </div>
        </section>

        <section id="parcours" className="relative overflow-hidden bg-[#f5f1e9] py-24 text-[#081a28] lg:py-32">
          <div className="mx-auto max-w-340 px-6 lg:px-12">

            <SectionHeading kicker="Explorer le contenu" title="Une navigation pensée comme un parcours" />

            <div className="mt-14 hidden grid-cols-3 gap-6 lg:grid">
              {parts.map((part, index) => 
              <PartCard 
              key={part.number} 
              part={part} 
              index={index} />
              )}
            </div>

            <div className="relative mt-12 lg:hidden">
              <AnimatePresence mode="wait">
                <motion.div 
                key={partIndex} 
                initial={{ opacity: 0, x: 40 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: -40 }}>
                  <PartCard part={currentPart} index={partIndex} />
                </motion.div>
              </AnimatePresence>
              <div className="mt-5 flex items-center justify-between">
                <button className="round-control" 
                onClick={() => setPartIndex((partIndex - 1 + parts.length) % parts.length)} aria-label="Partie précédente">
                  <ChevronLeft />
                  </button>
                <div className="flex gap-2">
                  {parts.map((_, i) => 
                  <span key={i} className={`h-2 rounded-full transition-all 
                  ${i === partIndex ? 'w-8 bg-[#b67b2d]' : 'w-2 bg-[#c9c1b5]'}`} />)}
                  </div>
                <button className="round-control" 
                onClick={() => setPartIndex((partIndex + 1) % parts.length)} 
                aria-label="Partie suivante"><ChevronRight /></button>
              </div>
            </div>
          </div>
        </section>

        <section id="analyse" className="relative overflow-hidden bg-[#06192b] py-24 text-white lg:py-28">
          <div className="pointer-events-none absolute inset-0 opacity-30 
          bg-[radial-gradient(circle_at_15%_20%,#1f8791_0,transparent_20%),radial-gradient(circle_at_82%_60%,#a66f35_0,transparent_22%)]" />
          <div className="relative mx-auto grid max-w-340 gap-16 px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-12">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10
               bg-white/4 px-4 py-2 text-xs uppercase tracking-[.2em] text-[#e0b15f]">
              <Sparkles size={15}/> Expérience interactive
              </div>
              <h2 className="mt-7 font-display text-5xl leading-[1.05] tracking-[-.035em] md:text-6xl">
                Le mémoire devient une démonstration visuelle.</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/62">
              Chaque élément important pourra être transformé en composant pédagogique :
               circuit d’exportation animé, dossier documentaire, matrice FFOM, chronogramme du 
               stage et recommandations hiérarchisées.
               </p>
            </motion.div>

            <FeatureGrid />

          </div>
        </section>

        <section id="recommandations" className="bg-[#efe8dd] py-24 text-[#081a28] lg:py-28">
          <div className="mx-auto max-w-340 px-6 lg:px-12">
            <div className="grid overflow-hidden rounded-[34px] 
            border border-[#172b38]/10 bg-[#f8f5ef] shadow-[0_30px_80px_rgba(26,24,18,.08)] lg:grid-cols-[1.12fr_.88fr]">
              <div className="p-8 md:p-12 lg:p-16">
                <span className="text-xs font-bold uppercase tracking-[.22em] text-[#a56d28]">Vision du projet</span>
                <blockquote className="mt-6 font-display text-4xl leading-[1.22] tracking-tight md:text-5xl">
                  « Valoriser le patrimoine, structurer les pratiques et fluidifier l’accès au marché international. »
                  </blockquote>
                <div className="mt-8 flex items-center gap-4 border-t border-[#172b38]/10 pt-7">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-[#071827] text-[#e2b25f]"><Ship size={20}/></div>
                  <div><strong className="block text-sm">{thesis.student}</strong>
                  <span className="text-sm text-[#55616a]">{thesis.program} · {thesis.year}</span>
                  </div>
                </div>
              </div>
              <div className="relative min-h-95 overflow-hidden bg-[#0a2632]">
                <div className="absolute inset-0 opacity-40 
                bg-[linear-gradient(120deg,transparent_0_48%,rgba(229,179,92,.38)_49%_50%,transparent_51%_100%),
                linear-gradient(30deg,transparent_0_48%,rgba(47,146,153,.35)_49%_50%,transparent_51%_100%)] 
                bg-size-[84px_84px]" />
                <div className="absolute inset-0 bg-linear-to-tr from-[#06192b] via-transparent to-[#b7782f]/20" />
                <div className="absolute bottom-9 left-9 right-9 rounded-2xl border border-white/10
                 bg-black/20 p-6 text-white backdrop-blur-md">
                  <span className="text-xs uppercase tracking-[.2em] text-[#e3b35d]">Prochaine étape</span>
                  <p className="mt-2 text-lg font-semibold">Construire le mode soutenance chapitre par chapitre.</p>
                  <button className="mt-5 inline-flex items-center gap-2 
                  text-sm text-white/70 hover:text-white">Continuer <ArrowRight size={16}/></button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      </div>
    </>
  )
}







