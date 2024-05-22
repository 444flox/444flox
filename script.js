
document.addEventListener("DOMContentLoaded", function() {
    // Affichage de l'overlay de chargement
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';
  
    // Disparition de l'overlay de chargement après 3 secondes
    setTimeout(function(){
      overlay.classList.add('fade-out'); // Ajouter la classe pour déclencher l'effet de fondu
      setTimeout(function() {
        overlay.style.display = 'none'; // Cacher complètement l'overlay après la transition
      }, 500); // Attendre que la transition soit terminée (500ms dans ce cas)
    }, 3000);
  });

const questions = [
    {
        question: "Qui est décrite comme la Ministre de la mode ?",
        image:"https://image.noelshack.com/fichiers/2024/20/1/1715606672-photo-question-all.png" ,
        answers:[
            {text:"Rose Bertin ?" ,correct:true },
            {text:"Marie-Antoinette ?" ,correct:false },
            {text:"Charles-Frederick Worth ?" ,correct:false },
        ]
    },
    {
        question: "Que sont les 'sans-culottes' ?",
        image: "https://image.noelshack.com/fichiers/2024/20/1/1715606672-photo-question-all.png" ,
        answers:[
            {text:"Des pantalons ?" ,correct:false },
            {text:"Un mouvement politique ?" ,correct:false },
            {text:"Des hommes portant des pantalons à pont ?" ,correct:true },
        ]
    },
    {
        question: "Qu'est-ce qu'une redingote ?",
        image: "https://image.noelshack.com/fichiers/2024/19/2/1715085770-photo-question-8.jpg" ,
        answers:[
            {text:"Un veste pour homme ?" ,correct:true },
            {text:"Un élément se trouvant sur les manches ?" ,correct:false },
            {text:"Une paire de chaussures ?" ,correct:false },
        ]
    },
    {
        question: "Quel vêtement inspire le style vestimentaire sous l'Empire ?",
        image: "https://image.noelshack.com/fichiers/2024/20/2/1715678476-question-empire.jpg" ,
        answers:[
            {text:"Le peplos ?" ,correct:true },
            {text:"La robe à la française ? " ,correct:false },
            {text:"Le pouf ?" ,correct:false },
        ]
    },
    {
        question: "Qu'est-ce que sont les manches gigot ?",
        image: "https://image.noelshack.com/fichiers/2024/19/2/1715084245-photo-question-5.jpg" ,
        answers:[
            {text:"Des manches courtes ?" ,correct:false },
            {text:"Des manches volumineuses ?" ,correct:true },
            {text:"Des manches longues ?" ,correct:false },
        ]
    },
    {
        question: "Quel est l'ancêtre du soutien-gorge ?",
        image: "https://image.noelshack.com/fichiers/2024/20/1/1715606672-photo-question-all.png" ,
        answers:[
            {text:"Le bracelet ?" ,correct:false },
            {text:"Le corselet ?" ,correct:false },
            {text:"Le corset ?" ,correct:true },
        ]
    },
    {
        question: "Que sont les 'haut-de-formes' ?",
        image: "https://image.noelshack.com/fichiers/2024/19/2/1715084528-photo-question-6.jpg" ,
        answers:[
            {text:"Un chapeau ?" ,correct:true },
            {text:"Une veste ?" ,correct:false },
            {text:"Un gilet ?" ,correct:false },
        ]
    },
    {
        question: "Qu'est-ce qu'un Dandy ?",
        image: "https://image.noelshack.com/fichiers/2024/19/2/1715086976-photo-question-9.png" ,
        answers:[
            {text:"Un bonbon ?" ,correct:false },
            {text:"Une boisson ?" ,correct:false },
            {text:"Un homme très élégant ?" ,correct:true },
        ]
    },
    {
        question: "Quand les corsets s'attachent devant, on dit qu'ils sont mis ?",
        image: "https://image.noelshack.com/fichiers/2024/19/2/1715086332-photo-question-10.jpg" ,
        answers:[
            {text:"Par l'avant" ,correct:false },
            {text:"À la paresseuse" ,correct:true },
            {text:"Inversés" ,correct:false },
        ]
    },
    {
        question: "À quoi sert le panier ?",
        image: "https://image.noelshack.com/fichiers/2024/20/1/1715606788-photo-question-11.png" ,
        answers:[
            {text:"À ranger ses pommes" ,correct:false },
            {text:"À jouer au basket" ,correct:false },
            {text:"À soutenir les jupes" ,correct:true },
        ]
    },
    {
        question: "Qu'est-ce qu'une fraise ?",
        image: "https://image.noelshack.com/fichiers/2024/20/1/1715606672-photo-question-all.png" ,
        answers:[
            {text:"Un fruit délicieux ?" ,correct:false },
            {text:"Une rape ou une lime ?" ,correct:false },
            {text:"Un cole en dentelle rigide ?" ,correct:true },
        ]
    },
    {
        question: "De quelles époque datent 'les robes à la française' ?",
        image: "https://image.noelshack.com/fichiers/2024/20/2/1715678784-question-date.jpg" ,
        answers:[
            {text:"1780 → 1789" ,correct:true },
            {text:"1804 → 1815" ,correct:false },
            {text:"1914 → 1918" ,correct:false },
        ]
    }
];

const questionElement = document.getElementById("question");
const imageElement = document.getElementById("question-image");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML= "Suivant";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // Ajout de l'image correspondante
    imageElement.src = currentQuestion.image;
    imageElement.alt = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>  {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Vous avez ${score} réponses justes sur ${questions.length}.`;
    if (score > 5) {
        imageElement.src = "https://image.noelshack.com/fichiers/2024/19/2/1715072400-victoire.png";
    } else {
        imageElement.src = "https://image.noelshack.com/fichiers/2024/19/2/1715072400-defaite.png";
    }
    imageElement.alt = imageElement.src;
    nextButton.innerHTML = "Rejouer";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();
