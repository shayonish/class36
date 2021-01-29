
class Game
{
    constructor()
    {
      

    }
    getstate()
    {
    var gameStateRef = databse.ref('Gamestate')
    gameStateRef.on('value' , (data)=>{
    gameState = datat.val();
    })
    }
    update(state)
    {database.ref('/').update({

    Gamestate : state
    })}
    start()
    {
    if(gameState === 0 )
    {
        player = new Player()
        player.getCount();
        form = new Form()
        form.display();
    }
    }
    play()
    {
        form.hide();
        textSize(30);
        text('gameStarted' , 120 , 100);    
        Player.getPlayerInfo();
        if(allPlayer !== undefined)
        {
         for(var p in allPlayer)
         {
         var displayPosition = 130
         displayPosition += 20
         textSize(15);
         text(allPlayer[p].name + ':' + allPlayer[p].distance , 120 , displayPosition)
        }
        }
        if(keyDown(UP_ARROW)&&player.index !== null)
        {
         player.distance += 50;
         player.update();   
        }
    }
}