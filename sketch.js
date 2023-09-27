
let cDiam1 = 15;
let cDiam2 = 10;
let cDiam3 = 20;

let Spacing = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 255, 255);

    for (let x1 = cDiam1; x1 <= width - x1; x1 += Spacing) {
      for (let y1 = cDiam1; y1 <= height - y1; y1 += Spacing) {
        xVar = random(-10,10);
        yVar = random(-10,10);
        fill(234, 12, 12);
        circle(x1 + xVar, y1 + yVar, cDiam1);



        //for (let x2 = cDiam2; x2 <= width; x2 += randSpace) {
         // for (let y2 = cDiam2; y2 <= width; y2 += randSpace) {
           // for (let x3 = cDiam3; x3 <= width; x3 += randSpace) {
             // for (let y3 = cDiam3; y3 <= width; y3 += randSpace) {
             // fill(234, 12, 12);
             // circle(x1, y1, cDiam1);
             // circle(x2, y2, cDiam2);
            //  circle(x3, y3, cDiam3);
            }
          }
        }
    