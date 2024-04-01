let a,b,c;
let X,Y,R,G,B;
let circleSize;

function setup() {
 createCanvas(windowWidth, windowHeight);
  int(x=960*2,y=1280*2
     );
}

function mousePressed(){
  a=-300;
  b=-500;
  c=-700;
}

function mousePressed(){
  
}

function draw() {
  
  speed=0.1;
  R=random(160,255);
  G=random(160,255);
  B=random(160,255);
  X=random(0,x);
  Y=random(0,y);
  size=random(0,50);
  
  circleSize=random(10,80);
    
  background(100,0,255,30);
  noStroke();
  
  fill(255,255,255,50);
  rect(mouseX,mouseY-
      2000,circleSize*0.05,circleSize*60);
  rect(mouseX,mouseY-
      2000,circleSize*60,circleSize*0.05);
  fill(0);
  circle(mouseX,mouseY,size);
    circle(Y,X,circleSize*0);
  strokeWeight(0,25);
  stroke(0);
  fill(255,255,255,0);
  circle(mouseX,mouseY,size*800);
}