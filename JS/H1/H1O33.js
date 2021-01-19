function setup() {
  canvas = createCanvas(1000,450);
  canvas.parent('processing');
}

function draw() {
  for (var rij = 0;rij < 450;rij += 50) {
    for (var kolom = 0;kolom < 450;kolom += 50) {
      tekenTegel(kolom,rij,1);
    }
  }
  translate(100,0);
  tekenTegel(50,0,9);
}

function tekenTegel(x,y,s) {
  push();
  scale(s);
  translate(x,y);
  noStroke();
  fill('gold');
  triangle(0,0,25,25,50,0);  
  fill('darkred');
  triangle(50,0,25,25,50,50);
  fill('orange');
  triangle(0,50,25,25,50,50);
  fill('black');
  rect(0,0,25,25);
  fill('white');
  ellipse(19,19,10);
  pop();
}