import { ChangeEvent, useEffect, useState } from "react"
import lyrics from '../../examples';

export const useLyrics = () => {
  const [original, setOriginal] = useState<string[]>([])
  const [translation, setTranslation] = useState<string[]>([])

  const [activeLine, setActiveLine] = useState<number | null>(null)
  const [hoveredLine, setHoveredLine] = useState<number | null>(null)
  
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

  const setupLyrics = (lyrics: string) => {
    const newOriginal = lyrics.split('\n')
    setOriginal(newOriginal)
    const newTranslation = []
    for (let i = 0; i < newOriginal.length; i++) {
      newTranslation.push('');
    }
    setTranslation(newTranslation)
  }

  return {
    original,
    updateOriginal,
    translation,
    updateTranslation,
    activeLine,
    setActiveLine,
    hoveredLine,
    setHoveredLine,
    setupLyrics,
  }
}