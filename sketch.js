//Create variables here
var database;
var dog,happyDog;
var foodS,foodStock;
var feed,addFood;
var feedTime, lastFed;
var foodObj;
var readGameState,readState;
var bedroom,garden,washroom;

function preload()
{
	//load images here
  dog = loadImage("images/dogImg1.png");
  happyDog = loadImage("images/dogImg.png");
  bedroom = loadImage("images/Bed Room.png");
  garden = loadImage("images/Garden.png");
  washroom = loadImage("images/Wash Room.png");
}

function setup() {
	createCanvas(800,700);

  foodStock = database.ref('food');
  foodStock.on("value",readstock);

  readState = database.ref('gameState');
  readState.on("value",function(data){
    gameState = data.val();
  });

  function update(state){
    database.ref('/').update({
      gameState:state
    });
  }

  feed = createButton("feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("add food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

  foodObj = new Food(400,400);
}


function draw() {
  backgroung(46,139,87);

  if(gameState!="Hungery"){
    feed.hide();
    addFood.hide();
    dog.remove();
   }else{
    feed.show();
    addFood.show();
    dog.addImage(sadDog);
  }

  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("last feed : " + lastFed%12 + "PM" , 350,30);
  }else if(lastFed==0){
    text("last feed : 12 AM",350,30);
  }else{
    text("last feed : " + lastFed + "Am", 350,30);
  }
}

function readStock(data)
{
  foodS.val();
}

function writeStock(x)
{
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  
  database.ref('/').update({
    Food:x
  })
}

function feedDog ()
{
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref("/").update({
  Food:foodObj.getFoodStock(),
  FeedTime:hour()
  });
}

function addFood ()
{
  foodS++;
  database.ref("/").update({
    Food:foodS
  });
}
