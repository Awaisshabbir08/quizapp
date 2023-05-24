let questions = [
    {
        'que' : 'which of the following is the markup language?',
        'a' :'HTML',
        'b' :'Javascript',
        'c' :'CSS',
        'd' :'PHP',
        'correct': 'a',
    },
    {
        'que' : 'What year was JS Launched?',
        'a' :'1998',
        'b' :'1996',
        'c' :'1995',
        'd' :'1997',
        'correct' : 'c'

    },
    {
        'que' : 'What does CSS Stand for?',
        'a' :'HayperText Markup Language',
        'b' :'Cascading Style Sheet',
        'c' :'JSON Object Notation',
        'd' :'Helicaptors Terminal ',
        'correct' : 'b',
    }
];

let index = 0;
let ans;
let right = 0;
let wrong = 0;
let  quesBox = document.getElementById('questionBox');
let optionInputs = document.querySelectorAll('.options');


let loadQuestion = () => {

    if(index === questions.length){
       return exitQuiz();
    }
    
    //reset inputs if already get selected
    optionInputs.forEach((input) => {
        input.checked = false;
     });

    let data = questions[index];
    quesBox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b; 
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
 }

 let submitQuiz = () => {
 
    if (index >= questions.length) {
        return exitQuiz();
      }
    
      let quelen = questions[index];
      optionInputs.forEach((input) => {
        if (input.checked) {
          ans = input.value; 
        }
      });
      if (quelen && ans === quelen.correct) { // Check if quelen is defined before accessing properties
        right++;
      } else {
        wrong++;
      }
    
      index++;
      loadQuestion();
      return;

 }

        const exitQuiz = () => {
            const boxes = document.getElementById('ansbox');
            // for (let i = 0; i < boxes.length; i++) {
            boxes.innerHTML = `
                <h3>Thanks for Playing. </h3>
                <h2>${right} is right out of / ${questions.length}</h2>
            `;
            // }
        };

loadQuestion();

// write function which will get array of stock exchange and return max profit of given arary