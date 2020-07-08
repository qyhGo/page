//利用id为标签添加事件
var tenCent = document.getElementById('ten');
var aLi = document.getElementById('ali');
var hW = document.getElementById('hw');

tenCent.addEventListener('click',clLink);
aLi.addEventListener('click',clLink);
hW.addEventListener('click',clLink);

function clLink(){
    var imgList = document.querySelectorAll('.footer img');
    for(var i=0;i<imgList.length;i++){
        imgList[i].className = 'hide';
    }
    var imgId = this.attributes['data-img'].value;
    var img = document.getElementById(imgId);
    if(img.className === 'hide'){
        img.className = '';
    }
    else{
        img.className = 'hide';
    }
}
// ------------------------

var findM = document.getElementById('find-m');
var findM_input = findM.querySelector('#find-m input');

findM.addEventListener('click', spanClick);
findM_input.addEventListener('blur', inputBlur);
findM_input.addEventListener('keypress', inputKeypress);

function spanClick(){
    this.className = 'edit';
    var input = this.querySelector('input');
    input.focus();
    input.setSelectionRange(0, input.value.length);
}

function inputBlur(){
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.className = '';
}

function inputKeypress(event){
    if(event.which === 13){
        inputBlur.call(this);
    }
}