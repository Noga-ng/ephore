import { ArrowRight } from "lucide-react"
import type { PartItem } from "../../types"
import {motion} from "framer-motion";

interface PartCardProps {
  part: PartItem
  index: number
}


export default function PartCard({ part, index }: PartCardProps) {
  const Icon = part.icon
  const visualClass = [
    'from-[#123e44] via-[#1b5b60] to-[#112a35]',
    'from-[#2d4d59] via-[#6e5544] to-[#1d313c]',
    'from-[#5e3327] via-[#80543d] to-[#21333d]',
  ][index]
  const badgeClass = ['bg-[#0b5960]', 'bg-[#c28a37]', 'bg-[#a74f38]'][index]

  return <motion.article 
  initial={{ opacity: 0, y: 35 }} 
  whileInView={{ opacity: 1, y: 0 }} 
  whileHover={{ y: -8 }} 
  transition={{ duration: .45, delay: index * .08 }} 
  viewport={{ once: true, amount: .2 }} 
  className="group overflow-hidden rounded-[18px] border 
  border-[#172b38]/10 bg-[#faf7f1] shadow-[0_18px_50px_rgba(35,31,24,.08)]">
     
    <div className={`relative h-48 overflow-hidden bg-linear-to-br ${visualClass}`}>
      <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(115deg,rgba(255,255,255,.24)_0_1px,transparent_1px_22px)]" />
      <Icon className="absolute right-8 top-7 h-24 w-24 stroke-1 text-white/18 transition duration-500 group-hover:scale-110 group-hover:rotate-3" />
      <div className="absolute bottom-0 overflow-hidden left-0 right-0 h-24 bg-linear-to-t from-black/50 to-transparent" />
       <span className={`absolute z-99 -bottom-5 left-6 grid h-12 w-12 place-items-center rounded-xl 
        font-display text-xl text-white shadow-lg ${badgeClass}`}>{part.number}</span>
    </div>
    <div className="relative p-7">
     

      <span className="text-[10px] font-bold uppercase tracking-[.18em] text-[#9d6b2f]">{part.eyebrow}</span>
      <h3 className="mt-2 font-display text-2xl leading-tight tracking-[-.02em]">{part.title}</h3>
      <p className="mt-4 min-h-24 text-sm leading-6 text-[#5d666c]">{part.description}</p>
      <button className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#102d3b] 
      transition-all group-hover:gap-4">Découvrir <ArrowRight size={15}/>
      </button>
    </div>
  </motion.article>
}