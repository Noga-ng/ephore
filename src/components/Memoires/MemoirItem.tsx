import type { MemoirContent } from "../../types"

export default function MemoirItem({
  item,
}: {
  item: MemoirContent['parts'][number]['items'][number]
}) {
  switch (item.type) {
    case 'intro-title':
      return (
        <h3 className="
          font-display
          text-2xl
          tracking-wide
          text-[#e3b660]
          md:text-3xl
        ">
          {item.text}
        </h3>
      )

    case 'paragraph':
      return (
        <p className="
          max-w-4xl
          text-sm
          leading-7
          text-white/65
          md:text-base
          md:leading-8
        ">
          {item.text}
        </p>
      )

    default:
      return (
        <p className="text-sm leading-7 text-white/60">
          {item.text}
        </p>
      )
  }
}