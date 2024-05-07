
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
        question: "Que sont les basques ?",
        image:"https://image.noelshack.com/fichiers/2024/19/2/1715073249-photo-question-1.jpg" ,
        answers:[
            {text:"Des cheveux ?" ,correct:false },
            {text:"Des foulards ?" ,correct:false },
            {text:"L'arrière du frac ?" ,correct:true },
        ]
    },
    {
        question: "Qu'est-ce qu'une fraise ?",
        image: "https://image.noelshack.com/fichiers/2024/19/2/1715074513-photo-question-2.jpg" ,
        answers:[
            {text:"Un fruit délicieux ?" ,correct:true },
            {text:"Un col en dentelle rigide ?" ,correct:true },
            {text:"Une robe ?" ,correct:false },
        ]
    },
    {
        question: "Qu'est-ce qu'un busc ?",
        image: "https://image.noelshack.com/fichiers/2024/19/2/1715076401-personnage.png" ,
        answers:[
            {text:"Un parfum fort ?" ,correct:false },
            {text:"Un buisson ?" ,correct:false },
            {text:"Un plastron ?" ,correct:true },
        ]
    },
    {
        question: "À quoi sert le panier ?",
        image: "https://image.noelshack.com/fichiers/2024/19/2/1715084123-photo-question-4.png" ,
        answers:[
            {text:"À ranger ses pommes ?" ,correct:false },
            {text:"À soutenir les jupes " ,correct:true },
            {text:"À jouer au basket ?" ,correct:false },
        ]
    },
    {
        question: "Que sont les crevés ?",
        image: "https://image.noelshack.com/fichiers/2024/19/2/1715084245-photo-question-5.jpg" ,
        answers:[
            {text:"Des chaussures trouées ?" ,correct:false },
            {text:"Des gens fatigués ?" ,correct:false },
            {text:"Un assemblage de tissus ?" ,correct:true },
        ]
    },
    {
        question: "À quoi servent les vertugadins ?",
        image: "https://image.noelshack.com/fichiers/2024/19/2/1715084528-photo-question-6.jpg" ,
        answers:[
            {text:"À élargir sa jupe ?" ,correct:true },
            {text:"À ne pas prendre de chaise ?" ,correct:false },
            {text:"À ne pas avoir de ventre?" ,correct:false },
        ]
    },
    {
        question: "D'ou vient le mot 'cordonier' ?",
        image: "https://image.noelshack.com/fichiers/2024/19/2/1715085520-photo-question-7.jpg" ,
        answers:[
            {text:"Des cordons, ancêtres des lacets ?" ,correct:false },
            {text:"De la ville de Cordoue ?" ,correct:true },
            {text:"D'une déformation des mots 'cors au pied' ?" ,correct:false },
        ]
    },
    {
        question: "Qu'est-ce qu'une Redingote ?",
        image: "https://image.noelshack.com/fichiers/2024/19/2/1715085770-photo-question-8.jpg" ,
        answers:[
            {text:"Une veste pour homme ?" ,correct:true },
            {text:"Élement se trouvant sur les manches ?" ,correct:false },
            {text:"Une paire de chaussure ?" ,correct:false },
        ]
    },
    {
        question: "Qu'est-ce qu'un Dandy ?",
        image: "https://image.noelshack.com/fichiers/2024/19/2/1715086976-photo-question-9.png" ,
        answers:[
            {text:"Un bonbon ?" ,correct:false },
            {text:"Un pantalon pour homme ?" ,correct:false },
            {text:"Un homme très élégant ?" ,correct:true },
        ]
    },
    {
        question: "Jusqu'ou descendaient les culottes des dames ?",
        image: "https://image.noelshack.com/fichiers/2024/19/2/1715086332-photo-question-10.jpg" ,
        answers:[
            {text:"Jusqu'aux cuisses ?" ,correct:false },
            {text:"Jusqu'aux chevilles ?" ,correct:true },
            {text:"Jusqu'aux genoux?" ,correct:false },
        ]
    },
    {
        question: "La robe à tournure accentue ?",
        image: "https://image.noelshack.com/fichiers/2024/19/2/1715086741-photo-question-11.jpg" ,
        answers:[
            {text:"Les fesses ?" ,correct:true },
            {text:"Les bras ?" ,correct:false },
            {text:"Les chevilles?" ,correct:false },
        ]
    },
    {
        question: "Quel est l'ancêtre du soutien-gorge ?",
        image: "https://image.noelshack.com/fichiers/2024/19/2/1715084123-photo-question-4.png" ,
        answers:[
            {text:"Le bracelet ?" ,correct:false },
            {text:"Le corselet ?" ,correct:false },
            {text:"Le corset?" ,correct:true },
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
    nextButton.innerHTML= "Next";
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
    if (score > 10) {
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