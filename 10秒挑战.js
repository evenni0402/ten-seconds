let startTime; // 游戏开始时间
let pauseTime = 0; // 暂停时间
let gameStarted = false; // 游戏是否已经开始
let resetButton; // 重新开始按钮
let pauseButton; // 暂停按钮
let coolButton; // 爽一下按钮
let elapsedTime = 0; // 已经进行的时间

function setup() {
  createCanvas(windowWidth, windowHeight);
  resetButton = createButton('重新开始');
  resetButton.position(width / 2 - 200, height / 2 + 50); // 垂直位置增加50像素
  resetButton.size(100, 50); // 设置按钮大小
  resetButton.mousePressed(resetGame);
  
  pauseButton = createButton('点击暂停');
  pauseButton.position(width / 2 - 50, height / 2 + 50); // 垂直位置增加50像素
  pauseButton.size(100, 50); // 设置按钮大小
  pauseButton.mousePressed(pauseGame);
  
  coolButton = createButton('爽一下');
  coolButton.position(width / 2 + 100, height / 2 + 50); // 垂直位置增加50像素
  coolButton.size(100, 50); // 设置按钮大小
  coolButton.mousePressed(coolTime);
}

function draw() {
  background(220);
  textAlign(CENTER, CENTER);
  textSize(100); // 设置数字大小为100

  if (gameStarted) {
    if (!pauseTime) {
      // 如果游戏不处于暂停状态，更新游戏时间
      elapsedTime = (millis() - startTime) / 1000; // 获取游戏已经进行的时间（秒）
    }
    text(elapsedTime.toFixed(3), width / 2, height / 2); // 显示已经进行的时间，精确到小数点后三位
  }
}

function resetGame() {
  gameStarted = true; // 将游戏状态设置为开始
  startTime = millis(); // 重新设置游戏开始时间为当前时间
  pauseTime = 0; // 清空暂停时间
}

function pauseGame() {
  if (pauseTime) {
    // 如果游戏已经处于暂停状态，重新开始游戏
    resetGame();
  } else {
    // 如果游戏未处于暂停状态，暂停游戏
    pauseTime = millis(); // 记录暂停时间
  }
}

function coolTime() {
  elapsedTime = 10; // 将时间设置为10秒
}