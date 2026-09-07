import type { FfomSlide } from "../../../types"
import Kicker from "../Kicker/Kicker"
import {motion} from "framer-motion"

export default function Ffom({slide}: {slide: FfomSlide}) {
  const blocks = [
    {
      ...slide.strengths,
      accent: 'FORCES',
    },
    {
      ...slide.weaknesses,
      accent: 'FAIBLESSES',
    },
    {
      ...slide.opportunities,
      accent: 'OPPORTUNITÉS',
    },
    {
      ...slide.threats,
      accent: 'MENACES',
    },
  ]

  return (
    <div className="w-full h-full overflow-auto">
      <Kicker>{slide.kicker}</Kicker>

      <h2
        className="
          font-display
          text-[clamp(3rem,5vw,5.5rem)]
          leading-none
          tracking-[-.04em]
        "
      >
        {slide.title}
      </h2>

      <div className="mt-9 grid gap-3 md:grid-cols-2">
        {blocks.map(
          (block, i) => (
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
                delay: 0.08 + i * 0.08,
              }}
              className="
                rounded-2xl
                border border-white/10
                bg-white/[.035]
                p-6
              "
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl">
                  {block.title}
                </h3>

                <span className="text-[9px] font-bold tracking-[.18em] text-[#d7a34c]">
                  {block.accent}
                </span>
              </div>

              <div className="mt-5 space-y-2">
                {block.items.map(
                  (item) => (
                    <div
                      key={item}
                      className="
                        flex items-start gap-3
                        rounded-lg
                        border border-white/6
                        bg-black/10
                        px-3 py-2.5
                      "
                    >
                      <span className="mt-1 text-[#d7a34c]">
                        •
                      </span>

                      <p className="text-xs leading-5 text-white/55 md:text-sm">
                        {item}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </motion.article>
          ),
        )}
      </div>
    </div>
  )
}
