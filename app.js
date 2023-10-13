const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

const form = document.querySelector(".quiz");
form.addEventListener("submit", handleForm);

function handleForm(e) {
  e.preventDefault();

  const results = [];

  const radioButtons = document.querySelectorAll("input[type='radio']:checked");

  radioButtons.forEach((radioButton, index) => {
    if (radioButton.value === responses[index]) {
      results.push(true);
    } else {
      results.push(false);
    }
    showResult(results);
    addColorBackGround(results);
  });
}

const mark = document.querySelector(".mark");
const help = document.querySelector(".help");
const titleResult = document.querySelector(".result h4");

function showResult(results) {
  const errorsNumber = results.filter((el) => el === false).length;

  switch (errorsNumber) {
    case 0:
      titleResult.textContent = "✔️ Bravo, c'est un sans faute ! ✔️";
      mark.innerHTML = "Score: <span> 5 / 5 </span>";
      help.textContent = "Quelle culture ...";
      break;
    case 1:
      titleResult.textContent = "✨ Vous y êtes presque ! ✨";
      mark.innerHTML = "Score: <span> 4 / 5 </span>";
      help.textContent =
        "Retentez une autre réponse dans la case rouge, puis re-validez !";
      break;
    case 2:
      titleResult.textContent = "✨ Encore un effort ... 👀";
      mark.innerHTML = "Score: <span> 3 / 5 </span>";
      help.textContent =
        "Retentez une autre réponse dans la case rouge, puis re-validez !";
      break;
    case 3:
      titleResult.textContent = "👀 Il reste quelques erreurs. 😭";
      mark.innerHTML = "Score: <span> 2 / 5 </span>";
      help.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      break;
    case 4:
      titleResult.textContent = "😭 Peut mieux faire ! 😭";
      mark.innerHTML = "Score: <span> 1 / 5 </span>";
      help.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      break;
    case 5:
      titleResult.textContent = "👎 Peut mieux faire ! 👎";
      mark.innerHTML = "Score: <span> 0 / 5 </span>";
      help.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      break;

    default:
      titleResult.innerHTML =
        "Cliquez sur <span>valider</span> pour voir les <span>résultats.</span>";
      break;
  }
}

const backGround = document.querySelectorAll(".question");

function addColorBackGround(results) {
  results.forEach((response, index) => {
    if (results[index]) {
      backGround[index].style.backgroundImage =
        "linear-gradient(to right, #a8ff78, #78ffd6)";
    } else {
      backGround[index].style.backgroundImage =
        "linear-gradient(to right, #f5567b, #fd674c)";
    }
  });
}
