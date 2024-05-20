import lyrics from './examples.json' assert { type: 'json' };

const original = document.getElementById('original')
const translation = document.getElementById('translation')
console.log(lyrics);
console.log(Array.isArray(lyrics.original));
lyrics.original.forEach((line, index) => {
  const element = document.createElement('div')
  element.setAttribute('contenteditable', 'true')
  element.id = `original-line-${index}`
  element.innerHTML = line
  original.appendChild(element)

})
lyrics.translation.forEach((line, index) => {
  const element = document.createElement('div')
  element.setAttribute('contenteditable', 'true')
  element.id = `translation-line-${index}`
  element.innerHTML = line
  translation.appendChild(element)
})

const readLyricsFromClipboard = async () => {
  const clipboardTextContent = await navigator.clipboard.readText()
  return clipboardTextContent
}

const pasteLyrics = async () => {
  const text = await readLyricsFromClipboard().then(text => text.split('\n'))
  console.log(text);
}

const btn = document.getElementById('pasteLyrics')
btn.onclick = pasteLyrics
