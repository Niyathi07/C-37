class Form{
    constructor(){

        this.Input=createInput('');
        this.button=createButton('Start');
        this.Greeting=createElement('h2');
    }
    hide(){

        this.Input.hide();
        this.button.hide();
        this.Greeting.hide();

    }

    dispaly(){

        var Title=createElement('h2')
        Title.html("Car Racing Game")
        Title.position(500,0);

        
        this.Input.position(500,150);

        
        this.button.position(600,200);
        this.button.mousePressed(()=>{

            this.Input.hide()
            this.button.hide()

            player.name=this.Input.value()
            playerCount+= 1
            player.index=playerCount;
            player.update()
            player.updateCount(playerCount)

           
            this.Greeting.html('Welcome '+player.name);
            this.Greeting.position(520,250);

        })

    }
}