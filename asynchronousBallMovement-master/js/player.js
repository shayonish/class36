class Player
{
    constructor()
    {
    this.index = null;
    this.distance = 0;
    this.name = null

    }
    getCount()
    {
    var playerCountRef = databse.ref('playerCount')
    playerCountRef.on('value' , (data)=>{
    playerCount = datat.val();
    })
    }
    updateCount(count)
    {database.ref('/').update({

    playerCount : count
    })}
    update()
    {
    var playerIndex = ' players / player'+ this.index
    database.ref(playerIndex).set({
    name : this.name , 
    distance : this.distance;
    }
    )
    }
    static getPlayerInfo()
    {
        var playerInfo = databse.ref('players')
        playerinfo.on('value' , (data)=>{
            allplayer = datat.val();
            })
    }
    }