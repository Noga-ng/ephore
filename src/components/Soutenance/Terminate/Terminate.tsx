import type { Terminate } from "../../../types"
import Kicker from "../Kicker/Kicker"
import { motion } from "framer-motion"
import { ArrowUpRight, Sparkles } from "lucide-react"

export default function Terminate({ slide }: { slide: Terminate }) {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden">
      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-80
          w-80
          rounded-full
          bg-[#d7a34c]/10
          blur-3xl
        "
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-96
          w-96
          rounded-full
          bg-[#d7a34c]/5
          blur-3xl
        "
      />

      <Kicker>{slide.kicker}</Kicker>

      <div className="relative flex h-full w-full flex-col">
        {/* Main content */}
        <div className="flex h-full flex-col items-center justify-center text-center">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="
              mb-8
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-[#d7a34c]/30
              bg-[#d7a34c]/10
              text-[#d7a34c]
              shadow-[0_0_40px_rgba(215,163,76,0.12)]
            "
          >
            <Sparkles size={24} strokeWidth={1.7} />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-5xl
              font-display
              text-[clamp(3rem,6vw,7rem)]
              font-medium
              leading-[0.9]
              tracking-[-0.055em]
            "
          >
            {slide.title}
          </motion.h1>

          {/* Small accent */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 64, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
            }}
            className="mt-8 h-0.5 bg-[#d7a34c]"
          />
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.7,
            ease: "easeOut",
          }}
          className="
            mb-6
            flex
            items-center
            justify-between
            gap-6
            border-l-2
            border-[#d7a34c]
            bg-white/2
            px-5
            py-4
            backdrop-blur-sm
            md:mb-8
          "
        >
          <p className="max-w-3xl text-left text-base leading-7 text-white/55 md:text-lg">
            {slide.footer}
          </p>

          <div
            className="
              hidden
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              p-3
              text-white/50
              md:flex
            "
          >
            <ArrowUpRight size={20} strokeWidth={1.5} />
          </div>
        </motion.div>
      </div>
    </div>
  )
}