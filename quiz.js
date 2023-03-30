// Define an array of questions and answers
const num1 = Math.floor(Math.random() * 100 + 1);
const num2 = Math.floor(Math.random() * 100 + 1);
const solution1 = num1 + num2;
const num3 = Math.floor(Math.random() * 100 + 1);
const num4 = Math.floor(Math.random() * 100 + 1);
const solution2 = num3 - num4;
var answer =0
var questions = [
  {
    question:  "What is " + num1 + "+" + num2 + "?",
    options:  [
      Math.floor(Math.random() * 200 + 1),
      Math.floor(Math.random() * 200 + 1),
      Math.floor(Math.random() * 200 + 1),
      solution1,
    ],
    
    answer:  3
  },
  {
    question: "What is 5*5?",
    options: ["20", "25", "30", "35"],
    answer: 1
  },
  {
    question: "What is 10/2?",
    options: ["2", "5", "10", "20"],
    answer: 1
  },
  {
    question: "What is 8-3?",
    options: ["3", "4", "5", "6"],
    answer: 2
  },
  {
    question: "Wie groß ist die Fläche von einem Kreis mit einem Radius von r=3.09?",
    options: ["20", "28", "30", "40"],
    answer: 2
  },
  {
    question: "Wie heißt das Fachwort hier für 'Summand + Summand = Summe'?",
    options: ["Addition", "Subtraktion", "Multiplikation", "Division"],
    answer: 0
  },
{
  question:  "What is " + num3 + "-" + num4 + "?",
    options:  [
      solution2 -Math.floor(Math.random() * 20 + 1),
      Math.floor(Math.random() * 20 + 1),
      solution2,
      Math.floor(Math.random() * 200 + 1),
    ],
    
    answer:  2
  } 
];


// randomanswer(i){
//   var zahl =questions[i].answer
//   if{
//     if.
//   }
// }



// Get references to the DOM elements
var questionElement = document.getElementById("question");
var optionElements = [
  document.getElementById("option1"),
  document.getElementById("option2"),
  document.getElementById("option3"),
  document.getElementById("option4"),
  document.getElementById("option5"),
  document.getElementById("option6"),
  document.getElementById("option7")
];
// var radioElements = [
//   document.getElementById("option1"),
//   document.getElementById("option2"),
//   document.getElementById("option3"),
//   document.getElementById("option4"),
//   document.getElementById("option5"),
//   document.getElementById("option6"),
//   document.getElementById("option7")
// ];
var resultElement = document.getElementById("result");
var pointsElement = document.getElementById("points");
var nooption = document.getElementById("nooption")

// Set the initial score to 0
var score = 0;

//


// Shuffle the questions array
questions.sort(function() {
  return 0.5 - Math.random();
});

// Display the first question
var currentQuestionIndex = 0;
displayQuestion(currentQuestionIndex);

function displayQuestion(index) {
  // Display the question and options
  var question = questions[index];
  questionElement.textContent = question.question;
  for (var i = 0; i < 4; i++) {
    optionElements[i].innerHTML = question.options[i];
    
  }
  var knopfe =document.getElementsByClassName("optionbutton")
  for(i=0; i<knopfe.length; i++){
    
    knopfe[i].style.backgroundColor="rgb(37, 170, 182)"   
  }
}

function checkAnswer() {
  nooption.hidden=true
  // Check if an option is selected
  var selectedOptionIndex = -1;
  if (answer===0){
    nooption.hidden=false
    return;
  }
  

  // Check if the selected option is correct
  var question = questions[currentQuestionIndex];
  if (answer-1 === question.answer) {
    resultElement.textContent = "Correct!";
    resultElement.style.color = "green";
    score += 10; // Add 10 points for a correct answer
  } else {
    resultElement.textContent = "Wrong!";
    resultElement.style.color = "red";
    score -= 10; // Subtract 10 points for a wrong answer
  }

  // Display the current score
  pointsElement.textContent = "Score: " + score;

  // Wait 3 seconds and then remove the color
  setTimeout(function() {
    resultElement.style.color = "";
  }, 3000);

  // Move to the next question
  currentQuestionIndex++;
  
  if (currentQuestionIndex < questions.length) {
    displayQuestion(currentQuestionIndex);
    answer =0
  } else if(20 <score){
    life=3
    document.getElementById("life").innerText=life
    document.getElementById("snakegame").hidden=false
    document.getElementById("finalscore").innerText=score
    document.getElementById("quiz").hidden=true;
    document.getElementById("theend").hidden=false;
    document.getElementById("fail").hidden=true;

  }else{
    document.getElementById("fail").hidden=false;
    document.getElementById("finalscore").innerText=score
    document.getElementById("quiz").hidden=true;
    document.getElementById("theend").hidden=false;
    

    
    
  }
  
}




function guess(number){
    
  answer= number
  var knopfe =document.getElementsByClassName("optionbutton")
  for(i=0; i<knopfe.length; i++){
      knopfe[i].style.backgroundColor="rgb(37, 170, 182)"   
  }
  knopfe[number-1].style.backgroundColor="rgb(13, 220, 130)"
}

function right(){
  if(answer===4){
      console.log("richtig")
  }else{ 
      console.log("falsch")  
  }
}

function startquiz(){
  score =0
  index=0
  document.getElementById("result").innerText=""
  document.getElementById("points").innerText=""
  currentQuestionIndex =0
  displayQuestion(currentQuestionIndex);
  answer= 0
  questions.sort(function() {
    return 0.5 - Math.random();
  });
  document.getElementById("fail").hidden=true;
  document.getElementById("quiz").hidden=false;
  document.getElementById("theend").hidden=true;
}


var life=1


let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        let rows = 20;
        let cols = 20;
        let snake = [{
            x: 19,
            y: 3
        }];

        let food;

        let cellWidth = canvas.width / cols;
        let cellHeight = canvas.height / rows;
        let direction = 'LEFT';
        let foodCollected = false;

        placeFood();

        setInterval(gameLoop, 200);
        document.addEventListener('keydown', keyDown);


        draw();

        function draw() {
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'white';


            snake.forEach(part => add(part.x, part.y));

            
            ctx.fillStyle = 'red';
            add(food.x, food.y); // Food

            requestAnimationFrame(draw);
        }

        function testGameOver() {

            let firstPart = snake[0];
            let otherParts = snake.slice(1);
            let duplicatePart = otherParts.find(part => part.x == firstPart.x && part.y == firstPart.y);

            // 1. Schlange lÃ¤uft gegen die Wand
            if (snake[0].x < 0 ||
                snake[0].x > cols - 1 ||
                snake[0].y < 0 ||
                snake[0].y > rows - 1 ||
                duplicatePart
               
            ) {
                placeFood();
                snake = [{
                    x: 19,
                    y: 3
                }];
                direction = 'LEFT';

                if(0<life){
                    life=life-1
                    document.getElementById("life").innerText=life
                }else{
                    document.getElementById("snakegame").hidden=true;
                    document.getElementById("fail").hidden=false;
                }
               
            }

        }


        function placeFood() {
            let randomX = Math.floor(Math.random() * cols);
            let randomY = Math.floor(Math.random() * rows);

            food = {
                x: randomX,
                y: randomY
            };
        }

        function add(x, y) {
            ctx.fillRect(x * cellWidth, y * cellHeight, cellWidth - 1, cellHeight - 1);
        }

        function shiftSnake() {
            for (let i = snake.length - 1; i > 0; i--) {
                const part = snake[i];
                const lastPart = snake[i - 1];
                part.x = lastPart.x;
                part.y = lastPart.y;
            }
        }

        function gameLoop() {
            testGameOver();
            if (foodCollected) {
                snake = [{
                    x: snake[0].x,
                    y: snake[0].y
                }, ...snake];

                foodCollected = false;
            }

            shiftSnake();

            if (direction == 'LEFT') {
                snake[0].x--;
            }

            if (direction == 'RIGHT') {
                snake[0].x++;
            }

            if (direction == 'UP') {
                snake[0].y--;
            }

            if (direction == 'DOWN') {
                snake[0].y++;
                
            }

            if (snake[0].x == food.x &&
                snake[0].y == food.y) {
                foodCollected = true;

                placeFood();
            }

        }

        function keyDown(e) {
            if (e.keyCode == 37) {
                direction = 'LEFT';
            }
            if (e.keyCode == 38) {
                direction = 'UP';
            }
            if (e.keyCode == 39) {
                direction = 'RIGHT';
            }
            if (e.keyCode == 40) {
                direction = 'DOWN';
            }
        }