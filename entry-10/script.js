
const letters = [
  "Remember to be kind to yourself.💕",
  "Every day is a new beginning.",
  "You are stronger than you think.",
  "You are the greatest project you will ever work on. Restart. Reset. Refocus",
  "Keep learning and growing.",
  "Life is not measured by time. It is measured by moments.",
  "Nothing in this world can affect you unless you give it power."
];

function openEnvelope() {
  const envelope = document.querySelector(".envelope");
  const letterDiv = envelope.querySelector(".letter");
  const randomMessage = letters[Math.floor(Math.random() * letters.length)];
  letterDiv.textContent = randomMessage;
  envelope.classList.add("open");
}

function closeEnvelope() {
  document.querySelector(".envelope").classList.remove("open");
}