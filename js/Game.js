class Game{
    constructor(){}

    getState(){

        var gameStateref = database.ref('gameState')
        gameStateref.on("value",function(data){

            gameState=data.val();
        })

    }

    update(state){

        database.ref('/').update({
            gameState:state
        })

    }

    start(){

        if(gameState===0){
            player=new Player();
            player.getCount();

            form=new Form();
            form.dispaly();
        }

    }

    play(){

        form.hide();
        textSize(30);
        text("GAME START",100,100);

        Player.getPlayerinfo();

        if(allPlayers!==undefined){

          var displayPosition = 150;

            for(var plr in allPlayers){

                if(plr==="player"+player.index){

                    fill("red");

                }

                else{

                    fill("black")
                }

                displayPosition+=30;
                textSize(15);
                text(allPlayers[plr].Name+":"+allPlayers[plr].distance, 100,displayPosition);
            


            }

        }

        if(keyDown(UP_ARROW)&&player.index!==null){

            player.distance+=20
            player.update();
        }

    }
}