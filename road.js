function YellowLines(){
    this.x=230
    this.y=0;
    
    this.show=function(){
        fill("yellow");
        rect(this.x,this.y,25,50);
    }
    this.move=function(){
        this.y += 3;
    }
}