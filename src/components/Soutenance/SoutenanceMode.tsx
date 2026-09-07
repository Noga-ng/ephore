import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  X,
} from 'lucide-react'
import { presentationSlides } from '../../presentationData'
import SlideContent from './Slide/SlideContent'

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 90 : -90,
    scale: 0.985
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -90 : 90,
    scale: 0.985
  }),
}

interface SoutenanceModeProps {
  onClose: () => void
}

export default function SoutenanceMode({onClose}: SoutenanceModeProps) {
  const [[index, direction], setPage] = useState<[number, number]>([0, 0])

  const [fullscreen, setFullscreen] = useState(Boolean(document.fullscreenElement))

  const slide = presentationSlides[index] ?? presentationSlides[0]

  const progress = ((index + 1) / presentationSlides.length) * 100

  const go = useCallback(
    (next: number): void => {
      if (
        next < 0 ||
        next >= presentationSlides.length
      ) {
        return
      }

      setPage(([currentIndex]) => [
        next,
        next > currentIndex
          ? 1
          : next < currentIndex
            ? -1
            : 0,
      ])
    },
    [],
  )

  useEffect(() => {
    const onKey = (event: KeyboardEvent): void => {
      if (
        ['ArrowRight', 'PageDown', ' '].includes(event.key)
      ) {
        event.preventDefault()

        go(Math.min(index + 1,presentationSlides.length - 1))
      }

      if (
        ['ArrowLeft', 'PageUp'].includes(event.key)
      ) {
        event.preventDefault()

        go(Math.max(index - 1, 0))
      }

      if (
        event.key === 'Escape' &&
        !document.fullscreenElement
      ) {
        onClose()
      }
    }

    window.addEventListener('keydown', onKey)

    return () =>
      window.removeEventListener('keydown', onKey)
  }, [go, index, onClose])

  useEffect(() => {
    const onFullscreen = (): void => {
      setFullscreen(Boolean(document.fullscreenElement))
    }

    document.addEventListener('fullscreenchange',onFullscreen)

    return () =>
      document.removeEventListener('fullscreenchange',onFullscreen)
  }, [])

  const toggleFullscreen = async (): Promise<void> => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen?.()
    } else {
      await document.exitFullscreen?.()
    }
  }

  return (
    <div className="fixed inset-0 z-200 overflow-hidden bg-[#041521] text-white">
      {/* Background */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_75%_20%,rgba(210,157,72,.18),
          transparent_28%),radial-gradient(circle_at_10%_80%,rgba(22,120,132,.18),
          transparent_24%)]
        "
      />

      {/* Progress */}
      <div
        className="
          absolute left-0 top-0 h-1
          bg-[#d7a34c]
          transition-[width] duration-500
        "
        style={{ width: `${progress}%` }}
      />

      {/* Header */}
      <header
        className="
          relative inset-x-0 top-0 z-30
          flex h-20 items-center justify-between
          px-5 md:px-10
        "
      >
        <div className="flex items-center gap-4">
          <button
            onClick={onClose}
            className="presentation-control"
            aria-label="Quitter la soutenance"
          >
            <X size={19} />
          </button>

          <div className="hidden sm:block">
            <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#d7a34c]">
              Mode soutenance
            </p>

            <p className="mt-1 text-xs text-white/45">
              Présentation synthétique
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="mr-1 text-xs tabular-nums text-white/45">
            {String(index + 1).padStart(2, '0')} /{' '}
            {String(presentationSlides.length).padStart(
              2,
              '0',
            )}
          </span>

          <button
            onClick={toggleFullscreen}
            className="presentation-control"
            aria-label="Plein écran"
          >
            {fullscreen ? (
              <Minimize2 size={18} />
            ) : (
              <Maximize2 size={18} />
            )}
          </button>
        </div>
      </header>

      {/* Slides */}
      <main className="relative z-10 h-full w-full pb-24">
        <AnimatePresence
          mode="wait"
          custom={direction}
        >
          <motion.section
            key={slide.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.52,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto flex h-full max-w-360
              items-center px-6
              md:px-12
              lg:px-20 overflow-auto
            "
          >
            <SlideContent slide={slide} />

          </motion.section>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer
        className="
          absolute inset-x-0 bottom-0 z-30
          flex h-24 items-center justify-between
          px-5 md:px-10 opacity-0 transition-all ease-in-out duration-200 hover:opacity-100
        "
      >
        <div className="hidden items-center gap-2 md:flex">
          {presentationSlides.map(
            (item, itemIndex) => (
              <button
                key={item.id}
                onClick={() => go(itemIndex)}
                className={`
                  h-1.5 rounded-full
                  transition-all
                  ${
                    itemIndex === index
                      ? 'w-10 bg-[#d7a34c]'
                      : 'w-3 bg-white/16 hover:bg-white/35'
                  }
                `}
                aria-label={`Aller à la diapositive ${itemIndex + 1}`}
              />
            ),
          )}
        </div>

        <div className="ml-auto flex gap-2">
          <button
            disabled={index === 0}
            onClick={() => go(index - 1)}
            className="presentation-nav disabled:opacity-25"
          >
            <ChevronLeft size={21} />

            <span className="hidden sm:inline">
              Précédent
            </span>
          </button>

          <button
            disabled={
              index === presentationSlides.length - 1
            }
            onClick={() => go(index + 1)}
            className="
              presentation-nav
              presentation-nav-primary
              disabled:opacity-25
            "
          >
            <span className="hidden sm:inline">
              Suivant
            </span>

            <ChevronRight size={21} />
          </button>
        </div>
      </footer>
    </div>
  )
}