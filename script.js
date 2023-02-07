const game = new DiceGame();
const dice = document.createElement('div');
dice.textContent = "roll here";
document.body.appendChild(dice);
 
dice.addEventListener('click',function(){
    console.log('roll');
    let playerRoll = game.roll();
    let compRoll = game.roll();
    
})
 
function DiceGame(){
    this.roll = function(){
        this.result = Math.floor(Math.random()*6)+1;
        return this.result;
    }
}