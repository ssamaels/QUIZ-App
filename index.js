console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const toggleMode = document.querySelector('[data-js="dmbutton"]');
const answerButton = document.querySelector('[data-js="answer-button"]');

if (toggleMode) {
  toggleMode.addEventListener("click", () => {
    console.log("You switched modes");
    bodyElement.classList.toggle("dark");
  });
}

function toggleBookmarkColor(element) {
  element.classList.toggle("bkmrk-dark");
}

function toggleAnswer(button) {
  const answer = button.nextElementSibling;
  answer.classList.toggle("hidden");
  if (answer.classList.contains("hidden")) {
    button.textContent = "Show Answer";
  } else {
    button.textContent = "Hide Answer";
  }
}
