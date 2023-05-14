let instructionList = [
    "The objective of this game set is to assess your soft skills",
    "We highly recommend completing all games in one session as they are designed to be played once",
    "Points will be awarded based on correct answers and the time taken to solve each game",
    "The timer will not be visible on the screen, but it will continue running on the server",
    "In case of emergencies such as power outages, technical difficulties, or network issues, you can resume the game from where you left off",
    "Your progress will be saved on the server even if you encounter any issues",
    "It is important to pay close attention to all the information presented in the game",
    "If you reach a dead end, you have the option to review the previous stage for potential clues to help you progress",
    "If necessary, you can choose to skip a stage, but please note that this will result in forfeiting any potential points for that particular stage",
    "You have the flexibility to end the game at any time, regardless of your current stage, and you will receive results up to that point."
]

// fill in the general instructions
const fillInstructions = () => {
    let instructionOl = document.getElementById("instruction-ol")
    for (let i = 0; i < instructionList.length; ++i) {
        let li = document.createElement("li")
        li.innerText = instructionList[i]
        instructionOl.appendChild(li)
    }
}

fillInstructions()
