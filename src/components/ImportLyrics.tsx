import { useContext } from "react"
import { AppContext } from "../services/appContext"
import { useNavigate } from "react-router-dom";

export const ImportLyrics = () => {
  const navigate = useNavigate();
  const { setupLyrics } = useContext(AppContext)

  const onSubmit = () => {
    setupLyrics((document.getElementById('lyrics') as HTMLInputElement)?.value)
    navigate('/translate')
  }

  return (
    <div className="container">
      <h2>Paste the lyrics you want to translate, and edit it how you want before we start translating!</h2>
      <div className="text-container">
        <textarea name="lyrics" id="lyrics"></textarea>
        <button onClick={onSubmit}>Let's translate!</button>
      </div>
    </div>
  )
}