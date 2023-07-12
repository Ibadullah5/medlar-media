import './Hamburger.css'
import { useState } from 'react'
const Hambburger = () => {

  const [style, setStyle] = useState("")

  const handleClick = () => {
    if (style == "")
      setStyle("open")
    else
      setStyle("")
  }

  return (
    <div className={style} onClick={handleClick} id="nav-icon4">
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default Hambburger