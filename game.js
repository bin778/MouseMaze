let gameStart = false;
const gameArea = document.getElementById('game-area');
const start = document.getElementById('start');
const goal = document.getElementById('goal');
const wallsContainer = document.getElementById('walls');
goal.style.display = 'none';

let mouseX = 0,
  mouseY = 0;

// HTML 태그에서 설정값 읽기
const wallCount = parseInt(document.documentElement.dataset.wallCount) || 10;
const successUrl = document.documentElement.dataset.successUrl || 'game3.html';

// 벽 요소 생성
for (let i = 0; i < wallCount; i++) {
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

// 마우스 좌표 저장
document.addEventListener('mousemove', (event) => {
  if (!gameStart) return;
  mouseX = event.clientX;
  mouseY = event.clientY;
});

// 영역 이탈 시 게임 오버
gameArea.addEventListener('mouseleave', () => {
  if (gameStart) gameOver();
});

// 도착 시 성공
goal.addEventListener('mouseover', () => {
  if (gameStart) {
    gameStart = false;
    start.style.display = 'block';
    goal.style.display = 'none';
    location.href = successUrl;
  }
});

// 충돌 체크
function checkCollision() {
  if (!gameStart) return;
  walls.forEach((wall) => {
    const rect = wall.getBoundingClientRect();
    if (mouseX >= rect.left && mouseX <= rect.right && mouseY >= rect.top && mouseY <= rect.bottom) {
      gameOver();
    }
  });
}

// 게임 오버 처리
function gameOver() {
  gameStart = false;
  start.style.display = 'block';
  goal.style.display = 'none';
  location.href = 'gameover.html';
}

// 주기적 충돌 체크
setInterval(checkCollision, 10);
