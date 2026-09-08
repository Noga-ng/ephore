import { stats } from "../../homeData";
import {motion} from "framer-motion";

export default function Stats() {
  return <motion.div 
  initial={{ opacity: 0, y: 30 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ delay: .8, duration: .65 }} 
  className="grid overflow-hidden mt-2 rounded-[22px] border border-white/12 
  bg-[#071a2b]/88 shadow-2xl shadow-black/25 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
    {
    stats.map(({ value, label, detail, icon: Icon }, index) => 
    <div 
    key={label} 
    className={`flex items-center gap-4 p-5 md:p-6 
      ${index ? 'border-t border-white/10 sm:border-l sm:border-t-0' : ''} 
      ${index === 2 ? 'sm:border-l-0 lg:border-l' : ''}`
      }>
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full
       bg-[#0c5660]/55 text-[#9bd4d7]"><Icon size={21}/></div>
      <div>
        <strong className="font-display text-2xl text-white">{value}</strong>
        <span className="block text-xs font-semibold text-white/80">{label}</span>
        <small className="mt-1 block text-[10px] text-white/40">{detail}</small>
      </div>
    </div>
  )
  }
  </motion.div>
}