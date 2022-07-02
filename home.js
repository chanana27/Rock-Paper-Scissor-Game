function rpsGame(yourChoice){
    console.log(yourChoice);
    // console.log(yourChoice.id);

    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numToChoice(randToRpsInt());
    console.log("Computer choice: "+ botChoice);

    result = decideWinner(humanChoice, botChoice); // [0,1] human lost bot won
    console.log(result);

    message = finalMessage(result);
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numToChoice(number){
    return ['rock', 'paper', 'scissor'] [number];
}

function decideWinner(myChoice, computerChoice){
    console.log("my choice"+myChoice);
    console.log("computer choise issss"+computerChoice);
    var rpsDatabase = {
    'rock': {'scissor': 1, 'rock':0.5, 'paper': 0},
    'paper': {'rock': 1, 'paper': 0.5, 'scissor': 0},
    'scissor': {'paper': 1, 'scissor': 0.5, 'rock': 0}
    };

    var yourScore = rpsDatabase[myChoice][computerChoice];
    console.log(yourScore);
    var computerScore = rpsDatabase[computerChoice][myChoice];
    console.log("computerchoixe"+computerChoice);
    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if(yourScore == 0){
        return {'message': 'You lost!', 'color': 'red'};
    }
    if(yourScore == 0.5){
        return {'message': 'You tied!', 'color': 'yellow'};
    }
    if(yourScore == 1){
        return {'message': 'You Won!', 'color': "green"};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalmessage){
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    };
 
    // let's remove all the images

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var playAgain = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' height=200 width=200 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1); '>"

    messageDiv.innerHTML = "<h1 style='color: " + finalmessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalmessage['message'] + "</h1>"

    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "'  height=200 width=200 style='box-shadow: 0px 10px 50px rgba(37,50,233,1); '>"

    playAgain.innerHTML = "<button style='background:red;' height:100px>Play Again</button>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    document.getElementsByClassName("container").appendChild(playAgain);
} 