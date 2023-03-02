
let hideTextButton = document.getElementById('hideTextButton');
let hideTextButton2 = document.getElementById('hideTextButton2');

let hideText = document.getElementById('hideText');
//hideTextButton.addEventListener('click',ocultarTexto())
hideTextButton.addEventListener('click',ocultarTexto);
hideTextButton2.addEventListener('click',ocultarTexto2);
function ocultarTexto(){
    
    hideText.classList.toggle('show');
     if (hideText.classList.contains('show')){
        hideTextButton.innerHTML = '-Info';
     }
     else{
        hideTextButton.innerHTML='+Info';
     }
}
function ocultarTexto2(){
    hideTextContacto2.classList.toggle('show');
     if (hideTextContacto2.classList.contains('show')){
        hideTextButton2.innerHTML = '-Info';
     }
     else{
        hideTextButton2.innerHTML='+Info';
     }
}