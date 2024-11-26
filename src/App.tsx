import './App.scss'
import EditLyrics from './components/EditLyrics/index'
import { ImportLyrics } from './components/ImportLyrics';
import ViewLyrics from './components/ViewLyrics';
import { useLyrics } from './hooks/useLyrics';
import { AppContext } from './services/appContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const {
    original,
    updateOriginal,
    translation,
    updateTranslation,
    activeLine,
    setActiveLine,
    hoveredLine,
    setHoveredLine,
    setupLyrics,
  } = useLyrics();

  return (
    <AppContext.Provider value={{
      original,
      updateOriginal,
      translation,
      updateTranslation,
      activeLine,
      setActiveLine,
      hoveredLine,
      setHoveredLine,
      setupLyrics,
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<ImportLyrics />} />
            <Route path="translate" element={<EditLyrics />} />
            <Route path="view" element={<ViewLyrics />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
