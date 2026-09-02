import { Search } from "lucide-react";
import { thesis } from "../../homeData";

export default function Footer() {
  return <footer className="border-t border-white/10 bg-[#041522] text-white">
    <div className="mx-auto flex max-w-340 flex-col justify-between gap-8 px-6 py-9 md:flex-row md:items-center lg:px-12">
      <div className="flex items-center gap-4">
        <div className="grid h-11 w-11 place-items-center rounded-xl border border-[#dba84d]/30 text-[#e3b35d]">M</div>
        <div>
          <strong className="font-display tracking-wide">
            {thesis.shortTitle}
            </strong>
            <span className="mt-1 block text-xs text-white/42">{thesis.school}</span>
            </div>
         </div>
      <div className="flex items-center gap-3 text-xs text-white/45">
      <Search size={15}/>
      <span>+261 32 80 766 99 since @2026</span>
    </div>
   </div>
  </footer>
}