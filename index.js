import lyrics from './examples.json' assert { type: 'json' };

const original = document.getElementById('original')
original.innerHTML = lyrics.original.join('')
const translation = document.getElementById('translation')
translation.innerHTML = lyrics.translation.join('')
