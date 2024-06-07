// import './App.css'

function SameDiv() {
  return (
    <div className="container">
      <div className="header">Same Div</div>
      <div className="lyrics-container">
        <div className="original-container">
          <h3 className="original-header">Original lyrics</h3>
          <div className="original">
            <div name="original" id="original" className="text-wrapper" contentEditable="true"></div>
          </div>
        </div>
        <div className="translation-container">
          <h3 className="translation-header">Translated lyrics</h3>
          <div className="translation">
            <div name="translation" id="translation" className="text-wrapper" contentEditable="true"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SameDiv
