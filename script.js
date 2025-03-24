// Constants
const DESIRED_ANSWERS = ["agree", "disagree", "agree"]; // True love's answers
const THRESHOLDS = {
  trueLove: 90,
  friends: 70,
  runAway: 50
};

// Calculate compatibility score
function calculateCompatibility() {
  let totalScore = 0;
  const questions = document.querySelectorAll(".question select");

  questions.forEach((select, index) => {
    const userAnswer = select.value;
    if (!userAnswer) {
      alert(`Please select an answer for question ${index + 1}.`);
      select.focus();
      return;
    }

    // Compare user's answer with true love's answer
    if (userAnswer === DESIRED_ANSWERS[index]) {
      totalScore += 33.33; // Each question contributes 33.33% to the total score
    }
  });

  displayResults(totalScore);
}

// Display results
function displayResults(score) {
  const compatibilityScore = document.getElementById("compatibilityScore");
  const closingRemark = document.getElementById("closingRemark");

  compatibilityScore.textContent = `Your Compatibility Score: ${score.toFixed(2)}%`;

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
