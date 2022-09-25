const color=document.getElementsByClassName('org');
const no=document.getElementById('number');
const red=document.getElementsByClassName('red')
const b=document.querySelector(".org");
const c=document.getElementById("2")
const d=document.getElementById("3")

// console.log(color)
let i=3;

function changeColor(){
    b.style.backgroundColor="white";
    b.lastElementChild.lastElementChild.previousElementSibling.remove();
    i--;
    no.innerHTML=i;
}



b.addEventListener("click", changeColor);

function changeColoor(){
    c.style.backgroundColor="white";
    c.lastElementChild.lastElementChild.previousElementSibling.remove();
    i--;
    no.innerHTML=i;
    
}


c.addEventListener("click", changeColoor);

function changeColooor(){
    d.style.backgroundColor="white";
    d.lastElementChild.lastElementChild.previousElementSibling.remove();
    i--;
    no.innerHTML=i;
    
}

d.addEventListener("click", changeColooor);

const mark=document.getElementById("mark");

mark.addEventListener("click", function (){
    for(element of color){
        element.style.backgroundColor="white";
        red[0].remove();
    }
    no.innerHTML=0;
    
});


const ab=document.querySelector('#chessImg');
        
ab.addEventListener("mouseover", function (){
    ab.firstElementChild.style.border='solid 2px #e5effa'
    ab.firstElementChild.style.borderRadius='7px';
})

