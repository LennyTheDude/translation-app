// import './App.css'

import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react"
import Lines from "./dumb/Lines"

interface SepDivsProps {
    original: string[];
    translation: string[];
    setOriginal: Function;
    setTranslation: Function;
}

function SeparateDivs({ original, translation, setOriginal, setTranslation }: SepDivsProps) {
  const [activeLine, setActiveLine] = useState(null)
  const [hoveredLine, setHoveredLine] = useState(null)

  const updateOriginal = (event: ChangeEvent, index: number) => {
    const newOriginal = original;
    newOriginal[index] = event.target.innerHTML;
    setOriginal(newOriginal);
  }

  const updateTranslation = (event: ChangeEvent, index: number) => {
    const newTranslation = translation;
    newTranslation[index] = event.target.innerHTML;
    setTranslation(newTranslation);
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
              updateText={updateOriginal}
            />
          </div>
          <button onClick={() => console.log(original)}>Copy Original Text</button>
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
              updateText={updateTranslation}
            />
          </div>
          <button onClick={() => console.log(translation)}>Copy Translated Text</button>
        </div>
      </div>
    </div>
  )
}

export default SeparateDivs
