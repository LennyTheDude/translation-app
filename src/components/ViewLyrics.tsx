// import './App.css'
import Lines from "./dumb/Lines"
import { useLyrics } from "../hooks/useLyrics";

function ViewLyrics() {
  const { original, translation, hoveredLine, setHoveredLine } = useLyrics()

  return (
    <div className="container">
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
            />
          </div>
          <button onClick={() => console.log(original.join('\n'))}>Copy Original Text</button>
        </div>
        <div className="translation-container">
          <h3 className="translation-header">Translated lyrics</h3>
          <div className="translation">
            <Lines 
              lines={translation}
              editable={false}
              tag="translation"
              hoveredLine={hoveredLine}
              setHoveredLine={setHoveredLine}
            />
          </div>
          <button onClick={() => console.log(translation.join('\n'))}>Copy Translated Text</button>
        </div>
      </div>
    </div>
  )
}

export default ViewLyrics
