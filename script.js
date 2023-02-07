const game = new DiceGame();
const dice = document.createElement('div');
dice.textContent = "roll here";
document.body.appendChild(dice);
dice.addEventListener('click', function () {
    console.log('roll');
    let playerRoll = game.roll();
    let compRoll = game.roll();
    let winner = game.checker(playerRoll, compRoll);
    console.log(winner);
    dice.innerHTML = `Player ${playerRoll} vs Computer ${compRoll} <br>${winner}`;
})
 
function DiceGame() {
    this.roll = function () {
        this.result = Math.floor(Math.random() * 6) + 1;
        return this.result;
    }
    this.checker = function (roll1, roll2) {
        if (roll1 > roll2) {
            return 'Player Wins'
        }
        else if (roll2 > roll1) {
            return 'Computer Wins'
        }
        else {
            return 'Tie';
        }
    }
}