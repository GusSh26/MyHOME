// flanniganable. “7 How to Use Sprite Groups P5.Play in P5.Js.” Www.youtube.com, 10 Nov. 2021, www.youtube.com/watch?v=ZVOzDEMtBU4.

// FreeSound.org. Relaxing Piano. Mifgus20, 21 Mar. 2022, freesound.org/people/Migfus20/sounds/625056/.

// Freesound.org. FIre_Burning_03. Foleyhaven, 16 Mar. 2022, freesound.org/people/Foleyhaven/sounds/624425/.

// “P5.Play.” Molleindustria.github.io, molleindustria.github.io/p5.play/docs/index.html.

// Train, Coding. “2.4: Random() Function - P5.Js Tutorial.” Www.youtube.com, www.youtube.com/watch?v=POn4cZ0jL-o&t=487s.

// ---. “17.1: Loading and Playing - P5.Js Sound Tutorial.” YouTube, 7 June 2016, www.youtube.com/watch?v=Pn1g1wjxl_0.

var music;
var burn;
var hero_sprite_sheet;
var fire_sprite_sheet;
var poop_sprite_sheet;
var dog_sprite_sheet;
var forward, right, left, back, still;
var f;
var flicker;
var puff;
var welcomeIMG;

function WELCOME(){
  
  fill(169, 200);
  noStroke();
  rectMode(CENTER);
  rect(width/2,600, 1100, 900, 50);

  imageMode(CENTER);
  image(welcomeIMG, width/2, 500);
  
  textSize(50);
    fill(255, 255, 0);
  textFont('Georgia');
    text("Welcome To...", 310, 230);
  
  
  textFont('arial');
  textAlign(CENTER);
  textSize(25);
  fill(0, 0, 0);
  text("1. Use arrow keys to move your hero", width/2, 900);
  
  textFont('arial');
  textAlign(CENTER);
  textSize(25);
  fill(0, 0, 0);
  text("2. Once all rubbish is cleared press RESET", width/2, 930);
  
  textFont('Georgia');
  textAlign(CENTER);
  fill(0, 0, 0);
  textStyle(BOLD);
  textSize(25);
  text("ENTER TO START", width/2, 850);
  
}

 // pre loading images, sounds and Frames for animations
function preload() {
  //   Images
  f = loadImage("assets/floor.png");
  c = loadImage("assets/couch.png");
  c2 = loadImage("assets/couch2.png");
  db = loadImage("assets/dogbed.png");
  p = loadImage("assets/plant.png");
  p2 = loadImage("assets/plant2.png");
  t = loadImage("assets/table.png");
  tv = loadImage("assets/tv.png");
  welcomeIMG = loadImage("assets/MYHOME.png")
 

  //Animations

  var frontframe = [
    { name: "hero_front", frame: { x: 10, y: 0, width: 100, height: 100 } },
    { name: "hero_front", frame: { x: 100, y: 0, width: 100, height: 100 } },
  ];

  var rightframe = [
    {
      name: "hero_right01",
      frame: { x: 200, y: 100, width: 100, height: 100 },
    },
    {
      name: "hero_right02",
      frame: { x: 100, y: 100, width: 100, height: 100 },
    },
  ];
  var leftframe = [
    { name: "hero_left01", frame: { x: 100, y: 200, width: 100, height: 100 } },
    { name: "hero_left02", frame: { x: 200, y: 200, width: 100, height: 100 } },
  ];
  var backframe = [
    { name: "hero_back01", frame: { x: 300, y: 210, width: 100, height: 100 } },
    { name: "hero_back02", frame: { x: 0, y: 300, width: 100, height: 100 } },
  ];

  var stillframe = [
    { name: "hero_still01", frame: { x: 0, y: 0, width: 100, height: 100 } },
    { name: "hero_still02", frame: { x: 0, y: 0.5, width: 100, height: 100 } },
  ];

  var poopinframe = [
    {
      name: "hero_still03",
      frame: { x: 100, y: 0.5, width: 100, height: 100 },
    },
    {
      name: "hero_still04",
      frame: { x: 100, y: 100, width: 100, height: 100 },
    },
    {
      name: "hero_still05",
      frame: { x: 200, y: 100, width: 100, height: 100 },
    },
  ];

  var flickerframe = [
    { name: "flicker_frame01", frame: { x: 0, y: 0, width: 100, height: 100 } },
    {
      name: "flicker_frame02",
      frame: { x: 100, y: 0, width: 100, height: 100 },
    },
    {
      name: "flicker_frame03",
      frame: { x: 200, y: 0, width: 100, height: 100 },
    },
    {
      name: "flicker_frame04",
      frame: { x: 300, y: 0, width: 100, height: 100 },
    },
    {
      name: "flicker_frame05",
      frame: { x: 0, y: 100, width: 100, height: 100 },
    },
  ];
  
  var dogpuff = [
    { name: "dogpuff_frame01", frame: { x: 0, y: 0, width: 200, height: 200 } },
    {
      name: "dogpuff_frame02",
      frame: { x: 0, y: 200, width: 220, height: 200 },
    },
    
  ];
  
  dog_sprite_sheet = loadSpriteSheet("assets/dog.png", dogpuff);
  Puff = loadAnimation(dog_sprite_sheet);
  Puff.frameDelay = 20;
  
   fire_sprite_sheet = loadSpriteSheet("assets/fire.png", flickerframe);
  flicker = loadAnimation(fire_sprite_sheet);
  flicker.frameDelay = 11;

  poop_sprite_sheet = loadSpriteSheet("assets/poop.png", poopinframe);
  poopin = loadAnimation(poop_sprite_sheet);
  poopin.frameDelay = 11;

  hero_sprite_sheet = loadSpriteSheet("assets/Hero.png", frontframe);
  forward = loadAnimation(hero_sprite_sheet);
  forward.frameDelay = 11;

  hero_sprite_sheet = loadSpriteSheet("assets/Hero.png", rightframe);
  right = loadAnimation(hero_sprite_sheet);
  right.frameDelay = 11;

  hero_sprite_sheet = loadSpriteSheet("assets/Hero.png", leftframe);
  left = loadAnimation(hero_sprite_sheet);
  left.frameDelay = 11;

  hero_sprite_sheet = loadSpriteSheet("assets/Hero.png", backframe);
  back = loadAnimation(hero_sprite_sheet);
  back.frameDelay = 11;

  hero_sprite_sheet = loadSpriteSheet("assets/Hero.png", stillframe);
  still = loadAnimation(hero_sprite_sheet);
  still.frameDelay = 11;
  
  music = loadSound('music/background.ogg');
burn = loadSound('music/burner.ogg');
}


// Adding in buttons, music and creating sprites 
function setup() {
  
  

  createCanvas(1600, 1400);

  resetBut = createButton("Reset");
  resetBut.mousePressed(resetsketch);

  music.loop();

  burn.loop();
  
  
  

  couch = createSprite(750, 200);
  couch.addImage(c);

  couch2 = createSprite(350, 600);
  couch2.addImage(c2);

  plant = createSprite(350, 200);
  plant.addImage(p);

  plant2 = createSprite(1190, 200);
  plant2.addImage(p2);

  plant3 = createSprite(1300, 1020);
  plant3.addImage(p);

  dogbed = createSprite(1400, 600);
  dogbed.addImage(db);
  
  dog = createSprite(1400,600);
  dog.addAnimation("Puff", Puff);

  table = createSprite(750, 600);
  table.addImage(t);
  table.scale = 1.1;

  person = createSprite(100, 284);
  person.addAnimation("forward", forward);
  person.addAnimation("right", right);
  person.addAnimation("left", left);
  person.addAnimation("back", back);
  person.addAnimation("still", still);
  person.scale = 2;
  
  resetsketch();
  
  
  

}
//functions for controlling sprite interactions
function disappear(fires){
  fires.visible = false;
  
}

function disappeared(poops){
  poops.visible = false;
}

//function which controls the placement of fire and poop sprites. This function is also used for resetting the game. 
  function resetsketch(){
    fires = new Group();
    poops = new Group();
    
    var h = random(1500);
    var g = random(1100);
  
    for (let i = 200; i <= width; i+=200) {
  fire = createSprite(i, random(1100));
  fire.addAnimation("flicker", flicker);
  fire.scale = 2.5
  fires.add(fire);
      
  poop = createSprite(i, random(1100));
  poop.addAnimation("poopin", poopin);
      poops.add(poop);
      

    }
    
    
  }



  


function draw() {
  background(f);
  move();
  drawSprites();
  fires.overlap(person, disappear);
  poops.overlap(person, disappeared);
  imageMode(CENTER);
  image(welcomeIMG, width/2, 1240, 400, 400)
  
  //I was unable to get the welcome screen to go away so I left it commented it out. Comment welcome screen in to see it. 
  //WELCOME(); 
  
  //if (keyCode === ENTER) {}
    
// fucntion for moving the hero sprite and changing the animations when keys are pressed
  function move() {
    if (keyDown(RIGHT_ARROW)) {
      person.setSpeed(2, 0);
      person.changeAnimation("right");
      person.animation.play();
    }
    if (keyDown(LEFT_ARROW)) {
      person.setSpeed(2, 180);
      person.changeAnimation("left");
      person.animation.play();
    }
    if (keyDown(UP_ARROW)) {
      person.setSpeed(2, 270);
      person.changeAnimation("back");
      person.animation.play();
    }
    if (keyDown(DOWN_ARROW)) {
      person.setSpeed(2, 90);
      person.changeAnimation("forward");
      person.animation.play();
    }
    if (keyDown(" ")) {
      person.setSpeed(0, 0);
      person.changeAnimation("still");
      person.animation.play();
    }
  }
}
