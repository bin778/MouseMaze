let gameStart = false;
const gameArea = document.getElementById('game-area');
const start = document.getElementById('start');
const goal = document.getElementById('goal');
const wallsContainer = document.getElementById('walls');
goal.style.display = 'none';

// 벽 요소 생성
for (let i = 0; i < 4; i++) {
  const wall = document.createElement('div');
  wall.classList.add('wall');
  wallsContainer.appendChild(wall);
}
const walls = document.querySelectorAll('.wall');

// 출발 버튼을 클릭하면 게임 시작
start.addEventListener('click', () => {
  gameStart = true;
  start.style.display = 'none';
  goal.style.display = 'block';
});

// 벽에 닿으면 게임 오버
walls.forEach((wall) => {
  wall.addEventListener('mouseover', () => {
    if (gameStart) {
      gameOver();
    }
  });
});

// 배경을 벗어나면 게임 오버
gameArea.addEventListener('mouseleave', () => {
  if (gameStart) {
    gameOver();
  }
});

// 도착 버튼에 갖다대면 성공
goal.addEventListener('mouseover', () => {
  if (gameStart) {
    gameStart = false;
    start.style.display = 'block';
    goal.style.display = 'none';
    location.href = 'game2.html';
  }
});

function gameOver() {
  gameStart = false;
  start.style.display = 'block';
  goal.style.display = 'none';
  location.href = 'gameover.html';
}
