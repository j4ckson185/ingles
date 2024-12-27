// script.js

// Elementos principais do DOM
const beginnerButton = document.getElementById('beginner');
const intermediateButton = document.getElementById('intermediate');
const advancedButton = document.getElementById('advanced');
const lessonSection = document.getElementById('lesson');
const lessonTitle = document.getElementById('lesson-title');
const lessonContent = document.getElementById('lesson-content');
const userInput = document.getElementById('user-input');
const submitButton = document.getElementById('submit');
const feedbackSection = document.getElementById('feedback');
const feedbackMessage = document.getElementById('feedback-message');

// Dados das aulas
const lessons = {
    beginner: {
        title: "Introdução ao Inglês",
        content: "Aprenda palavras básicas como 'Hello', 'Goodbye', e 'Thank you'. Pratique formando frases simples.",
        expectedAnswer: "hello",
    },
    intermediate: {
        title: "Frases Comuns",
        content: "Explore frases mais avançadas como 'How are you?' e 'What time is it?'. Forme perguntas completas.",
        expectedAnswer: "how are you",
    },
    advanced: {
        title: "Conversação Avançada",
        content: "Pratique temas complexos, como debates ou explicações detalhadas sobre tópicos específicos.",
        expectedAnswer: "conversation",
    },
};

// Função para iniciar uma lição
function startLesson(level) {
    const lesson = lessons[level];
    lessonTitle.textContent = lesson.title;
    lessonContent.textContent = lesson.content;
    lessonSection.classList.remove('hidden');
    feedbackSection.classList.add('hidden');
}

// Função para verificar a resposta do usuário
function checkAnswer(level) {
    const userAnswer = userInput.value.trim().toLowerCase();
    const correctAnswer = lessons[level].expectedAnswer;

    if (userAnswer === correctAnswer) {
        feedbackMessage.textContent = "Correto! Você está indo muito bem.";
        feedbackMessage.style.color = "green";
    } else {
        feedbackMessage.textContent = "Tente novamente. A resposta esperada era: " + correctAnswer;
        feedbackMessage.style.color = "red";
    }
    feedbackSection.classList.remove('hidden');
}

// Event Listeners
beginnerButton.addEventListener('click', () => startLesson('beginner'));
intermediateButton.addEventListener('click', () => startLesson('intermediate'));
advancedButton.addEventListener('click', () => startLesson('advanced'));

submitButton.addEventListener('click', () => {
    const currentLevel = lessonTitle.textContent.toLowerCase().includes("introdução")
        ? 'beginner'
        : lessonTitle.textContent.toLowerCase().includes("comuns")
        ? 'intermediate'
        : 'advanced';
    checkAnswer(currentLevel);
});
