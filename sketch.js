
let cDiam1x = 0;
let cDiam1y = 0;
let cDiam2x =11;
let cDiam2y = 12;
let cDiam3x = 15;
let cDiam3y = 25;

let Spacing = 30;
let Spacing2 = 10;
let Spacing3 = 15;


function setup() {
  createCanvas(800, 800);
  noStroke();
}

function draw() {
  background(255, 255, 255);
  randomSeed(0);

    for (let x1 = cDiam1x; x1 <= width; x1 += Spacing) {
      for (let y1 = cDiam1y; y1 <= height; y1 += Spacing) {
        xVar = random(-2,2);
        yVar = random(-2,2);
        fill(234, 12, 12);
        circle(x1 + xVar, y1 + yVar, 15);
      }
    }

    for (let x2 = cDiam2x; x2 <= width; x2 += Spacing2) {
      for (let y2 = cDiam2y; y2 <= height; y2 += Spacing) {
        xVar = random(-3,3);
        yVar = random(-3,3);
        fill(234, 12, 12);
        circle(x2 + xVar, y2 + yVar, 10);
      }
    }
       
     for (let x3 = cDiam3x; x3 <= width; x3 += Spacing) {
      for (let y3 = cDiam3y; y3 <= height; y3 += Spacing3) {
            xVar = random(-2,2);
            yVar = random(-2,2);
            fill(234, 12, 12);
            ellipse(x3 + xVar, y3 + yVar, 9, 7);
          }
        }
  }
        
    