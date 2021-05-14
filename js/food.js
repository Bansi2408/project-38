class Food{
    constructor() {
        this.foodStock = createButton('feed the dog');
        this.lastFeed = createButton('last feed');
        this.milk = addImage("images/Milk.png");
    }

    hide()
    {
        if(gameState!="Hungery"){
            feed.hide();
            addFood.hide();
            dog.remove();
        }else{
            feed.show();
            addFood.show();
            dog.addImage(sadDog);
        }
    }

    display()
    {

        this.foodStock= createButton('feed the dog')
        this.foodStock.html("feed the dog");
        this.foodStock.position(700,95);

        this.lastFeed= createButton('last feed')
        this.lastFeed.html("last feed");
        this.lastFeed.position(800,95);

        var x=80,y=100;

        imageMode(CENTER);
        image(this.image,720,720,70,70);

        if(this.foodStock!=0){
           for(var i = 0; i<this.foodStock; 1++){
            if(1 % 10 == 0 ) {
            x=80;
            y=y+50;
           }
            image(this.image,x,y,50,50);
            x=x+30;
            }
        }

        currentTime=hour();
        if(currentTime==(lastFed+1)){
            update("playing");
            foodObj.garden();
        }else if(currentTime==(lastFed+2)){
            update("Sleeping");
            foodObj.bedroom();
        }else if(currentTime>(lastFed+2) && currentTime<=(lastFed+4)){
            update("Bathing");
            foodObj.washroom();
        }else{
            update("Hungery")
            foodObj.display();
        }
    }

    bedroom(){
        background(bedroom,550,500);
    }

    garden(){
        background(garden,550,500);
    }

    washroom(){
        background(washroom,550,500);
    }

    
}