let numbers = [];
let totalNumbers = 0;
let countdown = 10;
let countdownInterval;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(102);
  textAlign(CENTER, CENTER);

  // 开始倒计时
  startCountdown();
}

function draw() {
  background(0); // 黑色背景
  fill(255); // 白色文字
  
  // 显示倒计时
  if (countdown >= 0) { 
    text(countdown, width / 2, height / 2); // 倒计时数字从10到0
  } else if (countdown === '') {
    text('0', width / 2, height / 2); // 倒计时结束后显示数字 0
  }
  
  // 显示随机跳动的数字
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].update();
    numbers[i].display();
  }
}

// 开始倒计时
function startCountdown() {
  countdownInterval = setInterval(updateCountdown, 1000);
}

// 更新倒计时
function updateCountdown() {
  countdown--;
  if (countdown < 0) {
    clearInterval(countdownInterval);
    countdown = ''; // 倒计时结束后设为空字符串
    // 倒计时结束后开始随机跳动数字
    startJumpingNumbers();
  }
}

// 开始随机跳动数字
function startJumpingNumbers() {
  setInterval(addNumber, 100); // 每100毫秒添加一个数字
}

// 添加随机跳动的数字
function addNumber() {
  if (totalNumbers >= 500) {
    return; // 数字数量达到500时停止添加
  }
  let value = floor(random(1, 10)); // 随机数字（1到9）
  if (value !== 0) { // 如果随机数字不是0，才添加到数组中
    numbers.push(new JumpingNumber(random(width), random(height), value));
    totalNumbers++;
  }
}

class JumpingNumber {
  constructor(x, y, value) {
    this.x = x;
    this.y = y;
    this.value = value; // 传入的数字值
    this.speedX = random(-5, 5);
    this.speedY = random(-5, 5);
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > width) {
      this.speedX *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.speedY *= -1;
    }
  }

  display() {
    textSize(32);
    text(this.value, this.x, this.y);
  }
}