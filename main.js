const quoteText = document.querySelector('.quote-text')
const quoteAuthor = document.querySelector('.name')
const anchorLink = document.querySelector('.anchor')


const getNewQuote = async () => {
    const response = await fetch('https://api.quotable.io/random')
    const result = await response.json()
    quoteText.innerHTML = result.content
    quoteAuthor.innerHTML = result.author
    populateAnchorHref()
}

const speack = () => {
    const text = quoteText.innerHTML
    const utterance = new SpeechSynthesisUtterance(text)
    const voices = speechSynthesis.getVoices()
    utterance.voice = voices[0]
    speechSynthesis.speak(utterance)
}

const copyToClipBoard = () => {
    const text = quoteText.innerHTML
    navigator.clipboard.writeText(text)
}

const populateAnchorHref = () => {
    const text = quoteText.innerHTML
    const link = `https://twitter.com/intent/tweet?text=${text}`
    anchorLink.setAttribute('href', link)
}

populateAnchorHref()