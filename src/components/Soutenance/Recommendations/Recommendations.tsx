import type { RecommendationsSlide } from "../../../types"
import Kicker from "../Kicker/Kicker"
import {motion} from "framer-motion"

export default function Recommendations({slide}: {slide: RecommendationsSlide}) {
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

      <div className="mt-9 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {slide.recommendations.map(
          (recommendation, i) => {
            const Icon = recommendation.icon

            return (
              <motion.article
                key={recommendation.number}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.08 + i * 0.07,
                }}
                className="
                  group relative
                  overflow-hidden
                  rounded-2xl
                  border border-white/10
                  bg-white/[.035]
                  p-5
                "
              >
                <span
                  className="
                    absolute right-3 top-0
                    font-display text-7xl
                    text-white/2.5
                  "
                >
                  {recommendation.number}
                </span>

                <div
                  className="
                    relative z-10
                    mb-5 grid h-10 w-10
                    place-items-center
                    rounded-xl
                    bg-[#d7a34c]/12
                    text-[#e0b15d]
                  "
                >
                  <Icon size={18} />
                </div>

                <p className="text-[10px] font-bold tracking-[.2em] text-[#d7a34c]">
                  {recommendation.number}
                </p>

                <h3 className="mt-2 font-display text-xl">
                  {recommendation.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-white/45 md:text-sm">
                  {recommendation.text}
                </p>
              </motion.article>
            )
          },
        )}
      </div>
    </div>
  )
}