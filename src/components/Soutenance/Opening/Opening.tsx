import { ArrowLeft, ArrowRight } from "lucide-react";
import type { OpeningSlide } from "../../../types";
import {motion} from "framer-motion";
import Kicker from "../Kicker/Kicker";

export default function Opening({slide}: 
    {slide: OpeningSlide}) {
  return (
    <div className="relative overflow-auto h-full w-full flex flex-col">
      <div
        className="
          absolute -left-16 -top-24
          hidden h-64 w-64 rounded-full
          border border-[#d7a34c]/15
          lg:block overflow-auto
        "
      />

      <Kicker>{slide.kicker}</Kicker>

      <motion.h1
        initial={{
          opacity: 0,
          y: 35,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.12,
        }}
        className="
          max-w-6xl font-display
          text-[clamp(3.2rem,7vw,7.4rem)]
          leading-[.94]
          tracking-tighter
          mr-auto
        "
      >
        Analyse de la procédure
        <span className="block text-[#e3b660]">
          d’exportation
        </span>
        de l’art malgache
      </motion.h1>

      <div
        className="
          mt-10 flex flex-col gap-5
          border-t border-white/12 pt-7
          md:flex-row md:items-end
          md:justify-between
        "
      >
        <div>
          <p className="text-sm font-semibold">
            {slide.subtitle}
          </p>

          <p className="mt-2 max-w-xl text-sm leading-6 text-white/45">
            {slide.note}
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs text-white/40">
          <ArrowLeft size={15} />

          Utilise les flèches du clavier

          <ArrowRight size={15} />
        </div>
      </div>
    </div>
  )
}