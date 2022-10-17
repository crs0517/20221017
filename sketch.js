function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  rectMode(CENTER)
  background("#CC2B8");
  noFill()
  stroke("#AD6A62")
  strokeWeight(3)
  for(var a=0;a <windowWidth/50;a++){
   for( var b=0;b <windowHeight/50;b++){
    rect(25+(a*50),25+(b*50),(mouseX+mouseY)/10) //畫8個直徑為50的圓
    ellipse(25+(a*50),25+(b*50),(mouseX-mouseY)/10) //畫8個邊長為50的正方形
    ellipse(25+(a*50),25+(b*50),(mouseY-mouseX)/10) //畫8個邊長為50的正方形
    ellipse(50+(a*50),50+(b*50),frameCount%500) //畫8個直徑為20的小圓
  }
  }
}