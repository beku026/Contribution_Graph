import { useState } from "react";
import Tooltip from "../Tooltip/Tooltip";
import './ContributionItem.css'

const ContributionItem = ({week, weekIndex}) => {
  const [state, setState] = useState(false)
  const contributionColor = (count) => {
    if (count >= 1 && count <= 9) return "#ACD5F2";
    if (count >= 10 && count <= 19) return "#7FA8C9";
    if (count >= 20 && count <= 29) return "#527BA0";
    if (count >= 30) return "#254E77";
    return "#EDEDED";
  };
  const color = contributionColor(week.count);

return (
  <>
    <div 
      className='contributionItem' 
      style={{background: color}}
      key={week.day}
      onMouseEnter={() => setState(true)}
      onMouseLeave={() => setState(false)}
    >
      {state && <Tooltip data={week} weekIndex={weekIndex} />}
    </div>
  </>
)
}

export default ContributionItem;