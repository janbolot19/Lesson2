
window.onload = function() {
    var pos = 0; 
    var sw = 0;
    var kos = 0;
   //our box element
   var box = document.getElementById('box');
   var t = setInterval(move, 10);
 
   function move() {
       if (sw==0){
           if(pos >= 150){
               sw=1;
           }
           else {
               pos += 1;
               box.style.left = pos+'px';
           }
       }
       else if (sw==1){
           if(kos >= 150){
               sw=2;
           }
           else {
               kos += 1;
               box.style.top = kos+'px';
           }
       }
       
       else if(sw==2){
           if(pos <=0) {
               sw=3;
           }
           else {
               pos -= 1;
               box.style.left = pos+'px';
           }
       }
       
       else if(sw==3){
           if(kos <=0) {
               sw=0;
           }
           else {
               kos -= 1;
               box.style.top = kos+'px';
           }
       }
   }
};


var c=0;
var p;

function start () {
    c++;
    document.getElementById("div").innerHTML=c;
}
function btn1() {
    c=0;
    p=setInterval("start()", 100);
}
function btn2() {
    clearInterval(p);
}
