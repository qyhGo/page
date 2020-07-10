var deg = 360/11;
for(var i=0;i<document.querySelectorAll('img').length;i++){
    document.querySelectorAll('img')[i].style.transform = 'rotateY('+ i*deg +'deg) translateZ(350px)'
}