class form
{
    constructor()
    {
    this.title = createElement('h2');
    this.input = createInput('').attribute('placeholder', 'name')
    this.button = createButton('play');
    this.greeting = createElement('h2');
    }
    display()
{
    this.title.html('carRacingGame');
    this.title.position(250,200);
    this.input.position(200,350);
    this.button.position(250,350);
    this.button.mousePressed(()=>
    {
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount += 1
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount)
        this.greeting.html('hello ' + player.name)
        this.greeting.position(250 , 400)
    }
    )
}


}