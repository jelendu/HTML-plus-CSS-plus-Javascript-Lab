function crossOut() {
  console.log("hello");
  const starWars = document.getElementById("starWars");
  starWars.classList.toggle("checked");
}

// intermittent portion
function revealMessage() {
  MessageChannel.classList.remove(`hide`);
  setTimeout(function () {
    MessageChannel.classList.add(`hide`);
  }, 1000);
}

function crossOffMovie() {
  revealMessage();
}

function deleteMovie() {
  revealMessage();
}

function crossOffMovie(event) {
  if (event.target.tagName === "starWars") {
    MessageChannel.textContent = event.target.textContent + "watched!";
  } else {
    MessageChannel.textContent = event.target.textContent + "added back!";
  }
}

function deleteMovie(event) {
  MessageChannel.textContent =
    event.target.parentNode.childNodes[0].textContent + "deleted!";
}
