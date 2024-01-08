const road = document.getElementById("road");
const motorcycle = document.getElementById("motorcycle");
const gameContainer = document.getElementById("game-container");
const scoreLabel = document.getElementById("score");

let isJumping = false;
let score = 0;

const jump = () => {
  if (!isJumping) {
    isJumping = true;
    let position = 8;

    const jumpInterval = setInterval(() => {
      if (position >= 116) {
        clearInterval(jumpInterval);

        const fallInterval = setInterval(() => {
          if (position === 8) {
            clearInterval(fallInterval);
            isJumping = false;
          } else {
            position -= 6;
            motorcycle.style.bottom = position + "px";
          }
        }, 20);
      } else {
        position += 6;
        motorcycle.style.bottom = position + "px";
      }
    }, 20);
  }
};

const animateMotorcycle = () => {
  const states = [
    "    __\n -,,,\\\\0\n(\\)===(\\)",
    "    __\n -,,,\\\\0\n(/)===(/)",
    "    __\n -,,,\\\\0\n(-)===(-)",
  ];

  let currentState = 0;

  return setInterval(() => {
    motorcycle.textContent = states[currentState];

    currentState = (currentState + 1) % states.length;
  }, 50);
};

const createObstacle = () => {
  const obstacles = [
    "   _____\n  /'|`` |\n (X)--(X)",
    "  _   _____ \n /_|_|_____|\n 0 0 00--00  ",
    "   , __  \n  _|/__|  \n (X)-(X) ",
  ];

  const randomObstacleIndex = Math.floor(Math.random() * obstacles.length);
  const obstacleText = obstacles[randomObstacleIndex];
  const obstacleColor = getRandomColor();

  const obstacle = document.createElement("div");
  obstacle.classList.add("obstacle");
  obstacle.textContent = obstacleText;
  obstacle.style.color = obstacleColor;
  obstacle.style.left = gameContainer.clientWidth + "px";
  gameContainer.appendChild(obstacle);

  let obstaclePosition = gameContainer.clientWidth;

  const moveObstacle = setInterval(() => {
    if (obstaclePosition < 0) {
      clearInterval(moveObstacle);
      gameContainer.removeChild(obstacle);
      score++;
      updateScore();
    } else {
      obstaclePosition -= 5;
      obstacle.style.left = obstaclePosition + "px";

      const motorcycleRect = motorcycle.getBoundingClientRect();
      const obstacleRect = obstacle.getBoundingClientRect();
      const collisionTolerance = 18;

      if (
        motorcycleRect.left + collisionTolerance < obstacleRect.right &&
        motorcycleRect.right - collisionTolerance > obstacleRect.left &&
        motorcycleRect.bottom - collisionTolerance > obstacleRect.top &&
        motorcycleRect.top + collisionTolerance < obstacleRect.bottom
      ) {
        alert("Game Over! Your Score: " + score);
        clearInterval(moveObstacle);
        location.reload();
      }
    }
  }, 10);
};

const updateScore = () => {
  scoreLabel.innerHTML =
    `<span class="score">Score: <strong>` +
    score +
    `</strong></span><br><br><span class="instructions"><span class="commands">Space</span> to swerve | <span class="commands">ESC</span> to exit.</span>`;
};

const fillRoad = () => {
  const roadWidth = gameContainer.clientWidth;
  const roadText = "#".repeat(roadWidth);
  road.textContent = roadText;
};

const getRandomColor = () => {
  const colors = ["#56f3e6", "#ff5c1b", "#04eca7"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault(); // Prevent scrolling on space key press
    jump();
  } else if (event.code === "Escape") {
    window.location.href = "index.html";
  }
});

animateMotorcycle();
fillRoad();
setInterval(createObstacle, 2000);
