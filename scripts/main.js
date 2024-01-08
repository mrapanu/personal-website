(() => {
  const terminalElement = document.getElementById("terminal");
  let flagpwd = 0;

  const displayPasswordPrompt = () => {
    const passwordElement = document.createElement("input");
    const labelElement = document.createElement("span");

    passwordElement.type = "password";
    passwordElement.id = "passwordInput";
    labelElement.textContent = "Password:";

    terminalElement.appendChild(labelElement);
    terminalElement.appendChild(passwordElement);

    passwordElement.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const userPassword = passwordElement.value;
        const hashedPassword = sha1(userPassword);

        if (hashedPassword === "435b41068e8665513a20070c033b08b9c66e4332") {
          terminalElement.innerHTML +=
            '<br><span class="output">Correct password! Redirecting...</span><br>';
          setTimeout(() => {
            window.open("https://youtu.be/8GxqvnQyaxs", "_blank");
          }, 3000);
          document.getElementById("passwordInput").remove();
          displayPrompt();
        } else {
          terminalElement.innerHTML +=
            '<br><span class="output"><strong>Wrong password!</strong></span><br>';
          document.getElementById("bnr").innerHTML = ascii_banner_secret;
          document.getElementById("passwordInput").remove();
          displayPrompt();
        }
        flagpwd = 0;
      }
    });

    passwordElement.focus();
  };

  const displayPrompt = () => {
    const inputElement = document.createElement("input");
    const labelElement = document.createElement("span");

    inputElement.setAttribute("id", "userInput");
    labelElement.textContent = "$guest";

    terminalElement.appendChild(labelElement);
    terminalElement.appendChild(inputElement);

    inputElement.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const userInput = inputElement.value.toLowerCase();
        terminalElement.innerHTML += ` <b>${userInput}</b><br>`;

        switch (userInput) {
          case "help":
            help.forEach((member) => {
              terminalElement.innerHTML += member;
            });
            break;
          case "who":
            terminalElement.innerHTML += who;
            break;
          case "resumee":
            terminalElement.innerHTML +=
              '<span class="output">TO DO</span><br>';
            break;
          case "projects":
            terminalElement.innerHTML +=
              projects;
            break;
          case "ascii_banner":
            terminalElement.innerHTML += ascii_banner;
            break;
          case "clear":
            location.reload();
            break;
          case "email":
            terminalElement.innerHTML +=
              '<span class="output">Opening mail to <strong>"mrapanu@gmail.com"</strong> ...</span><br>';
            window.location.href = "mailto:mrapanu@gmail.com";
            break;
          case "joke":
            displayJoke(all_jokes);
            break;
          case "joke -p":
            displayJoke(jokes_programming);
            break;
          case "joke -d":
            displayJoke(dad_jokes);
            break;
          case "secret_files":
            flagpwd = 1;
            break;
          case "game":
            window.setTimeout(function () {
              window.location.href = "game.html";
            }, 2000);
            terminalElement.innerHTML +=
              '<span class="output">Starting the game...</span><br>';
            break;
          default:
            terminalElement.innerHTML +=
              '<span class="output">Command not recognized. Type <span class="commands">"help"</span> for available commands.</span><br>';
            break;
        }

        document.getElementById("userInput").remove();
        flagpwd === 0 ? displayPrompt() : displayPasswordPrompt();
      }
    });

    inputElement.focus();
  };

  const displayJoke = (jokeArray) => {
    terminalElement.innerHTML +=
      jokeArray[Math.floor(Math.random() * jokeArray.length)];
  };

  window.onload = () => {
    terminalElement.innerHTML = ascii_banner;
    displayPrompt();
  };
})();
