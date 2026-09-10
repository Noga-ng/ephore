import type { ProgramSlide } from "../../../types"
import Kicker from "../Kicker/Kicker"
import { motion } from "framer-motion"

export default function Programs({slide}: {slide: ProgramSlide}) {
  return (
    <div className="w-full h-full bg-transparent ">
      <Kicker>{slide.kicker}</Kicker>

      <div className="flex flex-col gap-10">
        <div className="p-3">
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
        </div>

        <div className="flex flex-wrap gap-10 justify-between ">
          {slide.notes.map((item, i) => (
            <motion.div
              key={`${item.title}-${i}`}
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                flex items-center gap-4
                rounded-xl
                border border-white/8
                bg-white/[.035]
                px-5 py-4
                w-90
                hover:border-amber-400
                transition-all ease-in-out
                durration-2
              "
            >
              <span
                className="
                  font-display
                  text-xl
                  text-[#d7a34c]
                "
              >
                0{i + 1}
              </span>

              <div>
                <p
                  className="
                    text-sm
                    font-semibold
                    text-white
                    md:text-base
                  "
                >
                  {item.title}
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    leading-6
                    text-white/50
                    md:text-sm
                  "
                >
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}