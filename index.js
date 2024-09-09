const rockBtn = document.querySelector('#rock-btn')
const paperBtn = document.querySelector('#paper-btn')
const scissorsBtn = document.querySelector('#scissors-btn')
const messageDiv = document.querySelector('#message-div')
const scoreDiv = document.querySelector('#score-div')
const resetBtn = document.querySelector('#reset-btn')

let playerScore = 0
let computerScore = 0

const choices = {
	rock: { beats: 'scissors', message: 'Rock crushes Scissors' },
	paper: { beats: 'rock', message: 'Paper covers Rock' },
	scissors: { beats: 'paper', message: 'Scissors cuts paper' },
}

function getComputerChoice() {
	const options = ['rock', 'paper', 'scissors']
	const randomNumber = Math.trunc(Math.random() * options.length)
	return options[randomNumber]
}

function getHumanChoice() {
	const userChoice = prompt('rock, paper or scissors')
	return userChoice
}

function playRound(humanChoice, computerChoice) {
	// hacer que el input del usuario sea case-insensitive
	const humanChoiceInsensitive = humanChoice.toLowerCase()

	if (humanChoiceInsensitive === computerChoice) {
		console.log('Draw!')
		messageDiv.textContent = 'Draw'
	} else if (choices[humanChoiceInsensitive].beats === computerChoice) {
		playerScore++
		messageDiv.textContent = `You win ${choices[humanChoiceInsensitive].message}`
		console.log(`You win ${choices[humanChoiceInsensitive].message}`)
	} else {
		computerScore++
		messageDiv.textContent = `You lose ${choices[computerChoice].message}`
		console.log(`You lose ${choices[computerChoice].message}`)
	}
	getWinner()
}

function getWinner() {
	scoreDiv.textContent = `Player score: ${playerScore} , Computer score: ${computerScore}`
	if (playerScore >= 5) {
		scoreDiv.textContent = `Player wins!`
	} else if (computerScore >= 5) {
		scoreDiv.textContent = `Computer wins!`
	}
}

rockBtn.addEventListener('click', () => {
	playRound(Object.keys(choices)[0], getComputerChoice())
})

paperBtn.addEventListener('click', () => {
	playRound(Object.keys(choices)[1], getComputerChoice())
})

scissorsBtn.addEventListener('click', () => {
	playRound(Object.keys(choices)[2], getComputerChoice())
})

resetBtn.addEventListener('click', () => {
	messageDiv.textContent = ''
	scoreDiv.textContent = ''
	computerScore = 0
	playerScore = 0
})

console.log(`Final Score, computer: ${computerScore} vs human: ${playerScore}`)
