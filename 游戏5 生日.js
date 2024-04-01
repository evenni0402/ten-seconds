let balloons = []; // 存储气球的数组

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  
  // 添加新气球
  if (random(1) < 0.05) {
    let x = random(width); // 随机 x 坐标
    let c = color(random(255), random(255), random(255)); // 随机颜色
    let b = new Balloon(x, height, c); // 创建气球对象
    balloons.push(b); // 将气球对象添加到数组中
  }
  
  // 更新和显示气球
  for (let i = balloons.length - 1; i >= 0; i--) {
    balloons[i].update();
    balloons[i].display();
    if (balloons[i].offScreen()) {
      balloons.splice(i, 1); // 如果气球移出屏幕，则从数组中删除
    }
  }
}

// 气球类
class Balloon {
  constructor(x, y, c) {
    this.x = x; // 气球 x 坐标
    this.y = y; // 气球 y 坐标
    this.diameter = random(20, 50); // 气球直径
    this.speed = random(1, 4); // 气球上升速度
    this.color = c; // 气球颜色
  }
  
  // 更新气球位置
  update() {
    this.y -= this.speed; // 气球上升
  }
  
  // 显示气球
  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter); // 绘制气球
  }
  
  // 判断气球是否移出屏幕
  offScreen() {
    return this.y < -this.diameter;
  }
}