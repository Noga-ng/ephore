import type { FfomSlide } from "../../../types"
import Kicker from "../Kicker/Kicker"
import { motion } from "framer-motion"

export default function Ffom({ slide }: { slide: FfomSlide }) {
  const blocks = [
    {
      ...slide.strengths,
      letter: "F",
      accent: "FORCES",
    },
    {
      ...slide.weaknesses,
      letter: "F",
      accent: "FAIBLESSES",
    },
    {
      ...slide.opportunities,
      letter: "O",
      accent: "OPPORTUNITÉS",
    },
    {
      ...slide.threats,
      letter: "M",
      accent: "MENACES",
    },
  ]

  return (
    <div className="w-full h-full overflow-auto">
      <Kicker>{slide.kicker}</Kicker>

      <div className="flex flex-col gap-3">
        <h2
          className="
            font-bold
            text-[clamp(2rem,3vw,3rem)]
            leading-[.95]
            tracking-[-.035em]
          "
        >
          {slide.title}
        </h2>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {blocks.map((block, i) => (
          <motion.article
            key={block.title}
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1 + i * 0.1,
              duration: 0.7,
            }}
            className="
              group relative overflow-hidden
              rounded-2xl
              border border-white/10
              bg-[#071b29]
              p-5 md:p-6
            "
          >
            {/* Lettre FFOM */}
            <div
              className="
                absolute -right-3 -top-7
                select-none
                font-display
                text-[8rem]
                leading-none
                text-white/2.5
                transition-transform
                duration-500
                group-hover:scale-110
              "
            >
              {block.letter}
            </div>

            {/* Header */}
            <div className="relative flex items-start gap-4">
              <div
                className="
                  grid h-12 w-12 shrink-0
                  place-items-center
                  rounded-xl
                  border border-[#d7a34c]/25
                  bg-[#0a2633]
                  font-display
                  text-xl
                  text-[#dfb15d]
                "
              >
                {block.letter}
              </div>

              <div>
                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[.22em]
                    text-[#d7a34c]
                  "
                >
                  {block.accent}
                </p>

                <h3 className="mt-1 font-display text-xl text-white">
                  {block.title}
                </h3>
              </div>
            </div>

            {/* Éléments */}
            <div className="relative mt-5 space-y-2">
              {block.items.map((item) => (
                <div
                  key={item}
                  className="
                    flex items-start gap-3
                    rounded-lg
                    border border-white/6
                    bg-white/2.5
                    px-3 py-2.5
                    transition-colors
                    duration-300
                    group-hover:border-white/10
                  "
                >
                  <span
                    className="
                      mt-1.5
                      h-1.5 w-1.5
                      shrink-0
                      rounded-full
                      bg-[#d7a34c]
                    "
                  />

                  <p className="text-xs leading-5 text-white/55 md:text-[13px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}