var readLineSync = require('readline-sync')
const chalk = require('chalk');
var score = 0

function first() {
  var name = readLineSync.question('Please enter your name: ')
  console.log('Hey there ' + chalk.red.bgWhite(' Welcome to Friends Quiz Game '))
  console.log(chalk.blue('Let\'s see how much you know about this wonderful series ') + chalk.white.bgRed(' ' + name.toUpperCase() + ' '))
  console.log('=============')
  console.log(chalk.green('Good Luck!!'))
  console.log('=============')
  console.log(chalk.green('Write 1, 2, 3 or 4 and press enter'))
  console.log('=============')
  console.log('~~~~~~~~~~~~~')
  console.log('=============')
}

function play(question, options, answer, length) {
  console.log(question)
  for (var i = 0; i < options.length; i++) {
    console.log(i + 1, chalk.cyan(options[i]))
  }
  var chosenAnswer = readLineSync.question();

  if (options[chosenAnswer - 1] === answer) {
    console.log(chalk.green('You are right,' ) + (' Congrats!'))
    score += 1
  } else {
    console.log(chalk.red('Sorry that was wrong. ') + 'Correct answer is ' + chalk.green(answer))
  }

  console.log('Your score is ', score)
  console.log('=======================')
  if (length === 15) {
    if (score <= 8) {
      console.log('Score: ' + (score/15)*100 + '%')
      console.log('Sorry Buddy You need to watch Friends.')
      console.log('Here is the link: ' + chalk.black.bgWhite(' https://www.netflix.com/in/title/70153404?source=35 '))
    } else if (score > 8 && score < 13) {
      console.log('Score: ' + (score/15)*100 + '%')
      console.log('Woohoo!! You scored great 👏🏻')
    } else {
      console.log('Score: ' + (score/15)*100 + '%')
      console.log('Wow!! You are good at this 👏🏻' + ' You are a true Fan.')
    }
  }
}

var quizArray = [
  {
    question: "What show do Joey and Chandler love to watch?",
    options: ['Jeopardy', 'Baywatch', 'Wheel of Fortune','Days of our lives'],
    answer: "Baywatch"
  },
  {
    question: "What does Joey do for work?",
    options: ['Singer', 'Model', 'Actor','Nothing'],
    answer: "Actor"
  },
  {
    question: "What is Joey's famous phrase?",
    options: ['Hey what\'s up?', 'How are ya?', 'How\'s it hanging?','How you doin?'],
    answer: "How you doin?"
  },
  {
    question: "What is the neighbor's name that lives below Rachel and Monica?",
    options: ['Mr. Heckles', 'Mr. Sheck', 'Mr. Treiger','Gunther'],
    answer: "Mr. Heckles"
  },
  {
    question: "What is Ross' monkey's name?",
    options: ['Paolo', 'Marcus', 'Ben','Marcel'],
    answer: "Marcel"
  },
  {
    question: "Where do Ross and Rachel get married?",
    options: ['London', 'Vegas', 'Church','Outside Central Perk'],
    answer: "Vegas"
  },
  {
    question: "Which Friend used to be fat?",
    options: ['Rachel', 'Monica', 'Joey','Phoebe'],
    answer: "Monica"
  },
  {
    question: "Which Friend has a twin?",
    options: ['Monica', 'Ross', 'Rachel','Phoebe'],
    answer: "Phoebe"
  },
  {
    question: "What song does Ross sing to Emma that makes her laugh?",
    options: ['Anaconda', 'I like big butts', 'Thriller','Stacy\'s Mom'],
    answer: "I like big butts"
  },
  {
    question: "What is the building superintendant's name?",
    options: ['Gunther', 'Treeger', 'Heckles','Jack'],
    answer: "Treeger"
  },
  {
    question: "What is the name of Chandler's crazy roommate?",
    options: ['Mona', 'Marcus', 'Matthew','Eddie'],
    answer: "Eddie"
  },
  {
    question: "Which of Phoebe's songs gets made into a music video?",
    options: ['Your Love', 'Little Black Curly Hair', 'Shower Song','Smelly Cat'],
    answer: "Smelly Cat"
  },
  {
    question: "Where is Rachel planning to move in The Last One?",
    options: ['Los Angeles', 'Paris', 'London','Venice'],
    answer: "Paris"
  },
  {
    question: "What does Phoebe get a tattoo of?",
    options: ['The sun', 'The Whole World', 'A freckle','A Heart'],
    answer: "The Whole World"
  },
  {
    question: "What is Joey's favorite food?",
    options: ['Potatoes', 'Sandwitches', 'Ice Cream','Macaroni'],
    answer: "Sandwitches"
  },
]

first()
for (var i = 0; i < quizArray.length; i++) {
  play(quizArray[i].question, quizArray[i].options, quizArray[i].answer, i + 1)
}
