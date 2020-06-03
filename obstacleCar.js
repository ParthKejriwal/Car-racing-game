function ObstacleCars(){
    this.x=random(50,350);
    this.y=0;
    this.xspeed=1;
    this.yspeed=0;
    
    this.show=function(){
        image(obstacleCarsImg,this.x,this.y,50,80);
    }
    this.move=function(){
        this.y += 3;
    }
}