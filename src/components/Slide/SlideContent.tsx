import type { PresentationSlide } from "../../types"
import Conclusion from "../Soutenance/Conclusion/Conclusion"
import Ffom from "../Soutenance/Ffom/Ffom"
import Objectives from "../Soutenance/Objectives/Objectives"
import Opening from "../Soutenance/Opening/Opening"
import Problematic from "../Soutenance/Problematic/Problematic"
import Procedure from "../Soutenance/Procedure/Procedure"
import Recommendations from "../Soutenance/Recommendations/Recommendations"
import Stage from "../Soutenance/Stage/Stage"

export default function SlideContent({slide}: {slide: PresentationSlide}) {
  switch (slide.type) {
    case 'opening':
      return <Opening slide={slide} />

    case 'problematic':
      return <Problematic slide={slide} />

    case 'objectives':
      return <Objectives slide={slide} />

    case 'stage':
      return <Stage slide={slide} />

    case 'procedure':
      return <Procedure slide={slide} />

    case 'ffom':
      return <Ffom slide={slide} />

    case 'recommendations':
      return <Recommendations slide={slide} />

    case 'conclusion':
      return <Conclusion slide={slide} />
  }
}