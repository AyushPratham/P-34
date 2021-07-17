var dog;
var database, position;
var food = 0;

function preload(){
  dogImage = loadImage("images/dogImg.png")
  dogImage2 = loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
	createCanvas(800, 700);
  dog = createSprite(200,200,10,10);
  dog.addImage(dogImage);
  dog.scale = 0.2;
  var node = database.ref("Food");
  node.on("value", readposition);
}

function draw() {  
  background("green");

  if(keyDown(UP_ARROW)){
    writeFood(food)
    dog.addImage(dogImage2);
}
  drawSprites();
}

function writeFood(x){
  if(x < 0){
    x= 0;
  }else{
    x= x-1
  }
  database.ref("/").update({
    Food: x
  })
}

function readposition(data){
  food = data.val();
}

