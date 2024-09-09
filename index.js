let humanScore = 0
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
	} else if (choices[humanChoiceInsensitive].beats === computerChoice) {
		humanScore++
		console.log(`You win ${choices[humanChoiceInsensitive].message}`)
	} else {
		computerScore++
		console.log(`You lose ${choices[computerChoice].message}`)
	}
}

function playGame() {
	for (let i = 0; i <= 4; i++) {
		const computerSelection = getComputerChoice()
		const humanSelection = getHumanChoice()
		playRound(humanSelection, computerSelection)
	}
	console.log(`Final Score, computer: ${computerScore} vs human: ${humanScore}`)
}

playGame()
