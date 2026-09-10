import type { ContextSlide } from "../../../types"
import Kicker from "../Kicker/Kicker"
import { motion } from "framer-motion"

export default function Context({ slide }: { slide: ContextSlide }) {
  return (
    <div className="relative flex h-full w-full flex-col overflow-y-auto overflow-x-hidden">
      <Kicker>{slide.kicker}</Kicker>

      {/* =========================
          Background decoration
      ========================== */}
      <div
        className="
          pointer-events-none absolute
          -right-40 top-10
          h-96 w-96
          rounded-full
          bg-[#d7a34c]/5
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none absolute
          -bottom-20 -left-40
          h-80 w-80
          rounded-full
          bg-cyan-500/5
          blur-3xl
        "
      />

      {/* =========================
          Header
      ========================== */}
      <header
        className="
          relative z-10
          mt-5
          grid gap-5
          sm:mt-7 sm:gap-6
          lg:mt-8
          lg:grid-cols-[1.15fr_.85fr]
          lg:items-end
        "
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
         <h2
  className="
    max-w-4xl
    font-display
    text-[2.5rem]
    font-medium
    leading-[.9]
    tracking-[-.055em]
    text-white
    sm:text-[3.2rem]
    lg:text-[clamp(3rem,5vw,5.5rem)]
  "
>
  {slide.title}
</h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
          className="
            max-w-xl
            border-l
            border-white/10
            pl-4
            text-xs
            leading-6
            text-white/50
            sm:pl-5
            sm:text-sm
            sm:leading-7
            lg:mb-1
            lg:pl-6
          "
        >
          {slide.description}
        </motion.p>
      </header>

      {/* =========================
          Main context
      ========================== */}
      <section
        className="
          relative z-10
          mt-7
          flex
          min-h-0
          flex-1
          flex-col
          gap-4
          pb-4
          sm:mt-9
          sm:gap-5
          lg:mt-12
          lg:flex-row
          lg:items-stretch
          lg:pb-0
        "
      >
        {/* =========================
            Question card
        ========================== */}
        <motion.article
          initial={{
            opacity: 0,
            x: -25,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.35,
            duration: 0.5,
          }}
          className="
            group
            relative
            flex
            w-full
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-[#06192b]/70
            p-5
            backdrop-blur-xl
            transition-colors
            duration-300
            min-h-fit
            sm:min-h-32
            sm:p-6
            max-h-65
            lg:min-h-0
            lg:w-48
            lg:p-7
          "
        >
          {/* Decorative corner */}
          <div
            className="
              pointer-events-none
              absolute
              -right-10
              -top-10
              h-28
              w-28
              rounded-full
              bg-[#d7a34c]/5
              blur-2xl
            "
          />

          {/* Question icon */}
          <div
            className="
              relative
              grid
              w-14
              place-items-center
              rounded-full
              border
              border-[#d7a34c]/25
              bg-[#d7a34c]/10
              font-display
              text-3xl
              font-medium
              text-[#e0b15d]
              transition-transform
              duration-500
              group-hover:scale-105
              h-fit
              sm:h-16
              sm:w-16
              sm:text-4xl

              lg:h-20
              lg:w-20
              lg:text-5xl
            "
          >
            ?
          </div>

          {/* Bottom accent */}
          <div
            className="
              absolute
              bottom-0
              left-0
              h-0.5
              w-full
              origin-left
              scale-x-0
              bg-linear-to-r
              from-[#d7a34c]
              to-transparent
              transition-transform
              duration-500
              group-hover:scale-x-100
            "
          />
        </motion.article>

        {/* =========================
            Points content
        ========================== */}
        <div
          className="
            flex
            min-w-0
            flex-1
            flex-col
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-white/2
            px-4
            py-3
            h-fit
            sm:px-6
            sm:py-5
            max-[650px]:min-h-55
            lg:px-10
            lg:py-7
          "
        >
          {slide.points.map((point, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: 25,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.45 + i * 0.12,
                duration: 0.5,
              }}
              className="
                group
                relative
                flex
                items-start
                gap-2
                py-4
                h-fit
                sm:gap-4
                sm:py-5
                lg:gap-5
                first:pt-2
                last:pb-2
              "
            >
              {/* Quote */}
              <span
                className="
                  shrink-0
                  font-display
                  text-2xl
                  leading-none
                  text-[#e4b55e]

                  sm:text-3xl
                  lg:text-4xl
                "
              >
                “
              </span>

              {/* Point text */}
              <h1
                className="
                  min-w-0
                  max-w-3xl
                  text-base
                  font-medium
                  leading-7
                  tracking-[-.01em]
                  text-white/85

                  sm:text-xl
                  sm:leading-8

                  lg:text-3xl
                  lg:leading-relaxed
                  lg:tracking-[-.015em]
                "
              >
                {point.text}
              </h1>

              {/* Separator */}
              {i < slide.points.length - 1 && (
                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    h-px
                    bg-white/8
                  "
                />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================
          Bottom label
      ========================== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.8,
          duration: 0.5,
        }}
        className="
          relative z-10
          mt-3
          flex
          items-center
          gap-3
          text-[8px]
          font-semibold
          uppercase
          tracking-[.2em]
          text-white/25

          sm:mt-4
          sm:text-[9px]
        "
      />
    </div>
  )
}
