// Constants
const QUESTIONS = [
  "I love spending time outdoors.",
  "I enjoy trying new foods.",
  "I believe in love at first sight.",
  "I value honesty above all else.",
  "I enjoy quiet evenings at home."
];

const DESIRED_ANSWERS = [5, 4, 3, 2, 1]; // True love's answers
const THRESHOLDS = {
  trueLove: 90,
  friends: 70,
  runAway: 50
};

// Initialize the form with questions
const form = document.getElementById("matchmakerForm");
QUESTIONS.forEach((question, index) => {
  const div = document.createElement("div");
  const label = document.createElement("label");
  label.textContent = `${index + 1}. ${question}`;
  const input = document.createElement("input");
  input.type = "number";
  input.min = 1;
  input.max = 5;
  input.required = true;
  input.name = `question${index + 1}`;
  div.appendChild(label);
  div.appendChild(input);
  form.appendChild(div);
});

// Validate user input
function validateInput(value) {
  return value >= 1 && value <= 5;
}

// Calculate compatibility score
function calculateCompatibility() {
  let totalScore = 0;
  QUESTIONS.forEach((_, index) => {
    const input = document.querySelector(`input[name="question${index + 1}"]`);
    const userAnswer = parseInt(input.value, 10);
    if (!validateInput(userAnswer)) {
      alert(`Please enter a valid number (1-5) for question ${index + 1}.`);
      input.focus();
      return;
    }
    const compatibilityScore = Math.abs(userAnswer - DESIRED_ANSWERS[index]);
    totalScore += compatibilityScore;
  });

  const finalScore = 100 - totalScore;
  displayResults(finalScore);
}

// Display results
function displayResults(score) {
  const compatibilityScore = document.getElementById("compatibilityScore");
  const closingRemark = document.getElementById("closingRemark");

  compatibilityScore.textContent = `Your Compatibility Score: ${score}%`;

  if (score >= THRESHOLDS.trueLove) {
    closingRemark.textContent = "❤❤❤ True Love! You're a perfect match! ❤❤❤";
  } else if (score >= THRESHOLDS.friends) {
    closingRemark.textContent = "😊 Friends! You might make a great pair! 😊";
  } else if (score >= THRESHOLDS.runAway) {
    closingRemark.textContent = "🤔 Hmm... Maybe just friends? 🤔";
  } else {
    closingRemark.textContent = "🏃‍♂️ Run away! It's not meant to be. 🏃‍♀️";
  }
}

// Event listener for the calculate button
document.getElementById("calculateButton").addEventListener("click", calculateCompatibility);
