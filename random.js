let a,b,c;
let X,Y,R,G,B;
let circleSize;

function setup() {
 createCanvas(windowWidth, windowHeight);
  int(x=960*2,y=1280);
}

function mousePressed(){
  a=-300;
  b=-500;
  c=-700;
}

function draw() {
  speed=0.1;
  R=random(0,255);
  G=random(0,255);
  B=random(0,255);
  X=random(0,x);
  Y=random(0,y);
  times=random(0,5);
  
  circleSize=random(10,110);
    
  background(255,230,240,10);
  noStroke();
  fill(255,255,255,100);
  circle(a,0.5*y,circleSize*1.5);
  a+=1;
  circle(b,0.75*y,circleSize*0.15);
  b+=3;
  circle(c,y,circleSize*1.5);
  c+=1;
  circle(a,0,circleSize*0.5);
  a+=3;
  circle(b,0.75*y,circleSize*3);
  b+=7;
  circle(c,0.25*y,circleSize*5);
  c+=5;
  
  fill(R,G,B,200);
  circle(X,Y,circleSize*5);
  fill(G,B,R,5);
  circle(Y,X,circleSize*5);
  fill(255,255,255,230);
  circle(mouseX,mouseY,circleSize*3);
}