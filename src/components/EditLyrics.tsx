// import './App.css'
import Lines from "./dumb/Lines"
import { useLyrics } from "../hooks/useLyrics";

function EditLyrics() {
  const { original, updateOriginal, translation, updateTranslation, activeLine, setActiveLine, hoveredLine, setHoveredLine } = useLyrics()

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
              activeLine={activeLine}
              setActiveLine={setActiveLine}
              updateText={updateOriginal}
            />
          </div>
          <button onClick={() => console.log(original.join(''))}>Copy Original Text</button>
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
          <button onClick={() => console.log(translation.join(''))}>Copy Translated Text</button>
        </div>
      </div>
    </div>
  )
}

export default EditLyrics
