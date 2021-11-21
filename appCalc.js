// get touch
let frame = document.getElementsByTagName('span');
let screen = document.getElementById('screen');
let itemFrame = document.getElementById('container').getElementsByTagName('div');

// listen touch to write on screen
for(let i = 0 ; i < frame.length ; i++){
    frame[i].addEventListener('click', ()=>screen.innerHTML += frame[i].innerHTML)
}

// listen frame to calcul
let result =0;
for (let i = 0 ; i < itemFrame.length; i++){
    itemFrame[i].addEventListener('click', function (){
        switch (i){
            case 1 : // C
                screen.innerHTML = "";
                break;
            case 2 : // Ans
                if (isNaN(result)){
                    screen.innerHTML += "";
                }
                else {
                    screen.innerHTML += result;
                }
                break;
            case 3 : // backspace
                screen.innerHTML = screen.innerHTML.slice(0, -1);
                break;
            case 4 : // equal
                result = eval(screen.innerText);
                if(isNaN(result)){
                    screen.innerHTML = "error";
                }
                else {
                    screen.innerHTML = result.toString();
                }
                break;
        }
    })
}
