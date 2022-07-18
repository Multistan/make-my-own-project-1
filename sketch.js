var path,dog,bone,rock,toy;
var pathImg,dogImg,boneImg,rockImg,toyImg;




function preload(){

pathImg = loadImage("Road.jpg");
dogImg = loadImage("dog.png");
boneImg = loadImage("bone 2.png");
toyImg = loadImage("toy.png");
rockImg = loadImage("rock.png");


}






function setup() {
  createCanvas(800,800);

path=createSprite(400,400);
path.addImage(pathImg);

dog = createSprite(250,625,20,20);
dog.addImage(dogImg)
dog.scale=0.15;

toy = createSprite(500,500,4,4)
toy.addImage(toyImg)
toy.scale=0.13

rock = createSprite(300,400,34,4)
rock.addImage(rockImg)
rock.scale=0.13

bone = createSprite(500,300,34,4)
bone.addImage(boneImg)
bone.scale=0.2


}

function draw() {
  background(255,255,255);  
  drawSprites();
}