var theButton = function() {
  fill(255, 250, 0);
  rect(900, 600, 200, 100);
  fill(0, 0, 0);
  textSize(25);
  text("Start!", 950, 650);
};
var theButton2 = function() {
  
  
  textSize(25);
  text("Congratulations, you completed the maze!", 950, 650,5);
};
var theButton3 = function() {
  fill(255, 250, 0);
  rect(900, 200, 200, 100);
  fill(0, 0, 0);
  textSize(25);
  text("Hard Mode", 950, 650);
};
var Drawings = function() {
  background(0, 206, 255);
  fill(0, 216, 0);
  noStroke();
  rect(0, 700, 1250, 200);
  fill(255, 255, 0);
  ellipse(1220, 50, 200, 200);
  stroke(0, 0, 0);
  strokeWeight(1);
  //frame
  rect(220, 220, 1, 400);
  rect(220, 620, 200, 1);
  rect(255, 220, 165, 1);
  rect(220, 220, 10, 1);
  rect(420, 220, 1, 375);
  rect(220, 420, 165, 1);
  rect(410, 420, 10, 1);
  rect(320, 220, 1, 80);
  rect(320, 325, 1, 95);
  // section 1 (top right)
  rect(320, 260, 20, 1);
  rect(365, 260, 55, 1);
  rect(365, 260, 1, -20);
  rect(366, 240, 40, 1);
  rect(390, 300, 30, 1);
  rect(390, 300, 1, 30);
  rect(391, 330, -21, 1);
  rect(370, 330, 1, -50);
  rect(370, 280, 35, 1);
  rect(340, 220, 1, 25);
  //section 2 (bottom left of top half)
  rect(320, 325, 20, 1);
  rect(220, 325, 40, 1);
  rect(260, 325, 1, 40);
  rect(260, 365, 5, 1);
  rect(290, 365, 30, 1);
  rect(220, 385, 70, 1);
  rect(290, 365, 1, 5);
  rect(315, 385, 5, 1);
  rect(270, 405, 1, 15);
  rect(270, 405, 30, 1);
  //section 3 (top left)
  rect(270, 250, 50, 1);
  rect(240, 420, 9, 1);
  rect(250, 280, 70, 1);
  rect(220, 280, 5, 1);
  rect(250, 280, 1, 15);
  rect(220, 315, 31, 1);
  //section4 bottom right of top half
  rect(320, 325, 31, 1);
  rect(420, 350, -65, 1);
  rect(330, 325, 1, 26);
  //section5 bottom half of maze
  rect(370, 450, 50, 1);
  rect(345, 500, 1, -78);
  rect(420, 530, -150, 1);
  rect(346, 500, -50, 1);
  rect(220, 515, 50, 1);
  rect(250, 515, 50, 1);
  //ending square
  rect(420, 620, 25, 1);
  rect(420, 595, 25, 1);
  //Only rectangles above this have collisions
  fill(0, 0, 0);
  text("-W=Up", 10, 20, 5);
  text("-S=Down", 10, 100, 5);
  text("-D=Right", 10, 140, 5);
  text("-A=Left", 10, 60, 5);
  text("-Q=Stop", 10, 180, 5);
  text("Hold-Z-and-use-controls-to-move-on-github", 10, 850, 2);
}
var CollisionDetector = function() { 
  if (xPos > 220 && xPos < 220 + 5
    && yPos > 220 && yPos < 220+400) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 220 && xPos < 220 +350
    && yPos > 620 && yPos < 620 + 5) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 595 && xPos < 595 + 25
    && yPos > 620 && yPos < 620 + 5) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 620 && xPos < 620 + 5
    && yPos > 220 && yPos < 220 + 400) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 255 && xPos < 255 + 365
    && yPos > 220 && yPos < 220 + 5) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 220 && xPos < 220 + 10
    && yPos > 220 && yPos < 220 + 5) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 420 && xPos < 420 + 5
    && yPos > 220 && yPos < 220 + 375) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 220 && xPos < 220 + 165
    && yPos > 420 && yPos < 420 + 3) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 410 && xPos < 410 + 10
    && yPos > 420 && yPos < 420 + 5) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 320 && xPos < 320 + 5
    && yPos > 220 && yPos < 220 + 80) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 320 && xPos < 320 + 5
    && yPos > 325 && yPos < 325 + 95) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 320 && xPos < 320 + 20
    && yPos > 260 && yPos < 260 + 5) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 365 && xPos < 365 + 55
    && yPos > 260 && yPos < 260 + 5) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 365 && xPos < 365 + 5
    && yPos > 240 && yPos < 260) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 366 && xPos < 366 + 40
    && yPos > 240 && yPos < 240 + 5) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 390 && xPos < 390 + 30
    && yPos > 300 && yPos < 300 + 5) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 390 && xPos < 390 + 5
    && yPos > 300 && yPos < 300 + 30) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 370 && xPos < 391
    && yPos > 330 && yPos < 330 + 5) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 370 && xPos < 375
    && yPos > 280 && yPos < 330) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 370 && xPos < 405
    && yPos > 280 && yPos < 280 + 5) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 340 && xPos < 345
    && yPos > 220 && yPos < 220 + 25) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 320 && xPos < 340
    && yPos > 325 && yPos < 325 + 5) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 220 && xPos < 260
    && yPos > 325 && yPos < 325 + 5) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 260 && xPos < 260 + 5
    && yPos > 325 && yPos < 365 + 3) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 260 && xPos < 265
    && yPos > 365 && yPos < 365 + 5) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 290 && xPos < 320
    && yPos > 365 && yPos < 365 + 5) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 220 && xPos < 290
    && yPos > 385 && yPos < 385 + 5) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 290 && xPos < 290+3
    && yPos > 365 && yPos < 365 + 5) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 315 && xPos < 315 + 5
    && yPos > 385 && yPos < 330 + 3) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 270 && xPos < 270 + 5
    && yPos > 405 && yPos < 405 + 15) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 270 && xPos < 300
    && yPos > 405 && yPos < 405 + 5) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 270 && xPos < 320
    && yPos > 250 && yPos < 250 + 5) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 240 && xPos < 249
    && yPos > 420 && yPos < 420 + 5) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 250 && xPos < 320
    && yPos > 280 && yPos < 280 + 5) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 220 && xPos < 225
    && yPos > 280 && yPos < 280 + 5) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 250 && xPos < 250 + 5
    && yPos > 280 && yPos < 280 + 15) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 220 && xPos < 251
    && yPos > 315 && yPos < 315 + 5) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 320 && xPos < 351
    && yPos > 325 && yPos < 325 + 5) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 355 && xPos < 420
    && yPos > 350 && yPos < 350 + 5) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 330 && xPos < 330 + 5
    && yPos > 325 && yPos < 325 + 26) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 370 && xPos < 420
    && yPos > 450 && yPos < 450 + 5) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 345 && xPos < 345 + 5
    && yPos > 422 && yPos < 500) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 270 && xPos < 420
    && yPos > 530 && yPos < 530 + 5) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 296 && xPos < 346
    && yPos > 500 && yPos < 500 + 5) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 220 && xPos < 270
    && yPos > 515 && yPos < 515 + 5) {
    xPos = 240;
    yPos = 200;
  }
  if (xPos > 250 && xPos < 300
    && yPos > 525 && yPos < 515 + 5) {
    xPos = 240;
    yPos = 200;
  }
  // Making second button appear
  if (xPos > 420 && xPos < 445
    && yPos > 595 && yPos < 621) {
    if (keyCode == 68) {
      xPos -= PLAYER_MOVE_SPEED;
    };
    currentScene = 2;
    theButton2();
  }
  if (xPos > 420 && xPos < 420 + 5
    && yPos > 595 && yPos < 620) {
    xPos = 240;
    yPos = 200;
  }
}
var currentScene = 1

  var PLAYER_MOVE_SPEED = 2;

var xPos = 245;
var yPos = 200;

  
var song2;

function preload() {
  song2 = loadSound('Assests/sound/bensound-summer.mp3');
 
}  

function setup() {
 

 song2.play();

  createCanvas(1250, 950);
  background(0, 206, 255);
  fill(0, 216, 0);
  noStroke();
  rect(0, 700, 1250, 200);
  fill(255, 255, 0);
  ellipse(1220, 50, 200, 200);
  stroke(0, 0, 0);
  strokeWeight(1);

  theButton();
};

mouseClicked = function() {

  
  if (mouseX > 900 && mouseX < 900 + 200
    && mouseY > 600 && mouseY < 700) {

    Drawings();
    noStroke();
    fill(255, 0, 239);
    ellipse(xPos, yPos, 10, 10);

    //character temporary replacement
  }
};
var movePlayerDown = function() {
  yPos += PLAYER_MOVE_SPEED;
}
var movePlayerRight = function() {
  xPos += PLAYER_MOVE_SPEED;
}
var movePlayerUp = function() {
  yPos -= PLAYER_MOVE_SPEED;
}
var movePlayerLeft = function() {
  xPos -= PLAYER_MOVE_SPEED;
}
var stopMovement = function() {
  xPos = xPos;
  yPos = yPos;
}
function mouseClicked() {
  if (currentScene = 2
    && mouseX > 900 && mouseX < 900 + 200
    && mouseY > 600 && mouseY < 700) {
    fill(160, 115, 56);
    rect(0, 700, 1250, 200);
    theButton();
    theButton3();
  }
}

function draw() {

  if (keyIsPressed) {

    if (keyCode == 83) {
      Drawings();
      //moving the character
      movePlayerDown();
    }
    if (keyCode == 68) {
      Drawings();
      //moving the character
      movePlayerRight();
    }
    if (keyCode == 87) {
      Drawings();
      //moving the character
      movePlayerUp();
    }
    if (keyCode == 65) {
      Drawings();
      //moving the character
      movePlayerLeft();
    }
    if (keyCode == 81) {
      stopMovement();
    }
    CollisionDetector();


    noStroke();
    fill(255, 0, 239);
    ellipse(xPos, yPos, 10, 10);
  }
}
