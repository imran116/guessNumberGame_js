let btn = document.querySelector('#btn-start');

btn.addEventListener('click',startProcess);

function startProcess() {
    let randomNumber = getRandomNumber();
    console.log(randomNumber);    
    
    for (let i = 0; i < 3; i++) {
        let guessNumber = parseInt(prompt(`Enter Guess Number [1-15] (Attempt ${i + 1}):`));

        if (randomNumber === guessNumber) {
            alert("You Win!!!");
            outPut(randomNumber,"Win");
            return;
        } else if (guessNumber < randomNumber) {
            if(i===2){
                alert("Again You chose a small number..");
            }else{
                alert("You chose a small number, pick a bigger one.");
            }
            
        } else if (guessNumber > randomNumber) {
            if(i===2){
                alert("Again You chose a big number..");
            }else{
                alert("You chose a big number, pick a smaller one.");
            }
           
        } else {
            alert("Invalid input. Please enter a number between 1 and 15.");
            i--; // Decrement i to allow the user to try again in case of invalid input.
        }
    }

    alert("You lose!!!");
    outPut(randomNumber,"Lose");
}

function getRandomNumber() {
    let min = 1;
    let max = 15;

    return Math.floor(Math.random()* (max - min) + min);
  
      
}

function outPut(randomNumber,str){
    let div = document.querySelector('#output')
    let ul = document.createElement('ul');
    ul.innerHTML = `
    <h3 sytle:"color :red;">You ${str}!!!</h3>
    <h5>The Guess Number is: ${randomNumber}</h5>
    `
    div.appendChild(ul);
}