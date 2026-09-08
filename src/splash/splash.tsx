import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

export default function Splash() {
  return (
    <main className="w-screen h-screen flex flex-col items-center-safe 
                      justify-center-safe bg-slate-950">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center-safe"
      >
       <GraduationCap size={90} className="text-white font-bold"/>

        <h1 className="mt-5 text-2xl font-semibold text-white">
         MIASA Ephore Exethélène
        </h1>
      </motion.div>

      <div className="mt-8 h-1 w-40 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full w-1/2 rounded-full bg-white"
          animate={{ x: ['-100%', '200%'] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <p className="mt-4 text-sm text-white/50">
        Chargement...
      </p>
    </main>
  )
}