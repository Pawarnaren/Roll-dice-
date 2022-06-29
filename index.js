// create variable for game state
let player1Score = 0
let player2Score = 0
let player1Turn = true


const player1Dice = document.getElementById("player1dice")
const player2Dice = document.getElementById("player2dice")

const Dice1 = document.getElementById("dice1")
const Dice2 = document.getElementById("dice2")
const player1Scoreboard = document.getElementById("player1scoreboard")
const player2Scoreboard = document.getElementById("player2scoreboard")
const message  = document.getElementById("message")
const rollBtn  = document.getElementById("roll-btn")
const resetBtn = document.getElementById("reset-btn")


function showDisplayButton(){
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

resetBtn.addEventListener("click",function(){
    reset()
})

function reset(){
    message.textContent = "Player 1 turn"
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = 0
    player2Dice.textContent = 0

    player1Score = 0
    player2Score = 0
    player1Turn = true

    resetBtn.style.display = "none"
    rollBtn.style.display = "block"

    Dice2.classList.remove("activee")
    Dice1.classList.add("activee")

}




rollBtn.addEventListener("click",function(){
    const randomNumber = Math.floor( Math.random() * 6 ) + 1

    if(player1Turn){
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        Dice1.classList.remove("activee")
        Dice2.classList.add("activee")
        message.textContent = "Player 2 turn"

    }
    else{
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        Dice2.classList.remove("activee")
        Dice1.classList.add("activee")
        message.textContent = "Player 1 turn"
    }

    // switch the turn tu player 2
    player1Turn = !player1Turn


    if(player1Score >= 20){
        message.textContent = "Player 1 has won 🎉"
        showDisplayButton()
    } 
    else if(player2Score >= 20){
        message.textContent = "Player 2 has won 🎉"
        showDisplayButton()
    }
})