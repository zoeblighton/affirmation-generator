function generateAffirmation(event) {
  event.preventDefault();

  new Typewriter("#affirmation", {
    strings:
      "Relax and enjoy life. Whatever I need to know is revealed to me at exactly the right time.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let affirmationFormElement = document.querySelector(
  "#affirmation-generator-form"
);
affirmationFormElement.addEventListener("submit", generateAffirmation);
