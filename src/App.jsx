import { useEffect, useState } from 'react'
import './App.css'
import SeparateDivs from './components/SeparateDivs'
import SameDiv from './components/SameDiv'
import TableLayout from './components/TableLayout'
import ButtonRow from './components/dumb/ButtonRow'
import lyrics from './examples.js';

function App() {
  const [tab, setTab] = useState('separate-divs')
  const [original, setOriginal] = useState([])
  const [translation, setTranslation] = useState([])

  useEffect(() => {
    setOriginal(lyrics.original)
    setTranslation(lyrics.translation)
  }, [])

  const buttons = [
    {
      id: 'separate-divs',
      text: 'Separate Divs'
    },
    {
      id: 'same-div',
      text: 'Same Div'
    },
    {
      id: 'table-layout',
      text: 'Table Layout'
    }
  ]


  return (
    <div className="container">
      <ButtonRow buttons={buttons} tab={tab} setTab={setTab}/>
      <h1 className="header">
        Let's translate some lyrics
      </h1>
      <div className="layout-base">
        {(tab == 'separate-divs') && <SeparateDivs original={original} translation={translation} setOriginal={setOriginal} setTranslation={setTranslation} />}
        {(tab == 'same-div') && <SameDiv original={original} translation={translation} setOriginal={setOriginal} setTranslation={setTranslation} />}
        {(tab == 'table-layout') && <TableLayout original={original} translation={translation} setOriginal={setOriginal} setTranslation={setTranslation} />}
      </div>
    </div>
  )
}

export default App
