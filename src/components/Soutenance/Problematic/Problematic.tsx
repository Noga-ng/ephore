import type { ProblematicSlide } from "../../../types";
import Kicker from "../Kicker/Kicker";
import {motion} from "framer-motion";

export default function Problematic({slide}: {slide: ProblematicSlide}) {
  return (
    <div className="mx-auto flex flex-col h-full w-full max-w-6xl text-center">
      <Kicker>{slide.kicker}</Kicker>

      <div
        className="
          mx-auto mt-6 grid h-16 w-16
          place-items-center rounded-full
          border border-[#d7a34c]/25
          bg-[#d7a34c]/10
          font-display text-4xl
          text-[#e0b15d]
        "
      >
        ?
      </div>

      <h2
        className="
          mx-auto mt-8
          font-display
          text-[clamp(2rem,4vw,5rem)]
          leading-[1.12]
          tracking-[-.035em]
        "
      >
        {slide.title}
      </h2>

      {slide.question && (
        <p className="mx-auto mt-7 max-w-4xl text-base leading-7 text-white/55 md:text-lg">
          {slide.question}
        </p>
      )}

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {slide.chips.map((chip, i) => (
          <motion.span
            key={chip}
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.18 + i * 0.07,
            }}
            className="
              rounded-full border
              border-white/10 bg-white/4
              px-4 py-2 text-xs
              text-white/60
            "
          >
            {chip}
          </motion.span>
        ))}
      </div>
    </div>
  )
}