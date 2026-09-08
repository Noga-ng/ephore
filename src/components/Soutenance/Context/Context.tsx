import type { ContextSlide } from "../../../types"
import Kicker from "../Kicker/Kicker"
import { motion } from "framer-motion"

export default function Context({ slide }: { slide: ContextSlide }) {
  return (
    <div className="relative flex h-full w-full flex-col overflow-auto">
      <Kicker>{slide.kicker}</Kicker>

      {/* Background decoration */}
      <div
        className="
          pointer-events-none absolute
          -right-32 top-20
          h-80 w-80
          rounded-full
          bg-[#d7a34c]/5
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none absolute
          -left-40 bottom-0
          h-72 w-72
          rounded-full
          bg-cyan-500/5
          blur-3xl
        "
      />

      {/* Header */}
      <div className="relative z-10 flex max-[750px]:flex-col gap-8 items-center-safe justify-center-safe">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="
              mb-5 flex items-center gap-3
              text-[10px] font-bold uppercase
              tracking-[.28em] text-[#d7a34c]
            "
          >
            {/* <span className="h-px w-8 bg-[#d7a34c]/60" /> */}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              max-w-4xl
              font-display
              text-[clamp(2.8rem,5vw,5.5rem)]
              leading-[.92]
              tracking-[-.045em]
            "
          >
            {slide.title}
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="
            max-w-xl
            text-base leading-7
            text-white/55
            lg:pb-2
          "
        >
          {slide.description}
        </motion.p>
      </div>

      {/* Context cards */}
      <div className="relative z-10 mt-10 grid flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {slide.points.map((point, i) => {
          const Icon = point.icon

          return (
            <motion.article
              key={i}
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.25 + i * 0.1,
                duration: 0.5,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                group relative
                flex min-h-55
                flex-col justify-between
                overflow-hidden
                rounded-2xl
                border border-white/8
                bg-[#071b29]/90
                p-5
                backdrop-blur-xl
                transition-colors duration-300
                hover:border-[#d7a34c]/30
              "
            >
              {/* Number */}
              <span
                className="
                  pointer-events-none absolute
                  -right-2 -top-5
                  font-display
                  text-[100px]
                  leading-none
                  text-white/2.5
                  transition-colors duration-300
                  group-hover:text-[#d7a34c]/6
                "
              >
                0{i + 1}
              </span>

              {/* Icon */}
              <div className="relative flex items-start justify-between">
                <div
                  className="
                    grid h-12 w-12 place-items-center
                    rounded-xl
                    border border-[#d7a34c]/20
                    bg-[#0a2633]
                    text-[#dfb15d]
                    transition-all duration-300
                    group-hover:border-[#d7a34c]/50
                    group-hover:bg-[#d7a34c]/10
                  "
                >
                  <Icon size={20} strokeWidth={1.7} />
                </div>

                <span
                  className="
                    text-[10px] font-bold
                    tracking-[.2em]
                    text-white/20
                  "
                >
                  0{i + 1}
                </span>
              </div>

              {/* Content */}
              <div className="relative mt-8">
                <h3
                  className="
                    font-display
                    text-xl
                    leading-tight
                    text-white
                  "
                >
                  {point.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-white/45
                  "
                >
                  {point.text}
                </p>
              </div>

              {/* Bottom accent */}
              <div
                className="
                  absolute bottom-0 left-5 right-5
                  h-px
                  origin-left
                  scale-x-0
                  bg-linear-to-r
                  from-[#d7a34c]
                  to-transparent
                  transition-transform duration-500
                  group-hover:scale-x-100
                "
              />
            </motion.article>
          )
        })}
      </div>
    </div>
  )
}