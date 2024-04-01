let branches = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  branches.push(new Branch(width / 2, height, -PI / 2, 100, color(0, 255, 0)));
}

function draw() {
  background(255);
  for (let i = branches.length - 1; i >= 0; i--) {
    branches[i].update();
    branches[i].show();
    if (branches[i].finished) {
      branches.splice(i, 1);
    }
  }
}

function mouseMoved() {
  if (random(1) < 0.1) {
    for (let i = branches.length - 1; i >= 0; i--) {
      if (!branches[i].finished) {
        branches.push(branches[i].branchA());
        branches.push(branches[i].branchB());
        branches[i].finished = true;
      }
    }
  }
}

class Branch {
  constructor(x, y, angle, len, col) {
    this.pos = createVector(x, y);
    this.angle = angle;
    this.len = len;
    this.col = col;
    this.finished = false;
  }

  branchA() {
    let newAngle = this.angle + random(-PI / 6, PI / 6);
    let newLen = this.len * random(0.6, 0.8);
    let endX = this.pos.x + cos(newAngle) * newLen;
    let endY = this.pos.y + sin(newAngle) * newLen;
    return new Branch(endX, endY, newAngle, newLen, this.col);
  }

  branchB() {
    let newAngle = this.angle + random(-PI / 6, PI / 6);
    let newLen = this.len * random(0.6, 0.8);
    let endX = this.pos.x + cos(newAngle) * newLen;
    let endY = this.pos.y + sin(newAngle) * newLen;
    return new Branch(endX, endY, newAngle, newLen, this.col);
  }

  update() {
    if (mouseY < height / 2) {
      this.len += 1;
    }
  }

  show() {
    stroke(this.col);
    line(this.pos.x, this.pos.y, this.pos.x + cos(this.angle) * this.len, this.pos.y + sin(this.angle) * this.len);
  }
}