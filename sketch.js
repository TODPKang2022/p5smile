function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#04A777");
  
  // 스마일
  smile(width/2, height/2, width*0.3);
  
  // 문구
  textAlign(CENTER,CENTER);
  noStroke();
  textSize(width*0.05);
  textFont('Pacifico');
  fill("#291720");
  text("COMMING SOON",width/2,height/2+width*0.22);
}

function smile(x,y,size){
  noFill();
  stroke("#291720");
  strokeWeight(size*0.1);
  
  // 눈
  ellipse(x-size*0.3,y-size*0.1,size*0.25,size*0.25);
  ellipse(x+size*0.3,y-size*0.1,size*0.25,size*0.25);
  
  // 입
  arc(x,y-size*0.25,size*1.2,size*1.2,radians(45),radians(180-45));
}