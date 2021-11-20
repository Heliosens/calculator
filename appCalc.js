let frame = document.getElementsByTagName('span');
let screen = document.getElementById('screen');
let equal = document.getElementById('equal');
let itemFrame = document.getElementById('container').getElementsByTagName('div');


for(let i = 0 ; i < frame.length ; i++){
    frame[i].addEventListener('click', function (){
        screen.innerHTML += frame[i].innerHTML;
    })
}

equal.addEventListener('click', function (){
    let result = eval(screen.innerText);
    if(isNaN(result)){
        screen.innerHTML = "error";
    }
    else {
        screen.innerHTML = result.toString();
    }

})

let item;

for (let i = 0 ; i < itemFrame.length; i++){
    itemFrame[i].addEventListener('click', function (){
        console.log(i);
        switch (i){
            case 1 :
                screen.innerHTML = "";
                break;
            case 2 :
                screen.innerHTML += itemFrame[i].innerHTML;
                break;
            case 3 :
                screen.innerHTML = screen.innerHTML.slice(0, -1);
        }
    })
}

