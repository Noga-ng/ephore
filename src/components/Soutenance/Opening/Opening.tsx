import { ArrowLeft, ArrowRight } from "lucide-react"
import type { OpeningSlide } from "../../../types"
import { motion } from "framer-motion"
import Kicker from "../Kicker/Kicker"

export default function Opening({ slide }: { slide: OpeningSlide }) {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden">

      {/* Decorative background */}
      <div
        className="
          pointer-events-none
          absolute -left-32 -top-32
          h-80 w-80
          rounded-full
          border border-[#d7a34c]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute -right-40 -bottom-30
          h-96 w-96
          rounded-full
          border border-white/4
        "
      />

      {/* Kicker */}
      <motion.div
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Kicker>{slide.kicker}</Kicker>
      </motion.div>

      {/* Main title */}
      <div className="relative z-10 flex flex-1 flex-col justify-center">

        <motion.h1
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.7,
            ease: "easeOut",
          }}
          className="
            max-w-6xl
            font-display
            text-[clamp(3rem,7vw,7.2rem)]
            font-medium
            leading-[.9]
            tracking-[-.055em]
          "
        >
          Analyse de la procédure

          <span className="block text-[#e3b660]">
            d’exportation
          </span>

          <span className="block">
            de l’art malgache
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.45,
            duration: 0.5,
          }}
          className="mt-8"
        >
          <p className="text-sm font-semibold tracking-wide text-white/80">
            {slide.subtitle}
          </p>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/40">
            {slide.note}
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.65,
          duration: 0.5,
        }}
        className="
          relative z-10
          flex flex-col gap-4
          border-t border-white/8
          pt-5
          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#d7a34c]" />

          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[.25em]
              text-white/35
            "
          >
            Mémoire de fin d’études
          </span>
        </div>

        <div
          className="
            flex items-center gap-3
            text-[10px]
            font-medium
            uppercase
            tracking-[.16em]
            text-white/30
          "
        >
          <ArrowLeft size={14} strokeWidth={1.5} />

          <span>Utilisez les flèches du clavier</span>

          <ArrowRight size={14} strokeWidth={1.5} />
        </div>
      </motion.div>
    </div>
  )
}