import type { ProcedureSlide } from "../../../types"
import Kicker from "../Kicker/Kicker"
import { motion } from "framer-motion"

export default function Procedure({ slide }: { slide: ProcedureSlide }) {
  return (
    <div className="w-full h-full flex flex-col">
      <Kicker>{slide.kicker}</Kicker>

      <h2
        className="
          max-w-5xl font-display
          text-[clamp(2.8rem,5vw,5.5rem)]
          leading-[.98]
          tracking-[-.04em]
        "
      >
        {slide.title}
      </h2>

      {/* INTRODUCTION : TRANSIT & DOUANE */}

      {/* PROCÉDURE */}
      <div className="relative mt-8 grid gap-4 lg:grid-cols-3">
        <div
          className="
            absolute left-[12%] right-[12%]
            top-8 hidden h-px
            bg-linear-to-r
            from-transparent
            via-[#d7a34c]/40
            to-transparent
            lg:block
          "
        />

        {slide.phases.map((phase, i) => {
          const Icon = phase.icon

          return (
            <motion.article
              key={phase.number}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3 + i * 0.1,
                duration:.7
              }}
              className="
                relative z-10
                rounded-2xl
                border border-white/10
                bg-[#071b29]
                p-6
              "
            >
              <div className="flex items-center justify-between">
                <div
                  className="
                    grid h-14 w-14
                    place-items-center
                    rounded-full
                    border
                    border-[#d7a34c]/30
                    bg-[#0a2633]
                    text-[#dfb15d]
                  "
                >
                  <Icon size={21} />
                </div>

                <span className="font-display text-5xl text-white/5">
                  {phase.number}
                </span>
              </div>

              <h3 className="mt-3 font-display text-2xl">
                {phase.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/45">
                {phase.description}
              </p>

              <div className="mt-5 space-y-2">
                {phase.steps.map((step) => (
                  <div
                    key={step}
                    className="
                      flex items-start gap-2
                      text-xs leading-5
                      text-white/55
                    "
                  >
                    <span className="text-[#d7a34c]">
                      →
                    </span>

                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          )
        })}
      </div>
    </div>
  )
}