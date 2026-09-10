import type { ConclusionSlide } from "../../../types"
import Kicker from "../Kicker/Kicker"
import {motion, type Variants} from "framer-motion"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function Conclusion({slide}: {slide: ConclusionSlide}) {
  return (
    <div className="w-full h-full flex flex-col">
      <Kicker>{slide.kicker}</Kicker>

      <div className="pointer-events-none absolute inset-0">

        {/* Halo */}
        <div
          className="
            absolute
            right-[15%]
            top-[30%]
            h-112.5
            w-112.5
            rounded-full
            bg-[#d94f0b]/7
            blur-[120px]
          "
        />

        {/* Cadre extérieur */}

        <div className="absolute inset-5 lg:inset-7" />

      </div>

      <div className="grid gap-10 h-fit lg:grid-cols-[.95fr_1.05fr] lg:items-center">
        <motion.div
        variants={fadeUp}
        >
          <motion.h2
          variants={fadeUp}
            className="
              font-display
              text-[clamp(3rem,5vw,6rem)]
              leading-[.94]
              tracking-[-.045em]
            "
          >
            {slide.title}
          </motion.h2>

          <div
            className="
              mt-8 border-l-2
              border-[#d7a34c]
              pl-5
            "
          >
            <motion.p 
            variants={fadeUp}
            className="text-base text-left leading-8 text-white/60 md:text-lg">
              {slide.summary}
            </motion.p>
          </div>
        </motion.div>

        <div>
         <motion.div
            variants={fadeUp}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
            }}
            className="relative mx-auto h-125 w-full max-w-155 max-[650px]:hidden"
          >

            {/* Image principale */}
            <motion.div
            variants={fadeUp}
              className="
                absolute
                right-[10%]
                top-[8%]
                h-97.5
                w-97.5
                overflow-hidden
              "
              style={{
                clipPath:
                  'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
              }}
            >
              <img
                src={slide.image.i1}
                alt=""
                className="h-full w-full object-cover"
              />
            </motion.div>


            {/* Contour principal */}
            <motion.div
            variants={fadeUp}
              className="
                absolute
                right-[10%]
                top-[8%]
                h-97.5
                w-97.5
                border
                border-[#d94f0b]/70
              "
              style={{
                clipPath:
                  'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
              }}
            />


            {/* Image secondaire */}
            {slide.image.i3 && (
              <motion.div
              variants={fadeUp}
                className="
                  absolute
                  right-[10%]
                  top-[7%]
                  h-36.25
                  w-36.25
                  rounded-full
                  overflow-hidden
                "
              >
                <img
                  src={slide.image.i3}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </motion.div>
            )}

            {/* Petit hexagone */}
           <motion.div
              variants={fadeUp}
              className="
                absolute
                bottom-13
                left-[27%]
                rounded-full
                overflow-hidden
                h-35
                w-35
              "
            >
              <img src={slide.image.i2} className=" w-full h-full object-cover " alt="" />
          </motion.div>

          </motion.div>
        </div>
      </div>
    </div>
  )
}
