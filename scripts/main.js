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
        let rutDigit = returnDigit(rutInput.value);
        rutOutput.innerText = `${Number(rutInput.value).toLocaleString('es-CL')}-${rutDigit}`;

        outputContainer.classList.toggle('inactive');
        button.style.opacity = 0;
        errorMsg.style.opacity = 0;
    }
});

function returnDigit(rut) {
    let arrayRut = rut.split('');
    let reverseRut = arrayRut.reverse();
    let number = 2;
    let total = 0;
    let digit = 0;
    for (const d of reverseRut) {
        if(number > 7){
            number = 2;
        }
        total = total + (Number(d) * number);
        number++;
    }
    digit = 11 - total%11;
    
    switch(digit){
        case 10:
            return 'K';
        case 11:
            return 0;
        default:
            return digit;
    }
}