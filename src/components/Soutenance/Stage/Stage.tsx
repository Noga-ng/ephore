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

        <div className="flex min-w-0 flex-1 flex-col">

           <div className="mt-12 flex gap-5">
            <div className="block h-20 w-20 shrink-0 overflow-hidden rounded">
              <img
                src={slide.imageI}
                alt="I"
                className="relative block h-full w-full object-cover"
              />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#d7a34c]">
                Université
              </p>

              <p className="mt-2 font-display text-2xl">
                {slide.ecole}
              </p>
            </div>
          </div>

          <div className="grid mt-3 gap-3 min-[751px]:grid-cols-2">
            {slide.ecoleInfo.map((info, i) => {
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
                    duration:.7
                  }}
                  className="
                    min-h-45
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

                  <p className="mt-2 font-display text-xl">
                    {info.value}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* RIGHT */}

    <div className="flex w-full min-w-0 flex-1 flex-col">
          <div className="mt-12 flex gap-5">
            <div className="block h-20 w-20 shrink-0 overflow-hidden rounded">
              <img
                src={slide.imageE}
                alt="E"
                className="relative block h-full w-full object-cover"
              />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#d7a34c]">
                Entreprise de stage
              </p>

              <p className="mt-2 font-display text-4xl">
                {slide.company}
              </p>
            </div>
          </div>

          <div className="grid mt-3 gap-3 min-[751px]:grid-cols-2">
            {slide.StageInfos.map((info, i) => {
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
                    duration:.7
                  }}
                  className="
                    min-h-45
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
            <p className="text-[20px] leading-7 text-white/60">
              {slide.description}
            </p>
          </div>
    </div>
  )
}