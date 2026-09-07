import type { ObjectivesSlide } from "../../../types"
import Kicker from "../Kicker/Kicker"
import {motion} from "framer-motion"

export default function Objectives({slide}: {slide: ObjectivesSlide}) {
  const Icon = slide.icon

  return (
    <div className="w-full">
      <Kicker>{slide.kicker}</Kicker>

      <div className="grid gap-10 lg:grid-cols-[.92fr_1.08fr]">
        <div>
          <h2
            className="
              font-display
              text-[clamp(3rem,5vw,5.6rem)]
              leading-[.98]
              tracking-[-.04em]
            "
          >
            {slide.title}
          </h2>

          <div
            className="
              mt-8 rounded-2xl
              border border-[#d7a34c]/25
              bg-[#d7a34c]/8 p-6
            "
          >
            <div className="flex gap-4">
              <div
                className="
                  grid h-11 w-11 shrink-0
                  place-items-center rounded-xl
                  bg-[#d7a34c]
                  text-[#071827]
                "
              >
                <Icon size={20} />
              </div>

              <div>
                <p
                  className="
                    text-[10px] font-bold
                    uppercase tracking-[.2em]
                    text-[#d7a34c]
                  "
                >
                  Objectif général
                </p>

                <p className="mt-2 text-sm leading-7 text-white/68">
                  {slide.mainObjective}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {slide.objectives.map(
            (item, i) => (
              <motion.div
                key={item}
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
                  flex items-center gap-4
                  rounded-xl border
                  border-white/8
                  bg-white/[.035]
                  px-5 py-4
                "
              >
                <span className="font-display text-xl text-[#d7a34c]">
                  0{i + 1}
                </span>

                <p className="text-sm text-white/65 md:text-base">
                  {item}
                </p>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </div>
  )
}