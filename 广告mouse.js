let ads = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(32);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  
  // 在之前的位置绘制所有广告
  for (let i = 0; i < ads.length; i++) {
    let ad = ads[i];
    fill(255, 0, 0);
    text("广告", ad.x, ad.y);
  }
}

function mouseMoved() {
  // 将当前鼠标位置添加到广告数组中
  let ad = {
    x: mouseX,
    y: mouseY
  };
  ads.push(ad);
}