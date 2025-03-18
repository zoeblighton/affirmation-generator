function displayAffirmation(response) {
  new Typewriter("#affirmation", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateAffirmation(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "ad330884483abf7o091c0c43t8ea93ab";
  let prompt = `Generate a positive affirmation about ${instructionsInput.value}`;
  let context =
    "You are a positive affirmations expert and love to write daily affirmations. Your mission is to write a one-to-two sentence affirmation. Make sure to follow the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating affirmation");
  console.log(`prompt: ${prompt}`);
  console.log(`prompt: ${context}`);

  axios.get(apiUrl).then(displayAffirmation);
}

let affirmationFormElement = document.querySelector(
  "#affirmation-generator-form"
);
affirmationFormElement.addEventListener("submit", generateAffirmation);
