import { useEffect, useState } from 'react'
import './App.css'
import EditLyrics from './components/EditLyrics'
import ButtonRow from './components/dumb/ButtonRow'
import ViewLyrics from './components/ViewLyrics';

function App() {
  const [tab, setTab] = useState('edit-lyrics')

  const buttons = [
    {
      id: 'edit-lyrics',
      text: 'Edit Lyrics'
    },
    {
      id: 'view-lyrics',
      text: 'View Lyrics'
    },
  ]


  return (
    <div className="container">
      <ButtonRow buttons={buttons} tab={tab} setTab={setTab}/>
      <h1 className="header">
        Sam Brown - Stop
      </h1>
      <div className="layout-base">
        {(tab == 'edit-lyrics') &&
          <EditLyrics />
        }
        {(tab == 'view-lyrics') && 
          <ViewLyrics />
        }
      </div>
    </div>
  )
}

export default App
