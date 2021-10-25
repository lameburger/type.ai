const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')
const cars = ["the","of","off","and","a","to","two","too","in","is","you","that","it","he","for","was","on","are","as","with","his","they","at","be","this","from","I","have","or","by","bye","one","won","had","not","but","what","all","were","where","when","we","there","their","can","an","your","which","said","if","do","will","each","about","how","who","up","out","them","then","than","she","many","some","so","these","would","other","into","has","more","her","like","him","see","time","could","no","know","make","first","been","its","now","people","my","made","over","did","down","done","only","way","find","use","may","water","long","little","very","after","words","called","just","most","get","through","back","much","before","go","good","new","write","our","me","man","any","day","same","look","think","also","around","another","came","come","work","word","must","because","does","part","even","place","well","such","here","take","why","things","help","put","years","different","away","again","went","old","number","great","tell","say","small","every","found","still","between","name","should","home","big","give","air","line","set","own","under","read","last","never","us","left","end","along","while","might","next","sound","below","saw","something","thought","both","few","those","always","looked","show","large","often","together","asked","house","world","going","want"];
quoteInputElement.addEventListener('input', () => {
  const arrayQuote = quoteDisplayElement.querySelectorAll('span')
  const arrayValue = quoteInputElement.value.split('')
// trying to figure out why this const variable isn't working
  let correct = true
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index]
    if (character == null) {
      characterSpan.classList.remove('correct')
      characterSpan.classList.remove('incorrect')
      correct = false
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add('correct')
      characterSpan.classList.remove('incorrect')
    } else {
      characterSpan.classList.remove('correct')
      characterSpan.classList.add('incorrect')
      correct = false
    }
  })

  if (correct) renderNewQuote()
})

function getRandomQuote() {
    var quoteArr = []
    for (var i = 0; i < 10; i++) {
        var rand = WORDS[Math.floor(Math.random() * 16)]
        var sentence = rand.join(" ")
        quoteArr.push(sentence)
        console.log(sentence)
    }
}
 // Troubleshooting the new list initialization.
async function renderNewQuote() {
  const quote = await getRandomQuote()
  quoteDisplayElement.innerHTML = ''
  quote.split('').forEach(character => {
    const characterSpan = document.createElement('span')
    characterSpan.innerText = character
    quoteDisplayElement.appendChild(characterSpan)
  })
  quoteInputElement.value = null
  startTimer()
}

let startTime
function startTimer() {
  timerElement.innerText = 0
  startTime = new Date()
  setInterval(() => {
    timer.innerText = getTimerTime()
  }, 1000)
}

function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000)
}

renderNewQuote()