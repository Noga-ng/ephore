import { useCallback, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  X,
} from 'lucide-react'
import { presentationSlides } from '../presentationData'
import type {
  ContextCard,
  ContextSlide,
  HypothesesSlide,
  MethodSlide,
  ObjectivesSlide,
  OpeningSlide,
  PresentationSlide,
  ProblematicSlide,
} from '../types'

const slideVariants = {
  enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 90 : -90, scale: 0.985 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (direction: number) => ({ opacity: 0, x: direction > 0 ? -90 : 90, scale: 0.985 }),
}

interface SoutenanceModeProps {
  onClose: () => void
}

export default function SoutenanceMode({ onClose }: SoutenanceModeProps) {
  const [[index, direction], setPage] = useState<[number, number]>([0, 0])
  const [fullscreen, setFullscreen] = useState(Boolean(document.fullscreenElement))
  const slide = presentationSlides[index] ?? presentationSlides[0]
  const progress = ((index + 1) / presentationSlides.length) * 100

  const go = useCallback(
    (next: number): void => {
      if (next < 0 || next >= presentationSlides.length) return

      setPage(([currentIndex]) => [
        next,
        next > currentIndex ? 1 : next < currentIndex ? -1 : 0,
      ])
    },
    [],
  )

  useEffect(() => {
    const onKey = (event: KeyboardEvent): void => {
      if (['ArrowRight', 'PageDown', ' '].includes(event.key)) {
        event.preventDefault()
        go(Math.min(index + 1, presentationSlides.length - 1))
      }

      if (['ArrowLeft', 'PageUp'].includes(event.key)) {
        event.preventDefault()
        go(Math.max(index - 1, 0))
      }

      if (event.key === 'Escape' && !document.fullscreenElement) {
        onClose()
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, index, onClose])

  useEffect(() => {
    const onFullscreen = (): void => setFullscreen(Boolean(document.fullscreenElement))
    document.addEventListener('fullscreenchange', onFullscreen)
    return () => document.removeEventListener('fullscreenchange', onFullscreen)
  }, [])

  const toggleFullscreen = async (): Promise<void> => {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen?.()
    else await document.exitFullscreen?.()
  }

  return (
    <div className="fixed inset-0 z-200 overflow-hidden bg-[#041521] text-white">
      <div className="pointer-events-none absolute inset-0 
      bg-[radial-gradient(circle_at_75%_20%,rgba(210,157,72,.18),transparent_28%)
      ,radial-gradient(circle_at_10%_80%,rgba(22,120,132,.18),transparent_24%)]" />
      <div className="absolute left-0 top-0 h-1 bg-[#d7a34c] transition-[width] duration-500" 
      style={{ width: `${progress}%` }} />

      <header className="absolute inset-x-0 top-0 z-30 flex h-20 items-center justify-between px-5 md:px-10">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="presentation-control" aria-label="Quitter la soutenance"><X size={19} /></button>
          <div className="hidden sm:block">
            <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#d7a34c]">Mode soutenance</p>
            <p className="mt-1 text-xs text-white/45">Présentation synthétique</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="mr-1 text-xs tabular-nums text-white/45">
            {String(index + 1).padStart(2, '0')} / {String(presentationSlides.length).padStart(2, '0')}
          </span>
          <button onClick={toggleFullscreen} className="presentation-control" aria-label="Plein écran">
            {fullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
          </button>
        </div>
      </header>

      <main className="relative z-10 h-full pt-20 pb-24">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.section
            key={slide.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: .52, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto flex h-full max-w-360 items-center px-6 md:px-12 lg:px-20"
          >
            <SlideContent slide={slide} />
          </motion.section>
        </AnimatePresence>
      </main>

      <footer className="absolute inset-x-0 bottom-0 z-30 flex h-24 items-center justify-between px-5 md:px-10">
        <div className="hidden items-center gap-2 md:flex">
          {presentationSlides.map((item, itemIndex) => (
            <button
              key={item.id}
              onClick={() => go(itemIndex)}
              className={`h-1.5 rounded-full transition-all 
                ${itemIndex === index ? 'w-10 bg-[#d7a34c]' : 'w-3 bg-white/16 hover:bg-white/35'}`}
              aria-label={`Aller à la diapositive ${itemIndex + 1}`}
            />
          ))}
        </div>
        <div className="ml-auto flex gap-2">
          <button disabled={index === 0} onClick={() => go(index - 1)} className="presentation-nav disabled:opacity-25">
            <ChevronLeft size={21} />
          <span className="hidden sm:inline">Précédent</span>
          </button>
          <button disabled={index === presentationSlides.length - 1} onClick={() => go(index + 1)} className="presentation-nav presentation-nav-primary disabled:opacity-25">
            <span className="hidden sm:inline">Suivant</span>
            <ChevronRight size={21} /></button>
        </div>
      </footer>
    </div>
  )
}

function SlideContent({ slide }: { slide: PresentationSlide }) {
  switch (slide.type) {
    case 'opening':
      return <Opening slide={slide} />
    case 'context':
      return <Context slide={slide} />
    case 'problematic':
      return <Problematic slide={slide} />
    case 'objectives':
      return <Objectives slide={slide} />
    case 'hypotheses':
      return <Hypotheses slide={slide} />
    case 'method':
      return <Method slide={slide} />
  }
}

function Kicker({ children }: { children: ReactNode }) {
  return <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[.25em] text-[#d7a34c]">
    <span className="h-px w-10 bg-[#d7a34c]" />{children}
    </p>
}

function Opening({ slide }: { slide: OpeningSlide }) {
  return (
    <div className="relative w-full">
      <div className="absolute -left-16 -top-24 hidden h-64 w-64 rounded-full border border-[#d7a34c]/15 lg:block" />
      <Kicker>{slide.kicker}</Kicker>
      <motion.h1 
      initial={{ opacity: 0, y: 35 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ delay: .12 }} 
      className="max-w-6xl font-display text-[clamp(3.2rem,7vw,7.4rem)] leading-[.94] tracking-tighter"
      >
        Analyse de la procédure
        <span className="block text-[#e3b660]">d’exportation</span>
        de l’art malgache
      </motion.h1>
      <div className="mt-10 flex flex-col gap-5 border-t border-white/12 pt-7 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold">{slide.subtitle}</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-white/45">{slide.note}</p>
          </div>
        <div className="flex items-center gap-3 text-xs text-white/40">
        <ArrowLeft size={15} /> Utilise les flèches du clavier <ArrowRight size={15} />
        </div>
      </div>
    </div>
  )
}

function Context({ slide }: { slide: ContextSlide }) {
  return (
    <div className="w-full">
      <Kicker>{slide.kicker}</Kicker>
      <div className="grid gap-10 lg:grid-cols-[1.04fr_.96fr] lg:items-end">
        <div>
          <h2 className="max-w-4xl font-display text-[clamp(2.8rem,5vw,5.6rem)] 
          leading-none tracking-[-.04em]">{slide.title}</h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/55 md:text-lg">{slide.body}</p>
          </div>
        <div className="grid grid-cols-2 gap-3">{
        slide.cards.map((card, i) => 
        <InfoCard 
        key={card.title} 
        card={card} 
        index={i} />)}
        </div>
      </div>
    </div>
  )
}

function InfoCard({ card, index }: { card: ContextCard; index: number }) {
  const Icon = card.icon
  return <motion.div 
  initial={{ opacity: 0, y: 20 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ delay: .12 + index * .08 }} 
  className="rounded-2xl border border-white/10 bg-white/4.5 p-5 backdrop-blur-md md:p-6">
    <div className="mb-8 grid h-10 w-10 place-items-center 
    rounded-xl bg-[#d7a34c]/12 text-[#e0b15d]">
      <Icon size={19} />
      </div>
      <h3 className="font-display text-2xl">{card.title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/45">{card.text}</p>
      </motion.div>
}

function Problematic({ slide }: { slide: ProblematicSlide }) {
  return (
    <div className="mx-auto w-full max-w-6xl text-center">
      <Kicker>{slide.kicker}</Kicker>
      <div className="mx-auto mt-6 grid h-16 w-16 place-items-center rounded-full 
      border border-[#d7a34c]/25 bg-[#d7a34c]/10 font-display text-4xl text-[#e0b15d]">?</div>
      <h2 className="mx-auto mt-8 font-display 
      text-[clamp(2.2rem,4.5vw,5rem)] leading-[1.12] tracking-[-.035em]">{slide.title}</h2>
      <div className="mt-10 flex flex-wrap justify-center gap-2">{
      slide.chips.map((chip, i) => 
      <motion.span 
      key={chip} 
      initial={{ opacity: 0, scale: .9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ delay: .18 + i * .07 }} 
      className="rounded-full border border-white/10 bg-white/4 
      px-4 py-2 text-xs text-white/60">{chip}</motion.span>)}
      </div>
    </div>
  )
}

function Objectives({ slide }: { slide: ObjectivesSlide }) {
  const Icon = slide.icon
  return (
    <div className="w-full">
      <Kicker>{slide.kicker}</Kicker>
      <div className="grid gap-10 lg:grid-cols-[.92fr_1.08fr]">
        <div>
          <h2 className="font-display text-[clamp(3rem,5vw,5.6rem)] leading-[.98] tracking-[-.04em]">{slide.title}</h2>
          <div className="mt-8 rounded-2xl border border-[#d7a34c]/25 bg-[#d7a34c]/8 p-6">
          <div className="flex gap-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#d7a34c] text-[#071827]">
              <Icon size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#d7a34c]">Objectif général</p>
                <p className="mt-2 text-sm leading-7 text-white/68">{slide.mainObjective}</p>
                </div>
              </div>
            </div>
         </div>
        <div className="space-y-3">{
        slide.objectives.map((item, i) => 
        <motion.div 
        key={item} 
        initial={{ opacity: 0, x: 25 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ delay: .1 + i * .08 }} 
        className="flex items-center gap-4 rounded-xl border border-white/8 bg-white/[.035] px-5 py-4">
          <span className="font-display text-xl text-[#d7a34c]">0{i + 1}</span>
          <p className="text-sm text-white/65 md:text-base">{item}</p>
          </motion.div>)}
          </div>
      </div>
    </div>
  )
}

function Hypotheses({ slide }: { slide: HypothesesSlide }) {
  return (
    <div className="w-full">
      <Kicker>{slide.kicker}</Kicker>
    <h2 className="font-display text-[clamp(3rem,5vw,5.5rem)] leading-none tracking-[-.04em]">
      {slide.title}</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {slide.hypotheses.map((item, i) => 
        <motion.article 
        key={item.number} 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: .12 + i * .12 }} 
        className="relative overflow-hidden rounded-[28px] 
        border border-white/10 bg-white/4.5 p-7 md:p-9">
          <span className="absolute right-5 top-2 font-display text-8xl text-white/[.035]">{item.number}</span>
          <span className="inline-flex rounded-full bg-[#d7a34c]/12 
            px-3 py-1 text-xs font-bold text-[#e0b15d]">
          {item.number}
          </span>
          <h3 className="mt-8 max-w-lg font-display text-3xl md:text-4xl">{item.title}</h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/52 md:text-base">
          {item.text}
          </p>
          </motion.article>)}
          </div>
          </div>
  )
}

function Method({ slide }: { slide: MethodSlide }) {
  return (
    <div className="w-full"><Kicker>{slide.kicker}
    </Kicker>
      <h2 className="font-display text-[clamp(3rem,5vw,5.5rem)] leading-none tracking-[-.04em]">{slide.title}</h2>
      <div className="relative mt-12 grid gap-4 md:grid-cols-4">
        <div className="absolute left-[8%] right-[8%] top-8 hidden h-px bg-linear-to-r from-transparent 
        via-[#d7a34c]/40 to-transparent md:block" />
        {slide.steps.map((step, i) => {
           const Icon = step.icon; 
           return <motion.div 
           key={step.number} 
           initial={{ opacity: 0, y: 25 }} 
           animate={{ opacity: 1, y: 0 }} 
           transition={{ delay: .1 + i * .09 }} 
           className="relative rounded-2xl border border-white/9 bg-[#071b29] p-5 md:pt-7">
            <div className="relative z-10 mb-8 grid h-14 w-14 place-items-center rounded-full border
             border-[#d7a34c]/30 bg-[#0a2633] text-[#dfb15d]">
            <Icon size={21} />
            </div>
            <span className="text-[10px] font-bold tracking-[.2em] text-[#d7a34c]">ÉTAPE {step.number}</span>
            <h3 className="mt-3 font-display text-2xl">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-white/45">{step.text}</p>
            </motion.div> })}
            </div>
            </div>
  )
}
