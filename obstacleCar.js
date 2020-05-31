function spawnObstacleCars(){
    this.x=random(50,350);
    this.y=0;
    this.xspeed=1;
    this.yspeed=5;
    
    this.show=function(){
    image(obstacleCarsImg,this.x,this.y,20,50);
    }
    
    this.move=function(x,y){
    this.xspeed=x;
    this.yspeed=y;
    }
    
    this.update=function(x,y){
        this.x=this.x+this.xspeed;
        this.x=this.x+this.xspeed;
    }
}