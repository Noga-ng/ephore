import { motion } from "framer-motion"
import type { StageSlide } from "../../../types"
import Kicker from "../Kicker/Kicker"

export default function Stage({ slide }: { slide: StageSlide }) {
  return (
    <div className="flex h-full w-full flex-col overflow-y-auto">
      <Kicker>{slide.kicker}</Kicker>

      <div
        className="
          flex w-full flex-1 flex-col gap-10
          min-[751px]:flex-row
        "
      >
        {/* LEFT */}
        <div className="flex w-full min-w-0 flex-1 flex-col p-4">
          <h2
            className="
              font-display
              text-[clamp(2.8rem,5vw,5.5rem)]
              leading-[.98]
              tracking-[-.04em]
            "
          >
            {slide.title}
          </h2>

          <div className="mt-12 flex gap-5">
            <div className="block h-20 w-20 shrink-0 overflow-hidden rounded">
              <img
                src={slide.image}
                alt="E"
                className="relative block h-full w-full object-cover"
              />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#d7a34c]">
                Structure d’accueil
              </p>

              <p className="mt-2 font-display text-4xl">
                {slide.company}
              </p>

              <p className="mt-2 text-sm text-white/45">
                {slide.location}
              </p>
            </div>
          </div>

          <div
            className="
              mt-5 w-full rounded-2xl
              border border-[#d7a34c]/20
              bg-[#d7a34c]/6
              p-6
            "
          >
            <p className="text-sm leading-7 text-white/60">
              {slide.description}
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="grid gap-3 min-[751px]:grid-cols-2">
            {slide.infos.map((info, i) => {
              const Icon = info.icon

              return (
                <motion.div
                  key={info.label}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.1 + i * 0.08,
                  }}
                  className="
                    rounded-2xl border
                    border-white/10
                    bg-white/[.035]
                    p-5
                  "
                >
                  <div
                    className="
                      mb-5 grid h-10 w-10
                      place-items-center
                      rounded-xl
                      bg-[#d7a34c]/12
                      text-[#e0b15d]
                    "
                  >
                    <Icon size={19} />
                  </div>

                  <p className="text-[10px] font-bold uppercase tracking-[.18em] text-white/35">
                    {info.label}
                  </p>

                  <p className="mt-2 font-display text-2xl">
                    {info.value}
                  </p>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-5 space-y-2">
            {slide.activities.map((activity, i) => (
              <motion.div
                key={activity}
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.2 + i * 0.07,
                }}
                className="
                  flex items-start gap-3
                  rounded-xl
                  border border-white/7
                  bg-white/2.5
                  px-4 py-3
                "
              >
                <span className="mt-1 text-[#d7a34c]">
                  •
                </span>

                <p className="text-sm leading-6 text-white/55">
                  {activity}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}