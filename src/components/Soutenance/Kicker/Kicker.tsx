import type { ReactNode } from "react";

export default function Kicker({children}: {children: ReactNode}) {
  return (
    <p
      className="
        mb-5 flex items-center gap-3
        text-xs font-bold uppercase
        tracking-[.25em] text-[#d7a34c]
      "
    >
      <span className="h-px w-10 bg-[#d7a34c]" />

      {children}
    </p>
  )
}