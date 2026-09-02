import { AnimatePresence,motion } from "framer-motion"
import { Menu, Moon, Presentation, Sun, X } from "lucide-react"
import type { Dispatch, SetStateAction } from "react"

export interface NavbarProps {
  dark: boolean
  menuOpen: boolean
  setMenuOpen: Dispatch<SetStateAction<boolean>>
  setDark: Dispatch<SetStateAction<boolean>>
  scrollTo: (id: string) => void
  openPresentation: () => void
}

export default function Navbar({
   dark, 
   menuOpen, 
   setMenuOpen, 
   setDark, 
   scrollTo, 
   openPresentation 
  }: NavbarProps) {
  const links: Array<readonly [label: string, id: string]> = [
    ['Accueil', 'accueil'],
    ['Présentation', 'parcours'],
    ['Parties', 'parcours'],
    ['Analyse', 'analyse'],
    ['Recommandations', 'recommandations'],
  ]

  return (
    <header 
    className="fixed inset-x-0 top-0 z-50 border-b border-white/10 
    bg-[#051624]/88 text-white backdrop-blur-xl">
      <div 
      className="mx-auto flex h-19.5 max-w-375 items-center justify-between px-5 lg:px-10">
        <button onClick={() => scrollTo('accueil')} 
        className="flex items-center gap-3 text-left">
          <div className="grid h-10 w-10 place-items-center rounded-xl border border-[#dba84d]/35 
          bg-[#dba84d]/10 font-display text-xl text-[#e4b45c]">M</div>
          <div>
              <strong className="block font-display text-[17px] tracking-[.08em]">MÉMOIRE</strong>
              <span className="block text-[9px] uppercase tracking-[.16em] text-white/48">
              Présentation interactive
              </span>
          </div>
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          {
          links.map(([label, id]) => 
          <button 
          key={`${label}-${id}`} 
          onClick={() => scrollTo(id)} 
          className="text-xs font-medium text-white/68 transition hover:text-white">{label}
          </button>
          )
          }
          </nav>

        <div className="flex items-center gap-2">
          <button onClick={() => setDark(!dark)} 
          className="nav-icon" 
          aria-label="Changer le thème">
            {dark ? <Sun size={17}/> : <Moon size={17}/>}
          </button>
          <button 
          onClick={openPresentation} 
          className="hidden items-center gap-2 rounded-lg 
          bg-[#e0ad58] px-4 py-3 text-xs font-bold text-[#071827] transition hover:bg-[#efc476] sm:flex">
            <Presentation size={17}/> Mode soutenance
          </button>
          <button onClick={() => 
            setMenuOpen(!menuOpen)} 
            className="sm:hidden border p-2.5 bg-white/5 border-white/15 text-xl-center rounded-xl hover:bg-white/10" 
            aria-label="Menu">
              {menuOpen ? <X size={20}/> : <Menu size={20}/>}
            </button>
        </div>
      </div>

      <AnimatePresence>{
      menuOpen && 
      <motion.div 
      initial={{ opacity: 0, height: 0 }} 
      animate={{ opacity: 1, height: 'auto' }} 
      exit={{ opacity: 0, height: 0 }} 
      className="overflow-hidden border-t border-white/10 bg-[#071827] lg:hidden">
        <div className="space-y-1 p-4">{links.map(([label, id]) => 
          <button key={`${label}-${id}-mobile`} 
          onClick={() => scrollTo(id)} 
          className="block w-full rounded-lg px-4 py-3 text-left text-sm 
          text-white/70 hover:bg-white/5 hover:text-white">
            {label}
            </button>
          )}
          </div>
          </motion.div>
          }
          </AnimatePresence>
    </header>
  )
}