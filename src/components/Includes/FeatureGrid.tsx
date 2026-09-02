import { ArrowRight } from "lucide-react";
import { features } from "../../homeData";
import {motion} from "framer-motion";

export default function FeatureGrid() {
  return <div className="grid gap-4 sm:grid-cols-2">{
    features.map(({ title, description, icon: Icon, link }, index) => 
    <motion.article 
    key={title} 
    initial={{ opacity: 0, y: 25 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: true, amount: .25 }} 
    transition={{ delay: index * .08 }} 
    className="group rounded-2xl border border-white/10 bg-white/[.035] 
    p-6 backdrop-blur-sm transition hover:border-[#d8a44b]/35 hover:bg-white/6">
    <div className="grid h-11 w-11 place-items-center rounded-xl border 
    border-[#d8a44b]/28 text-[#e3b35d]"><Icon size={20}/>
    </div>
    <h3 className="mt-5 font-display text-xl">{title}</h3>
    <p className="mt-2 text-sm leading-6 text-white/48">{description}</p>
    <button className="mt-5 inline-flex items-center gap-2 text-xs font-semibold 
    text-[#e2b15d] transition group-hover:gap-4">{link} <ArrowRight size={14}/>
    </button>
  </motion.article>)}</div>
}