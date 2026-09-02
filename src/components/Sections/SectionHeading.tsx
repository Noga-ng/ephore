import {motion} from "framer-motion";

export interface SectionHeadingProps {
  kicker: string
  title: string
}

export default function SectionHeading({ kicker, title }: SectionHeadingProps) {
  return <motion.div 
  initial={{ opacity: 0, y: 25 }} 
  whileInView={{ opacity: 1, y: 0 }} 
  viewport={{ once: true, amount: .5 }} 
  className="mx-auto max-w-3xl text-center">
    <span className="text-xs font-bold uppercase tracking-[.24em] text-[#a86f2b]">{kicker}</span>
    <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-.03em] md:text-5xl">{title}</h2>
    <div className="mx-auto mt-5 flex w-36 items-center gap-3 text-[#ad7a3c]">
      <span className="h-px flex-1 bg-[#cabaa7]"/>
      <span>◇</span>
      <span className="h-px flex-1 bg-[#cabaa7]"/>
      </div>
  </motion.div>
}