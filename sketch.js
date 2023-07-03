var r = 150; 
var g = 195;
var b = 215;
var r2 = 70;
var g2 = 100;
var b2 = 130;
var y = 50;
var w = 50;
var h = 50;

const Y_AXIS = 1;
let c1, c2;


function setup() {
  createCanvas(windowWidth,windowHeight);
 
}

function draw() {
  //sorry about the numbering of the colors
  c2 = color(r, g, b);
  c1 = color(r2, g2, b2);
  
  setGradient(0, 0, windowWidth, windowHeight, c1, c2, Y_AXIS);
  
  fill(250,245,160,155);
  noStroke();
  ellipse(windowWidth/2,y,w-5,h-5);
  
  fill(240,235,150,155);
  noStroke();
  ellipse(windowWidth/2,y,w,h);
  
  fill(240,235,150,35);
  noStroke();
  ellipse(windowWidth/2,y,w+10,h+10);
   
  fill(240,235,150,35);
  noStroke();
  ellipse(windowWidth/2,y,w+20,h+20);
  
  fill(240,235,150,35);
  noStroke();
  ellipse(windowWidth/2,y,w+35,h+35);
  
  if (r<=50){
    y=50;
    
    r = 150; 
    g = 195;
    b = 215;
    r2 = 70;
    g2 = 100;
    b2 = 130;
  }
  else {
    y=y+0.5;
    
    r2=r2-0.155;
    g2=g2-0.09;
    b2=b2-0.08;
    
    r=r-0.05;
    g=g-0.145;
    b=b-0.12;
  }
  
  
  
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } 
  
    
}
