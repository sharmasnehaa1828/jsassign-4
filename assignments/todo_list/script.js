const div = document.getElementsByClassName('todos')[0];
const Buton = document.getElementsByTagName('button')[0];
let Intake = document.getElementsByTagName('input')[0];
var countervalue = 0;

Buton.addEventListener('click',()=>{
    let p = document.createElement('p');
    p.setAttribute("key", countervalue);
    p.textContent = Intake.value;
    p.addEventListener("click",function(){
        remove(this);
    })
    div.appendChild(p)
    Intake.value = ''
    countervalue += 1;
})

function remove(elem){
    elem.remove();
}