let frame = document.getElementsByTagName('span');
let screen = document.getElementById('screen');
let equal = document.getElementById('equal');

for(let i = 0 ; i < frame.length ; i++){
    frame[i].addEventListener('click', function (){
        screen.innerHTML += frame[i].innerHTML;
    })
}

equal.addEventListener('click', function (){
    screen.innerHTML = eval(screen.innerText);
})

