const flashcards = [
    {
        question: "What is a closure in JavaScript?",
        answer:
        "A closure is a function that has access to its own scope, the outer function’s scope, and the global scope.",
    },
    {
        question: "Difference between var, let, and const?",
        answer:
        "var is function-scoped, let and const are block-scoped. const values cannot be reassigned.",
    },
    {
        question: "What is the event loop?",
        answer:
        "The event loop allows JavaScript to perform non-blocking operations by offloading tasks and pushing callbacks when ready.",
    },
    {
        question: "What is hoisting?",
        answer:
        "Hoisting is JavaScript's behavior of moving declarations to the top of the scope before code execution.",
    },
    {
        question: "Explain 'this' keyword in JavaScript.",
        answer:
        "'this' refers to the object it belongs to, determined by how a function is called.",
    },
];

let current = 0;
const cardInner = document.getElementById("card-inner");
const cardFront = document.getElementById("card-front");
const cardBack = document.getElementById("card-back");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

function updateCard() {
    cardFront.textContent = flashcards[current].question;
    cardBack.textContent = flashcards[current].answer;
    progressBar.style.width = ((current + 1) / flashcards.length) * 100 + "%";
    progressText.textContent = `${current + 1} / ${flashcards.length}`;
    cardInner.classList.remove("flipped");
}

document.getElementById("flashcard").addEventListener("click", () => {
    cardInner.classList.toggle("flipped");
});

document.getElementById("next-btn").addEventListener("click", () => {
    current = (current + 1) % flashcards.length;
    updateCard();
});

document.getElementById("prev-btn").addEventListener("click", () => {
    current = (current - 1 + flashcards.length) % flashcards.length;
    updateCard();
});

updateCard();
