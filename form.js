console.clear();

const form = document.querySelector('[data-js="form"]');
const newCardContainer = document.querySelector('[data-js="newCard"]');

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const questionInput = document.querySelector('[data-js="question"]');
  const answerInput = document.querySelector('[data-js="answer"]');
  const tagsInput = document.querySelector('[data-js="tags"]');

  const card = document.createElement("div");
  card.className = "item";

  const cardContent = document.createElement("div");
  const question = document.createElement("p");
  question.textContent = questionInput.value;
  const answer = document.createElement("p");
  answer.textContent = answerInput.value;
  const cardTags = document.createElement("div");
  cardTags.className = "tags";
  const tags = tagsInput.value;

  card.appendChild(cardContent);
  cardContent.appendChild(question);
  cardContent.appendChild(answer);
  cardContent.appendChild(cardTags);
  cardTags.innerHTML = tags;

  newCardContainer.appendChild(card);
  form.reset();
  event.target.elements.question.focus();
});

const questionField = document.querySelector('[data-js="question"]');
const answerField = document.querySelector('[data-js="answer"]');

const questionCountElement = questionField.parentElement.querySelector(
  '[data-js="amountLeft"]'
);
const answerCountElement = answerField.parentElement.querySelector(
  '[data-js="amountLeft"]'
);

[questionField, answerField].forEach((field) => {
  field.addEventListener("input", () => {
    const maxLength = parseInt(field.getAttribute("maxlength"));
    const remainingChars = maxLength - field.value.length;
    const countElement = field.parentElement.querySelector(
      '[data-js="amountLeft"]'
    );
    countElement.textContent = remainingChars;

    if (remainingChars === 1) {
      countElement.textContent = `${remainingChars} character left`;
    } else {
      countElement.textContent = `${remainingChars} characters left`;
    }
  });
});
