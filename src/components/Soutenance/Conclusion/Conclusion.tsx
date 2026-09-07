import type { ConclusionSlide } from "../../../types"
import Kicker from "../Kicker/Kicker"
import {motion} from "framer-motion"

export default function Conclusion({slide}: {slide: ConclusionSlide}) {
  return (
    <div className="w-full h-full flex flex-col">
      <Kicker>{slide.kicker}</Kicker>

      <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
        <div>
          <h2
            className="
              font-display
              text-[clamp(3rem,5vw,6rem)]
              leading-[.94]
              tracking-[-.045em]
            "
          >
            {slide.title}
          </h2>

          <div
            className="
              mt-8 border-l-2
              border-[#d7a34c]
              pl-5
            "
          >
            <p className="text-base text-left leading-8 text-white/60 md:text-lg">
              {slide.summary}
            </p>
          </div>
        </div>

        <div>
          <div className="space-y-3">
            {slide.keyPoints.map(
              (point, i) => (
                <motion.div
                  key={point}
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.1 + i * 0.08,
                  }}
                  className="
                    flex items-start gap-4
                    rounded-xl
                    border border-white/8
                    bg-white/[.035]
                    px-5 py-4
                  "
                >
                  <span className="font-display text-xl text-[#d7a34c]">
                    0{i + 1}
                  </span>

                  <p className="text-sm leading-6 text-white/60">
                    {point}
                  </p>
                </motion.div>
              ),
            )}
          </div>

          {slide.note && (
            <div
              className="
                mt-5 rounded-2xl
                border border-[#d7a34c]/25
                bg-[#d7a34c]/8
                p-6
              "
            >
              <p className="text-sm leading-7 text-white/65">
                {slide.note}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
