function PlayerCar(){
this.x=200;
this.y=195;
this.xspeed=1;
this.yspeed=0;

this.show=function(){
image(carImg,this.x,this.y,50,80);
}

this.move=function(x,y){
this.xspeed=x;
this.yspeed=y;
}

this.update=function(x,y){
    this.x=this.x+this.xspeed;
    this.x=this.x+this.xspeed;
}

this.touch=function(pos){
   var d=dist(this.x,this.y,pos.x,pos.y);
   if(d>1){
    return true;
   } else{
    return false;
   }
}
        
}