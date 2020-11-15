let render=document.getElementById('controls').childNodes[3];
let destroy=document.getElementById('controls').childNodes[5];


render.addEventListener('click',createBoxes);
function createBoxes(){
    let boxes=document.getElementById('boxes');
    let numb=Number(document.getElementById('controls').childNodes[1].value);
    let totalDiv=boxes.querySelectorAll('div').length;
    createDiv(boxes,numb,totalDiv);
};
destroy.addEventListener('click',destroyBoxes);

function destroyBoxes(){
    let boxes=document.getElementById('boxes');
    boxes.innerHTML='';
};
function createDiv(id,numb,b=0){
    for(let i=1;i<numb+1;i+=1){
        let div=document.createElement('div');
        div.style.width=(i+b)10+"px";
        div.style.height=(i+b)10+"px";
        div.style.backgroundColor='#' + ( Math.random() * 0xFFFFF0 << 0 ).toString(16);
        id.append(div);
    }
}