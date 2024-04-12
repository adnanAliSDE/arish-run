const charactersContainer = document.querySelectorAll('.characters .item')
const playBtn = document.getElementById('play-btn')
const currentCharacter = document.querySelector('p.char-name span#name')

// Game logic
const scoreElement = document.querySelector('.status #score')
let score = 0
function startGame() {
    setInterval(() => {
        scoreElement.innerHTML = String(score).padStart(3, '0')
        score += 1
    }, 150)
}

// Game start
charactersContainer.forEach(item => {
    item.addEventListener('click', (e) => {
        // console.log(e)
        try {
            currentCharacter.innerHTML = e.target.innerHTML
        } catch (error) {
            console.log(error)
        }
    })
});

playBtn.addEventListener('click', (e) => {
    document.querySelector('section.game').classList.remove('hidden')
    e.target.parentElement.classList.add('hidden')
    startGame()
})