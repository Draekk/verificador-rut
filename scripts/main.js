const rutInput = document.querySelector('input');
const button = document.querySelector('button');
const outputContainer = document.querySelector('.c-h3');
const rutOutput = document.querySelector('.c-h3 h3');
const errorMsg = document.querySelector('.error');


button.addEventListener('click', () => {
    if(isNaN(Number(rutInput.value)) || rutInput.value.length != 8){
        errorMsg.style.opacity = 100;
        errorMsg.innerText = 'Introduzca un Rut válido';
    } else if(rutInput.value.indexOf('.') !== -1){
        errorMsg.style.opacity = 100;
        errorMsg.innerText = 'Introduzca su Rut sin puntos';
    } else if(outputContainer.classList.contains('inactive')){
        outputContainer.classList.toggle('inactive');
        button.style.opacity = 0;
        errorMsg.style.opacity = 0;
    }
});
