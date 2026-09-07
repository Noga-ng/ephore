import type { MemoirContent } from "../../types"
import MemoirItem from "../Memoires/MemoirItem"
import {motion} from "framer-motion"

export default function PartContent({
  part,
}: {
  part: MemoirContent['parts'][number]
}) {
  return (
    <div className="w-full max-w-6xl">
      <div className="mb-2">
        <p className="mb-4 text-xs font-bold uppercase tracking-[.25em] text-[#d7a34c]">
          {part.eyebrow}
        </p>

        <h2 className="
          font-display
          text-[clamp(2.8rem,5vw,5.6rem)]
          leading-none
          tracking-[-.04em]
        ">
          {part.title}
        </h2>

        <p className="mt-2 p-2 text-sm text-white/45 md:text-base">
          {part.subtitle}
        </p>
      </div>

      <div className="max-h-[58vh] space-y-6 overflow-y-auto pr-3">
        {part.items.map((item, index) => (
          <motion.div
            key={`${part.id}-${index}`}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.08 + index * 0.04,
            }}
          >
            <MemoirItem item={item} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}