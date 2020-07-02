var hr,min,sec;
function setup() {
  createCanvas(800,400);
  }

function draw() {
  background(0);
  angleMode(DEGREES);
  //creating the values  
  hr=hour();
  min=minute();
  sec=second();
 //mapping the values
 let h= map(hr %12,0,12,0,360);
 let m= map(min,0,60,0,360);
 let s= map(sec,0,60,0,360);
  translate(400,200);
  rotate(-90);
  //creating sec arc
        noFill();
        stroke(255,0,200);
        strokeWeight(8);
       translate(0,0);
      arc(0,0,300,300,0,s);
//craeting min arc
        noFill();
        stroke(255,255,0);
       strokeWeight(8);
       arc(0,0,320,320,0,m);
//creating hour arc
      noFill();
      stroke(255,0,0);
      strokeWeight(8);
     arc(0,0,340,340,0,h);
     //creating the sec hand
     push();
     rotate(s);
     stroke(255,0,200);
     strokeWeight(8);
   line(0,0,100,0);
   pop();
//creating min hand
   push();
     rotate(m);
     stroke(255,255,0);
     strokeWeight(8);
   line(0,0,120,0);
   pop();
//creating hour hand
   push();
     rotate(h);
     stroke(255,0,0);
     strokeWeight(8);
   line(0,0,140,0);
   pop();
  

 drawSprites();

}