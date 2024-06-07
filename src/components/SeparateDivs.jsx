// import './App.css'

import { useEffect, useState } from "react"
import Lines from "./dumb/Lines"

function SeparateDivs({ original, translation, setOriginal, setTranslation }) {
  const [activeLine, setActiveLine] = useState(null)
  const [hoveredLine, setHoveredLine] = useState(null)

  const updateText = (event, index) => {
    console.log('Event: ', event.target.innerText)
    console.log('on line ' + index)
  }

  return (
    <div className="container">
      <div className="header">Separate Divs</div>
      <div className="lyrics-container">
        <div className="original-container">
          <h3 className="original-header">Original lyrics</h3>
          <div className="original">
            <Lines 
              lines={original}
              editable={false}
              tag="original"
              hoveredLine={hoveredLine}
              setHoveredLine={setHoveredLine}
              activeLine={activeLine}
              setActiveLine={setActiveLine}
            />
          </div>
        </div>
        <div className="translation-container">
          <h3 className="translation-header">Translated lyrics</h3>
          <div className="translation">
            <Lines 
              lines={translation}
              editable={true}
              tag="translation"
              hoveredLine={hoveredLine}
              setHoveredLine={setHoveredLine}
              activeLine={activeLine}
              setActiveLine={setActiveLine}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeparateDivs
