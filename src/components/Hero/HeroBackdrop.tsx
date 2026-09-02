export default function HeroBackdrop() {
  return <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[#0a2030]" />

      <div className="absolute -left-20 top-14 h-190 w-155 rotate-[-8deg] rounded-[48%] 
            bg-[radial-gradient(circle_at_45%_40%,rgba(175,116,57,.45),transparent_24%),
            linear-gradient(140deg,rgba(112,65,31,.58),rgba(4,20,32,.1)_62%)] opacity-70 blur-[1px]" />

      <div className="absolute left-[8%] top-[18%] h-97.5 w-65 opacity-40 
            bg-[repeating-linear-gradient(100deg,rgba(218,165,84,.42)_0_2px,transparent_2px_19px)] 
            mask-[radial-gradient(ellipse,#000_25%,transparent_73%)]" />

      <div className="absolute bottom-[18%] right-[-4%] h-57.5 w-150 opacity-50 
          bg-[linear-gradient(to_top,rgba(173,97,42,.8),rgba(52,104,116,.5))] 
          [clip-path:polygon(0_78%,9%_55%,28%_62%,39%_32%,61%_34%,63%_19%,65%_19%,67%_34%,100%_40%,100%_100%,0_100%)]" />

    <div className="absolute right-[7%] top-[18%] h-2 w-56 rotate-[-11deg] rounded-full 
    bg-white/28 shadow-[30px_9px_0_-1px_rgba(255,255,255,.2)] before:absolute before:-left-7 
    before:-top-4 before:h-10 before:w-32 before:skew-x-[-24deg] before:rounded-[50%] before:bg-white/22" />

    <div className="absolute inset-0 opacity-[.06] bg-[linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),
    linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] bg-size-[70px_70px]" />

  </div>
}