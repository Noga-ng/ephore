import type { PresentationSlide } from "../../../types"
import Conclusion from "../Conclusion/Conclusion"
import Context from "../Context/Context"
import Ffom from "../Ffom/Ffom"
import Objectives from "../Objectives/Objectives"
import Opening from "../Opening/Opening"
import Procedure from "../Procedure/Procedure"
import Programs from "../Program/Program"
import Recommendations from "../Recommendations/Recommendations"
import Stage from "../Stage/Stage"
import Terminate from "../Terminate/Terminate"

export default function SlideContent({slide}: {slide: PresentationSlide}) {
  switch (slide.type) {
    case 'opening':
      return <Opening slide={slide} />
    
    case 'program':
      return <Programs slide={slide}/>
    
    case 'context':
      return <Context slide={slide} />

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
      case 'terminate':
        return <Terminate slide={slide}/>
  }
}